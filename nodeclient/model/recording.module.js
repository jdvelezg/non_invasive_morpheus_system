const { v4: uuidv4 } = require('uuid');
const { spawn  } = require('node:child_process');
const MboxDataStore = require('./datastore.module.js');
const Agent = require('../streamer.module.js');

/**
 * Constructor for Recording object
 * encapsulates the logic to start and execute a recording
 * @param {*} device object with params of this device
 * @param {*} patient object with identifiers for the patient recorded
 */
function Recording(device,patient,mbox){
    this.mbox = mbox;
    this.uuid = uuidv4();
    this.startDate ="";
    this.stopdate ="";
    this.patient = patient;
    this.device = device;
    this.recorders = [];
    this.streamers = [];
}

//Datarecord constructor
function DataRecord(sensor_uuid,recording_uuid){
    this.uuid = uuidv4();
    this.sensor_uuid = sensor_uuid;
    this.recording_uuid = recording_uuid;
    this.timestamp = null;
    this.signal = null;
}

Recording.prototype.rawData = function(){
    return {
        uuid: this.uuid,
        startDate:this.startDate,
        stopdate:this.stopdate,
        patient:this.patient,
        registeredDevice:{uuid:this.device.uuid},
    };
}

//Factory function to create new datarecords
Recording.prototype.dataRecordFactory = function(sensor_uuid,recording_uuid){
    return new DataRecord(sensor_uuid,recording_uuid);
}


//execute the enabled recorders
Recording.prototype.startRecording = function(configData,sensorArray) {
    this.startDate = Date.now();
    dataStore = new MboxDataStore(this.mbox);
    //saves information into the recordings_record.
    dataStore.saveRecording(this.rawData()).then( 
        (ok) =>{
            console.log(ok);
            if(!ok){
                console.log(Date.now(), "Error ocurred when savig Recording data:");
            }else{
                console.log('recording stored');
                console.log('starting recorders');
                //Start recorders
                this.recorders = this._startRecorders(configData,sensorArray, this.uuid);
            }
        });
};

/**
 * Start the recorders of a recording
 * (for internal use only - to invoke use startRecording)
 * @param {*} sensorArray 
 * @param {*} recording_uuid 
 * @returns array of [<ChildProcessWithoutNullStreams>] with a list of all subprocess executed
 */
Recording.prototype._startRecorders = function(configData,sensorArray, recording_uuid){
    const recorders = [];

    for (const sensor of sensorArray){
        console.debug(sensor)
        const recorder = sensor.recorder;  

        //if is a streamer activates the diggester in the server
        if(recorder.streamer){
            console.log("Enabling streaming for this recording...");
            
            Agent.startMqttRecording(configData,sensor.uuid,recording_uuid).then(
                (mssg)=>{
                    if(mssg.error){
                        console.error("Error200 caused the streaming not enabled: "+mssg);
                      }else{
                        console.info("MQTT Streaming enabled: "+mssg);
                        this.streamers.push({sensor_uuid: sensor.uuid, recording_uuid: recording_uuid});
                      }
                }
            ).catch(error => {
                console.error("Error caused the streaming not enabled: _error:\n"+error);
            });

        }else{
            console.log("Streaming is not enabled for this recording");
        }        
        
        //set params for execution
        const param_sensor_uuid = "--sensor_uuid=".concat(sensor.uuid);
        const param_recording_uuid = "--recording_uuid=".concat(recording_uuid);
        const param_path = "--path=".concat(this.mbox.mbox_datarecord_folder_path);
        const params = recorder.params.split(" ");
        //const command = recorder.command.concat(" ./recorders/").concat(recorder.filepath);
        const command = recorder.command
        const script = "recorders/".concat(recorder.filepath);
        const args = Array.prototype.concat.apply([script,param_sensor_uuid,param_recording_uuid,param_path], params);
        console.log(Date.now(),'execute command: '+command+" "+script+" "+param_sensor_uuid+" "+param_recording_uuid+" "+param_path+" "+params)
        //creates a new subprocess
        //const exec = spawn(command, [param_sensor_uuid, param_recording_uuid, param_path, params]);
        const exec = spawn(command, args);
        exec.stdout.on('data', (data) => {
            console.log('stdout:',data.toString());
        });
        exec.stderr.on('data', (data) => {
            console.error('stderr:',data.toString());
        });
        exec.on('close', (code, signal) => {
            console.log(Date.now(),
              'child recorder pid:'+exec.pid.toString()+' terminated due to receipt of signal '+signal);
        });
        recorders.push(exec);/**/
        //break;
    }

    return recorders;
}

/**
 * 
 * @param {*} recorder_array array with PID of recorders initiated
 */
Recording.prototype._stopRecorders = function(recorder_array){
    for (const recorder of recorder_array){
        recorder.kill('SIGINT');//SIGHUP
    }
}

Recording.prototype._stopStreamers = function(configData,streamer_array){
    console.log("Stopping streamer listeners...")
    for (const streamer of streamer_array){
        Agent.stopMqttRecording(configData,streamer.sensor_uuid,streamer.recording_uuid);
    }
}

Recording.prototype.stopRecording = async function(configData) {
    try{
        
        const promise = new Promise((resolve, reject) => {
            //end process of recorders
            this._stopRecorders(this.recorders);
            //end mqtt diggesters
            this._stopStreamers(configData, this.streamers);
            dataStore = new MboxDataStore(this.mbox);
            //update the recording
            this.stopdate = Date.now();
            //var recordings = await dataStore.loadRecordings();
            //saves information into the recordings_record.
            dataStore.updateRecording(this.rawData()).then( 
                (res) =>{
                    console.log(Date.now(),'update recording finished:');
                    console.log(Date.now(),res);
                }
            );
            
            console.debug(Date.now(),'recorder-lenght: '+this.recorders.length);
            if(this.recorders.length > 0){
                //join datarecord files
                const files = this.mbox.mbox_datarecord_folder_path.concat("/").concat(this.uuid).concat("_*.json");
                const dest = this.mbox.mbox_datarecord_folder_path.concat("/").concat(this.uuid).concat(".json");
                const cat = spawn('sh', ['-c','cat '+files+' >> '+dest+' && gzip '+dest]);
                
                cat.stdout.on('data', (data) => {
                    console.log('stdout:',data.toString());
                });
                cat.stderr.on('data', (data) => {
                    console.log('stdout:',data.toString());
                    reject(new Error(data.toString()))
                });
                cat.on('close', (code, signal) => {
                    console.log(Date.now(),
                'cat process pid:'+cat.pid.toString()+' terminated due to receipt of signal '+signal);
                });
                cat.once('exit', (code,signal) =>{ resolve(true); });
            }
        });
                
        return promise;

    }catch(err){
        console.log(Date.now(),"Error stoping recording: "+err);
        return false;
    }
};

//export constructor
module.exports = Recording;
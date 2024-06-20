//load local modules
const Agent = require('./streamer.module.js');
const mbox = require('./local.module.js');
const path = require('path');
const fs = require('fs');


//to persist LOGGING run as: node app.js > app.log 2>&1
console.log("System Morpheus-Box initializing...")
console.log(mbox.mbox_configuration_url);

//load current configuration
mbox.mbox_configuration = mbox.loadLocalBoxConfiguration();
const stompclient = null;

//saves the file before exit
process.on( 'SIGINT', function() {
  console.log( "\n Shutting down Morpheus-Box System from SIGINT (Ctrl-C)" );
  mbox.saveLocalBoxConfiguration();

  if(mbox.mbox_configuration.device.isRecording){
    delete mbox.mbox_configuration.device.currentRecording;
    if(mbox.mbox_configuration.device.isRecording){
      let recording = mbox.currentRecording;
      mbox.stopRecording(recording).finally(
        ()=>{
          console.log("Bye!");
          process.exit( );
        }
      );
    }
    delete mbox.mbox_configuration.device.isRecording;
  }else{
    console.log("Bye!");
    process.exit( );
  }  
});

/**
 * Check the agentMssg for error.
 * When no error, start stomp-client.
 * subscribe to messaging queues.
 */
mbox.readBoxIP().then(
  (ip4) => {
    //get IPAddress
    mbox.mbox_configuration.device.ipAddress = ip4;
    //sync device configuration
    Agent.syncDevice(mbox.mbox_configuration).then(
      (mssg) => {
        if(mssg.error){
          mbox.onError(mssg.message);
        }else{
          console.log(mssg.message);
          mbox.mbox_configuration.device = mssg.response;
          //Setup ws-client
          mbox.stompclient = mbox.setupStompClient();
          mbox.stompclient.onConnect = function (frame) {
            //subscribes in queue for the device
            const device_uuid =mbox.mbox_configuration.device.uuid;
            const commands = mbox.stompclient.subscribe('/queue/'.concat(device_uuid), onCommandMessage);          
            //send device information to the status topic
            mbox.stompclient.publish({
              destination: '/app/report_online',
              body: JSON.stringify(mbox.mbox_configuration.device),
              headers: { priority: '9' },
            });
          };
          //activate connection
          mbox.stompclient.activate();
        }
      }
    ).catch(
      (err) =>{
        onServerFailure(err);
      }
    );
  }
);


/**
 * Check the error message
 * Start a default recording using the configuration
 * @param {*} errorMssg 
 */
const onServerFailure = function(errorMssg){
  if(errorMssg.code === "ECONNREFUSED"){
    console.log(Date.now(),"Server unavailable. Starting new default recording...");
    mbox.mbox_configuration.device = mbox.mbox_configuration.device;
    const device = mbox.mbox_configuration.device;
    //check no recording in progess
    if(!device.isRecording){
      //start recording
      let recording = mbox.startRecording();
      mbox.currentRecording = recording;
    }
  }//if-ECONNREFUSED
};

/**
 * Stops the client & then start it again
 * @param {*} stompclient 
 */
const resetStompClient = function(stompclient){
  stompclient.deactivate();
  stompclient.activate();
  
};

/**
 * Process a message sent instructing a specific command.
 * 
 * @param {*} commandMessage a dictionary with the following fields:
 * {
 *  "ACTION": [SET_PATIENT | ONLINE_SIGNAL | SYNC_DEVICE | LIST_SENSORS | ACTIVATE_SENSOR | DEACTIVATE_SENSOR | ADD_SENSOR  | REMOVE_SENSOR | START_RECORDING | STOP_RECORDING ]
 *  "PARAMS": { "<LABEL>": "<PARAM>"} <LABEL> string with the description of the parameter sent; <PARAM> object|string with the param
 * }
 * 
 */
var onCommandMessage = function(stompMssg){
  let commandMessage = JSON.parse(stompMssg.body);
  console.log(Date.now(),"processing commandMessage:");
  console.log(commandMessage);
  try{
      const params = commandMessage.PARAMS;

      //ONLINE_SIGNAL
      if(commandMessage.ACTION === "ONLINE_SIGNAL"){
        console.log(Date.now(),"replying ONLINE_SIGNAL.");
        const device_uuid =mbox.mbox_configuration.device.uuid;
        mbox.stompclient.publish({
          destination: '/topic/'.concat(device_uuid),
          body: JSON.stringify({ACTION: 'ONLINE_SIGNAL',PARAMS:device_uuid}),
          headers: { priority: '9' },
        });
      }else

      //RECORDING_STATUS
      if(commandMessage.ACTION === "RECORDING_STATUS"){
        console.log(Date.now(),"replying RECORDING_STATUS.");
        const device_staus =mbox.mbox_configuration.device.isRecording;
        const device_uuid =mbox.mbox_configuration.device.uuid;
        mbox.stompclient.publish({
          destination: '/topic/'.concat(device_uuid),
          body: JSON.stringify({ACTION: 'RECORDING_STATUS',PARAMS:device_staus}),
          headers: { priority: '9' },
        });
      }else

      //SYNC_DEVICE: retrieve new information of the device
      if(commandMessage.ACTION === "SYNC_DEVICE"){
        console.log(Date.now(),"replying SYNC_DEVICE.");
        Agent.updateDevice(mbox.mbox_configuration).then(
          (mssg) => {
            if(mssg.error){
              mbox.onError(mssg.message);
            }else{
              console.log(mssg.message);
              const info = mssg.response[0];
              mbox.mbox_configuration.device.name = info.name;
              mbox.mbox_configuration.device.type = info.type;
              mbox.mbox_configuration.device.active = info.active;
              mbox.mbox_configuration.device.bedDimensionUnits = info.bedDimensionUnits;
              mbox.mbox_configuration.device.xBedDimension = info.xBedDimension;
              mbox.mbox_configuration.device.yBedDimension = info.yBedDimension;
              mbox.mbox_configuration.patient.uuid = info.patientDto['uuid'];
              mbox.mbox_configuration.patient.name = info.patientDto['name'];
            }
          }
        ).catch(
          (err) =>{
            console.error(Date.now(),err);
          }
        );
      }else

      //LIST_SENSORS: Send the list of sensors set in the configuration
      if(commandMessage.ACTION === "LIST_SENSORS"){
        console.log(Date.now(),"replying LIST_SENSORS.");
        Agent.syncSensors(mbox.mbox_configuration).then(
          (mssg) => {
            if(mssg.error){
              mbox.onError('error: '+mssg.message);
            }else{
              console.log(mssg.message);
              //check device
              const sensorList = mssg.response;
              const device_uuid =mbox.mbox_configuration.device.uuid;

              for(var i=0; i<sensorList.length; i++){
                var sensor = sensorList[i];
                const current_uuid =sensor.registeredDevice.uuid;
                if(current_uuid === device_uuid){
                  delete sensor['registeredDevice'];
                  //mbox.mbox_configuration.sensors = mbox.updateSensor(sensor);
                  mbox.updateSensor(sensor);
                }//if-uuid
              }
              console.log(Date.now(),"publishing LIST_SENSORS.");
              const list = mbox.mbox_configuration.sensors;
              mbox.stompclient.publish({
                destination: '/topic/'.concat(device_uuid),
                body: JSON.stringify({ACTION: 'LIST_SENSORS',PARAMS:list}),
                headers: { priority: '9' },
              });
            }
          }
        ).catch(
          (err) =>{
            console.error(Date.now(),err);
          }
        );

      
      }else

      //LIST_RECORDER_FILES: ahre a filelist of recorders
      if(commandMessage.ACTION === "LIST_RECORDER_FILES"){
        console.log(Date.now(),"replying LIST_RECORDER_FILES signal.");
        directory = "./recorders/"
        fs.readdir(directory, (err, files) => {
          recorderFiles = [];
          files.forEach(file => {
            if (!fs.lstatSync(path.resolve(directory, file)).isDirectory()) {
              recorderFiles.push(file);
            } 
          });
          const device_uuid =mbox.mbox_configuration.device.uuid;
          //send reply
          mbox.stompclient.publish({
            destination: '/topic/'.concat(device_uuid),
            body: JSON.stringify({ACTION: 'LIST_RECORDER_FILES',PARAMS:recorderFiles}),
            headers: { priority: '9' },
          });
        });
        
      }else


      //SET_PATIENT: Assign a new patient UUID to the mbox JSON configuration
      if(commandMessage.ACTION === "SET_PATIENT"){
          console.log(Date.now(),"setting updated patient.");
          mbox.mbox_configuration.patient.uuid = params['uuid'];
          mbox.mbox_configuration.patient.name = params['name'];
      }else

      //ACTIVATE_SENSOR
      if(commandMessage.ACTION === "ACTIVATE_SENSOR"){
          var sensorUUID = params['uuid'];
          mbox.mbox_configuration.sensors = mbox.activateSensor(sensorUUID);
          console.log(Date.now(),sensorUUID.concat("sensor is set as active."));
          const list = mbox.mbox_configuration.sensors;
          const device_uuid =mbox.mbox_configuration.device.uuid;
          mbox.stompclient.publish({
            destination: '/topic/'.concat(device_uuid),
            body: JSON.stringify({ACTION: 'LIST_SENSORS',PARAMS:list}),
            headers: { priority: '9' },
          });
      }else

      //DEACTIVATE_SENSOR
      if(commandMessage.ACTION === "DEACTIVATE_SENSOR"){
          var sensorUUID = params['uuid'];
          mbox.mbox_configuration.sensors = mbox.deactivateSensor(sensorUUID);
          console.log(Date.now(),sensorUUID.concat("sensor is set as inactive."));
          const list = mbox.mbox_configuration.sensors;
          const device_uuid =mbox.mbox_configuration.device.uuid;
          mbox.stompclient.publish({
            destination: '/topic/'.concat(device_uuid),
            body: JSON.stringify({ACTION: 'LIST_SENSORS',PARAMS:list}),
            headers: { priority: '9' },
          });
      }else

      //ADD_SENSOR
      if(commandMessage.ACTION === "ADD_SENSOR"){
          var sensorObj = params['sensor'];
          Agent.addSensor(sensorObj,mbox.mbox_configuration).then(
            (mssg) => {
              if(mssg.error){
                mbox.onError(mssg.message);
              }else{
                console.log(mssg.message);
                const sensor = mssg.response;
                mbox.mbox_configuration.sensors = mbox.addSensor(sensor);
                console.log(Date.now(),sensorObj.name.concat("sensor added."));
                const list = mbox.mbox_configuration.sensors;
                const device_uuid =mbox.mbox_configuration.device.uuid;
                mbox.stompclient.publish({
                  destination: '/topic/'.concat(device_uuid),
                  body: JSON.stringify({ACTION: 'LIST_SENSORS',PARAMS:list}),
                  headers: { priority: '9' },
                });
              }
            }
          ).catch(
            (err) =>{
              console.error(Date.now(),err);
              const list = mbox.mbox_configuration.sensors;
              const device_uuid =mbox.mbox_configuration.device.uuid;
              mbox.stompclient.publish({
                destination: '/topic/'.concat(device_uuid),
                body: JSON.stringify({ACTION: 'PROCEDURE_FAIL',PARAMS:{message:err,origin:'ADD_SENSOR'}}),
                headers: { priority: '9' },
              });
            }
          );
      }else

      
      //REMOVE_SENSOR
      if(commandMessage.ACTION === "REMOVE_SENSOR"){
          var sensorUUID = params['uuid'];
          mbox.mbox_configuration.sensors = mbox.removeSensor(sensorUUID);
          Agent.deleteSensor(sensorUUID,mbox.mbox_configuration).then(
            (mssg) => {
              if(mssg.error){
                mbox.onError(Date.now(),mssg.message);
              }else{
                console.log(mssg.message);
              }
            }
          ).catch(
            (err) =>{
              console.error(Date.now(),err);
            }
          );
          console.log(Date.now(),sensorUUID.concat(" sensor removed."));
          const list = mbox.mbox_configuration.sensors;
          const device_uuid =mbox.mbox_configuration.device.uuid;
          mbox.stompclient.publish({
            destination: '/topic/'.concat(device_uuid),
            body: JSON.stringify({ACTION: 'LIST_SENSORS',PARAMS:list}),
            headers: { priority: '9' },
          });
      }else

      //START_RECORDING
      if(commandMessage.ACTION === "START_RECORDING"){
        const device = mbox.mbox_configuration.device;
        //check no recording in progess
        if(!device.isRecording){
          console.log(device.isRecording);
          //start recording
          console.log(Date.now(),"starting new recording...");
          let recording = mbox.startRecording();
          mbox.currentRecording = recording;
          //report created recording
          mbox.stompclient.publish({
            destination: '/app/recordings',
            body: JSON.stringify(recording.rawData()),
            headers: { priority: '9', device: mbox.mbox_configuration.device.token },
          });
        }else{
          console.log(Date.now(),"Cant start new recording. Stop current instead.");
          console.log(device.isRecording);
          //stop recording
          let recording = mbox.currentRecording;
          mbox.stopRecording(recording);
          //report updated recording
          mbox.stompclient.publish({
            destination: '/app/recordings',
            body: JSON.stringify(recording.rawData()),
            headers: { priority: '9', device: mbox.mbox_configuration.device.token },
          });
        }
          
          
      }else

      //STOP_RECORDING
      if(commandMessage.ACTION === "STOP_RECORDING"){
          //stop recording
          console.log("stopping recording...");
          let recording = mbox.currentRecording;
          const recording_uuid = recording.uuid;
          const device_uuid =mbox.mbox_configuration.device.uuid;

          if(mbox.mbox_configuration.device.isRecording){
            mbox.stopRecording(recording).then(
              (res) =>{
                //report updated recording
                mbox.stompclient.publish({
                  destination: '/app/recordings',
                  body: JSON.stringify(recording.rawData()),
                  headers: { priority: '9', device: mbox.mbox_configuration.device.token },
                });
                mbox.currentRecording ={};
                //report RECORDING_STATUS
                const device_staus =mbox.mbox_configuration.device.isRecording;
                mbox.stompclient.publish({
                  destination: '/topic/'.concat(device_uuid),
                  body: JSON.stringify({ACTION: 'RECORDING_STATUS',PARAMS:device_staus}),
                  headers: { priority: '9' },
                });
                //SEND Datarecords
                const dataPathfile = mbox.mbox_datarecord_folder_path.concat("/").concat(recording_uuid).concat(".json").concat(mbox.compression);
                console.debug(Date.now(),'check datarecord-file: '+dataPathfile);
                fs.access(dataPathfile,fs.constants.F_OK,(err) =>{
                    if(!err){
                      const data = fs.readFileSync(dataPathfile);
                      if(data.length == 0){
                        console.log("datarecords are empty");

                      }else{
                        console.debug(Date.now(),'sending datarecord-file');
                        Agent.syncDatarecords(recording_uuid, data, mbox.mbox_configuration).then(
                          (mssg) =>{
                            if(mssg.error){
                              mbox.onError(mssg.message);
                            }else{
                              console.log(mssg.message);
                            }
                          }
                        ).catch(
                          (err) => {
                            console.error(Date.now(),err);
                            const device_uuid =mbox.mbox_configuration.device.uuid;
                            mbox.stompclient.publish({
                              destination: '/topic/'.concat(device_uuid),
                              body: JSON.stringify({ACTION: 'PROCEDURE_FAIL',PARAMS:{message:err,origin:'SYNC_DATARECORDS'}}),
                              headers: { priority: '9' },
                            });
                          }
                        );//Agent.syncDatarecords
                      }//if(data.lenght)
                    }//if(err)
                });//fs.access.then
            });//stopRecording.then
          }//if-isrecording
      }//if-STOP_RECORDING

  }catch(err){
      console.error("Invalid commandMessage:");
      console.error(err);
  }
  
};



//function to start a recording


//function to start c++/python recorders

//function to stream data 
/**/
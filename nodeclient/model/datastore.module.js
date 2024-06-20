const { readFile, appendFile, writeFile, existsSync } = require('fs');
const os = require('os');

/**
 * Object to store data in a JSON format for the mbox  edge infrastructure
 */
function MboxDataStore(mbox){
    this.mbox = mbox;
    console.log("MboxDataStore init");
    const path = this.mbox.mbox_recording_record_path;
    if(!existsSync){
        writeFile(path,'{}','utf8', (err) =>{ 
            console.error(Date.now(),'Error creating record File: '+err);
            noError = false;
            });
    }
    
}

/**
 * Saves a recording object in the record datastore
 * @param {*} recording Object to store
 * @param {*} path path to store the records
 * @returns true if save  end ok false if error
 */
MboxDataStore.prototype.saveRecording = async function(recordingObj, path=this.mbox.mbox_recording_record_path){
    console.log(Date.now(),'store new recording record');
    console.log('recording_path');
    console.log(path);
    var noError=true;
    const recording_uuid = recordingObj.uuid;
    //add a string representation in one line
    var dataline = ",".concat(JSON.stringify(recordingObj)).concat(os.EOL);
    console.log('dataline');
    console.log(dataline);
    await appendFile(path,dataline, 'utf8', (err) =>{ 
        console.error(Date.now(),err);
        noError = err==null;
        });
    var recordPath =this.mbox.mbox_datarecord_folder_path.concat('/').concat(recording_uuid).concat(".json");
    await writeFile(recordPath,'','utf8', (err) =>{ 
        console.error(Date.now(),err);
        noError = err==null;
        });
    return noError;
};

/**
 * 
 * @param {*} path path to read
 * @returns Array with all the Recording records
 */
MboxDataStore.prototype.loadRecordings = async function(path=this.mbox.mbox_recording_record_path){
    var recordings = [];
    await  readFile(path, 'utf8', (err,data) => {
        if(err){
            console.error(Date.now(), 'Error reading recording records');
        }else{
            struct ='['.concat(data).concat(']');
            recordings = JSON.parse(struct);
        }
    });
    return recordings;
};

MboxDataStore.prototype.sanitazeJsonString = function(json_string){
    if(json_string.charAt(0) === ","){
        let str = json_string.slice(1,json_string.lenght);
        return str;
    }
    return json_string;
};

MboxDataStore.prototype.updateRecording = async function(recordingObj, path=this.mbox.mbox_recording_record_path){
    await readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(Date.now(), 'Error reading for update recording records');
        } else {
            
            const values = this.sanitazeJsonString(data); 
            const struct = '['.concat(values).concat(']');
            //console.debug('struct');
            //console.debug(struct);

            var json_recordings = JSON.parse(struct);
            var recordings = [];
            json_recordings.forEach((element,index) => {
                //console.debug("eval "+element.uuid+" vs "+recordingObj.uuid);
                if (element.uuid === recordingObj.uuid) {
                    date = Date.now();
                    //console.debug("match!",date);
                    element.stopdate = Date.now();
                }else{
                    //console.debug("unmatch");
                }
                recordings.push(element);
            });
            
            var jsonStr = JSON.stringify(recordings);
            var unStruct ="";
            if(jsonStr.charAt(1) === ","){
                unStruct = jsonStr.slice(2,jsonStr.length-1);//erase this characthers: ][,
            }else 
            if(jsonStr.charAt(0) === "["){
                unStruct = jsonStr.slice(1,jsonStr.length-1);//erase this characthers: ][
            }
                    
            const format = unStruct.replaceAll("},{","}\r\n,{");
            //console.debug('format')
            //console.debug(format)
            writeFile(path,format,'utf8', (err) =>{ 
                console.error(Date.now(),err);
                });          
        }
    });
}

MboxDataStore.prototype.resetRecordingRecord = function(){
    const path = this.mbox.mbox_recording_record_path;
    writeFile(path,'','utf8');
}

/**
 * Module to store and read Recordings
 */
module.exports = MboxDataStore;

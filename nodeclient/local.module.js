//load file I/O Manager
const { readFileSync, writeFileSync } = require('fs');
//load system query lib
const system = require('systeminformation');
//Dependency missing on stompJs:  https://stackoverflow.com/questions/43311238/javascript-referenceerror-websocket-is-not-defined
Object.assign(global, { WebSocket: require('ws') });
const StompJs = require('@stomp/stompjs');
const Recording = require('./model/recording.module.js');


module.exports = {

    /**
     * path of mbox JSON configuration file
     */
    mbox_configuration_url: "./mbox_config.json",


    /**
     * URL of Agent socket-webserver
     */
    mbox_websocket_endpoint: "ws://141.37.168.27:8080/morpheusagent-websocket",


    /**
     * Slot to store an On-Memory version of mbox_config.json.
     * Any modification of the configuration should be sotred in this item.
     * The last configuration values will be saven before shutting down the system
     */
    mbox_configuration: {},

    /**
     * Path to the file storing the recording information records
     */
    mbox_recording_record_path: "./recorders/data/recording_record.json",
    mbox_datarecord_folder_path: "./recorders/data/datarecords",

    currentRecording: {},

    compression: ".gz",


    /**
     * returns the contents of the config file as JSON
     * @param {string} url 
     * @returns JSON data or null if error
     */
    loadLocalBoxConfiguration: function(path=this.mbox_configuration_url){
        const data = readFileSync(path);
        try{
            return JSON.parse(data);
        }catch(error){
            console.error("unable to load JSON local configuration url:");
            console.error(error);
            return null;
        }
    },

    /**
     * Replace the mbox JSON configuration file using the given path 
     * @param {*} path 
     * @param {*} configData 
     */
    saveLocalBoxConfiguration: function(path=this.mbox_configuration_url,configData=this.mbox_configuration){
        try{
            writeFileSync(path,JSON.stringify(configData,null,'\t'));
        }catch(error){
            console.error("unable to write JSON local configuration url:");
            console.error(error);
        }
    },


    /**
     * Handle general errors
     * @param {*} message printable error message
     */
    onError: function(message){
        console.error(message);
    },


    /**
     * Check OS for default network interface and return the current IP4 address
     * @returns IP4 address of the default network interface
     */
    readBoxIP: async function(){
        let defaultNet = await system.networkInterfaceDefault();
        let ifaces = await system.networkInterfaces();
        let ip4 = '127.0.0.1';
        for(const ifc of ifaces){
            if(ifc.iface === defaultNet ){
                ip4 = ifc.ip4;
                break;
            }
        }
        return ip4;
    },

    /**
     * Configures a StompClient binded to the MorpheusAgent server
     * @returns a StompClient with default configuration
     */
    setupStompClient: function() {

        console.log('starting stomp');
        //Starts a WS-client
        //const WebSocketClient = require('websocket').client;
      
        const stompclient = new StompJs.Client({
          brokerURL: this.mbox_websocket_endpoint,
          connectHeaders: {
            login: '',
            passcode: '',
          },
          debug: function (str) {
            console.log(str);
          },
          reconnectDelay: 30000,
          heartbeatIncoming: 4000,
          heartbeatOutgoing: 4000,
        });        
      
        stompclient.onStompError = function (frame) {
          console.log('Broker reported error: ' + frame.headers['message']);
          console.log('Additional details: ' + frame.body);
        };
      
        return stompclient;
    },

    /**
     * Search the sensor by name and set the active param to true
     * @param {*} sensor_uuid name of sensor to activate
     * @param {*} configData mbox JSON configuration
     * @returns an updated list of sensors
     */
    activateSensor: function(sensor_uuid, configData=this.mbox_configuration) {
        var sensorList = configData.sensors;
        try{
            for(var i=0; i<sensorList.length; i++){
                var uuid = sensorList[i].uuid;
                if(uuid === sensor_uuid){
                    sensorList[i].active="true";
                    break;
                }
            }

        }catch(err){
            console.error("Failed activating sensor:");
            console.error(err);
        }
        return sensorList;
    },

    updateSensor: function(sensorData, configData=this.mbox_configuration) {
        var sensorList = configData.sensors;
        try{
            console.log("sensor update");
            var deleteCount  = 0;
            for(var i=0; i<sensorList.length; i++){
                var name = sensorList[i].name;
                console.log("checking "+name);
                if(name == sensorData.name){
                    deleteCount  = 1;
                    console.log("match!");
                    break;
                }
            }
            sensorList[i] = sensorData;
            console.log("update made");

        }catch(err){
            console.error("Failed updating sensor:");
            console.error(err);
        }        
        return sensorList;
    },

    addSensor: function(sensorObj, configData=this.mbox_configuration) {
        var sensorList = configData.sensors;
        try{
            matchCount = 0;
            const sensorUUID = sensorObj.uuid;
            for(var i=0; i<sensorList.length; i++){
                var uuid = sensorList[i].uuid;
                console.log("checking for add "+uuid+"/"+sensorUUID);
                if(uuid == sensorUUID){
                    matchCount  = 1;
                    console.log("match!");
                    break;
                }
            }
            if(matchCount > 0){
                sensorList[i] = sensorObj;
                console.log("update made");
            }else{
                sensorList.push(sensorObj);
            }            

        }catch(err){
            console.error("Failed updating sensor:");
            console.error(err);
        }        
        return sensorList;

    },

    /**
     * Search the sensor by name and set the active param to false
     * @param {*} semsorName name of sensor to deactivate
     * @param {*} configData mbox JSON configuration
     * @returns an updated list of sensors
     */
    deactivateSensor: function(sensor_uuid, configData=this.mbox_configuration) {
        var sensorList = configData.sensors;
        try{
            for(var i=0; i<sensorList.length; i++){
                var uuid = sensorList[i].uuid;
                if(uuid === sensor_uuid){
                    sensorList[i].active=false;
                    break;
                }
            }
        }catch(err){
            console.error("Failed deactivating sensor:");
            console.error(err);
        }
        return sensorList;
    },

    removeSensor: function(sensorUUID, configData=this.mbox_configuration) {
        var sensorList = configData.sensors;
        try{
            var deleteCount  = 0;
            for(var i=0; i<sensorList.length; i++){
                var uuid = sensorList[i].uuid;
                console.log("checking "+uuid);
                if(uuid == sensorUUID){
                    deleteCount  = 1;
                    break;
                }
            }
            sensorList.splice(i,deleteCount);

        }catch(err){
            console.error("Failed updating sensor:");
            console.error(err);
        }        
        return sensorList;
    },


    /**
     * 
     * @param {*} configData mbox configuration
     * @returns list with all active sensors
     */
    returnActiveSensors: function(configData=this.mbox_configuration) {
        var sensorList = configData.sensors;
        var activeSensorlist = [];
        try{
            for(var i=0; i<sensorList.length; i++){
                var status = sensorList[i].active;
                if(status){
                    activeSensorlist.push(sensorList[i]);
                }
            }
            
        }catch(err){
            console.error("Failed retreiving active sensor list:");
            console.error(err);
        }
        return activeSensorlist;

    },


    /**
     * 
     * @returns Object with the current recording
     */
    startRecording: function(configData=this.mbox_configuration){
        const device = configData.device;
        const patient = configData.patient;
        //creates new Recording object
        var newRecording = new Recording(device,patient,this);
        //retrieve all active sensors
        const activeSensors = this.returnActiveSensors();
        //start recording
        newRecording.startRecording(configData,activeSensors);
        //set flag
        configData.device.isRecording=true;

        return newRecording;
    },

    stopRecording: function(recordingObj, configData=this.mbox_configuration){
        
        //unset flag
        configData.device.isRecording=false;
        //stops from the recording object
        return recordingObj.stopRecording(configData)
    }
}
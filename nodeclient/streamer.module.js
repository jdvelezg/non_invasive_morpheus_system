const axios = require('axios');
const FormData = require('form-data');

module.exports = {

    /**
     * Send a POST request with the information of current Device
     * @param {*} configData device configuration JSON object
     * @returns the AgentMessage: {message:string , response:any, error:boolean} 
     */
    syncDevice: async function(configData){
        const agent_host = configData.agent.api_url+":"+configData.agent.api_port+'/morpheusagent/devices/add';
        let Device = configData.device;

        //add the patient information to the device
        const patient = configData.patient;
        Device.patientDto = patient;

        // set the headers
        const header = {
            headers: {
            'Content-Type': 'application/json;odata=verbose;charset=utf-8'
            }
        };
        //send the request
        let res = await axios.post(agent_host, JSON.stringify(Device), header);
        console.log(res.data);
        let agentMessage = res.data;

        return agentMessage;
    },

    updateDevice: async function(configData){
        const uuid = configData.device.uuid;
        const agent_host = configData.agent.api_url+":"+configData.agent.api_port+'/morpheusagent/devices/dto/'+uuid;
        let Device = configData.device;

        // set the headers
        const header = {
            headers: {
            'Content-Type': 'application/json;odata=verbose;charset=utf-8'
            }
        };
        //send the request
        let res = await axios.get(agent_host, header);
        console.log(res.data);
        let agentMessage = res.data;

        return agentMessage;
    },

    syncSensors: async function(configData){
        const agent_host = configData.agent.api_url+":"+configData.agent.api_port+'/morpheusagent/devices/sensors/list';
        let device = configData.device;
        let sensorList = configData.sensors;

        // set the headers
        const header = {
            headers: {
            'Content-Type': 'application/json;odata=verbose;charset=utf-8',
            'device':device.token
            }
        };
        //send the request
        let res = await axios.post(agent_host, JSON.stringify(sensorList), header);
        console.log(res.data);
        let agentMessage = res.data;

        return agentMessage;
    },

    syncDatarecords: async function(recording_uuid, data, configData){
        const agent_host = configData.agent.api_url+":"+configData.agent.api_port+'/morpheusagent/recordings/sync/datarecordfile/'+recording_uuid;
        let device = configData.device;
        // set the headers
        const header = {
            headers: {
            'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
            'device':device.token
            }
        };
        const form = new FormData();
        const filename = recording_uuid+".json.gz";
        form.append('file',data,filename)
        //send the request
        let res = await axios.post(agent_host, form, header);
        console.log(res.data);
        let agentMessage = res.data;

        return agentMessage;

    },/** */

    deleteSensor: async function(sensorUUID,configData){
        const agent_host = configData.agent.api_url+":"+configData.agent.api_port+'/morpheusagent/devices/sensors/delete/'+sensorUUID;
        let device = configData.device;

        // set the headers
        const header = {
            headers: {
            'Content-Type': 'application/json;odata=verbose;charset=utf-8',
            'device':device.token
            }
        };
        //send the request
        let res = await axios.delete(agent_host, header);
        console.log(res.data);
        let agentMessage = res.data;

        return agentMessage;
    },

    addSensor: async function(sensorObj,configData){
        const agent_host = configData.agent.api_url+":"+configData.agent.api_port+'/morpheusagent/devices/sensors/add';
        let device = configData.device;

        // set the headers
        const header = {
            headers: {
            'Content-Type': 'application/json;odata=verbose;charset=utf-8',
            'device':device.token
            }
        };
        //send the request
        let res = await axios.post(agent_host, JSON.stringify(sensorObj), header);
        console.log(res.data);
        let agentMessage = res.data;

        return agentMessage;
    },

    startMqttRecording: async function(configData, sensorID, recordingID){
        const mqtt_port = "8081";//TODO: agent should reverse proxy this port
        const agent_host = configData.agent.api_url+":"+mqtt_port+'/mqtt-stream/start/'+sensorID;
        //const agent_host = "http://141.37.192.11:"+mqtt_port+'/mqtt-stream/start/'+sensorID;
        let device = configData.device;

        // set the headers
        const header = {
            headers: {
            'Content-Type': 'application/json;odata=verbose;charset=utf-8',
            'device':device.token,
            
            }
        };      
        //send the request
        let res = await axios.post(agent_host,{"recordingID":recordingID},header);
        console.log(res.data);
        let agentMessage = res.data;

        return agentMessage;
    },

    stopMqttRecording: async function(configData, sensorID, recordingID){
        const mqtt_port = "8081";//TODO: agent should reverse proxy this port
        const agent_host = configData.agent.api_url+":"+mqtt_port+'/mqtt-stream/stop/'+sensorID+'/'+recordingID;
        //const agent_host = "http://141.37.192.11:"+mqtt_port+'/mqtt-stream/stop/'+sensorID+'/'+recordingID;
        let device = configData.device;

        // set the headers
        const header = {
            headers: {
            'Content-Type': 'application/json;odata=verbose;charset=utf-8',
            'device':device.token
            }
        };
        //send the request
        let res = await axios.delete(agent_host, header);
        console.log(res.data);
        let agentMessage = res.data;

        return agentMessage;
    }


    

}

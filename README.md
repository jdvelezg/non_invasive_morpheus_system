# Non-Invasive Morpheus System
The Morpheus device or Morpheus Box (MoBo) aims to monitor vital signs during sleep and over extended periods in the patient's home environment using non-invasive technologies. The hardware components of the MoBo device are focused on commercially available and low-cost materials.

## Contents

<details>
<summary><strong>Details</strong></summary>

-   [Nodeclient Orchestrator for Raspberry Pi](#Nodeclient-Orchestrator-for-Raspberry-Pi)
-   [Adding a new recording script](#Adding_a_new_recording_script)
-   [Running the nodeclient component in Raspberry Pi](#Running_the_nodeclient_component_in_Raspberry_Pi)
-   [Run the drivers as a Linux kernel module](#Run_the_drivers_as_a_Linux_kernel_module)
-   [Device Configuration structure (mbox_config.json file)](#Device_Configuration_structure_(mbox_config.json_file))
-   [Running the server with Docker Compose](#Running_the_server_with_Docker_Compose)
-   [Troubleshooting server connection](#Troubleshooting_server_connection)
</details>

# Nodeclient Orchestrator for Raspberry Pi

The Morpheus Box (Nodeclient) embedded software component works as an orchestrator that sequentially executes a recording script per sensor based on the configuration provided in the file ```mbox_config.json```. Such configuration can be changed manually, editing the file or via a graphic interface provided by the Morpheus Administration Panel, when connection with the back end components are available.

### Adding a new recording script 
Nodeclient component supports adding additional recording Python scripts, including the next compatibility conditions:

-   The following parameters are passed to all scripts when executed by the orchestrator:
        -   ```--recording_uuid <<value>>```
        -   ```--sensor <<value>>```
        -   ```--path <nodeclient_root>>/recorders/data```
-   all recording scripts must be placed inside the directory: <<nodeclient_root>>/recorders/ 
-   Recording scripts must register each recording start and stop as a new line in the file: <<nodeclient_root>>/recorders/data/recording_record.json using the Json structure:

```json
        {
          "uuid":"”,
          "startDate":””,
          "stopdate":"",
          "patient":{
            "uuid":"",
            "name":"EMPTY"},
          "registeredDevice":{
            "uuid":""},
        }
```
-   Recordings scripts must store data in a txt or JSON file with having the value of “--recording_uuid” parameter as name and placed in the path provided through the “--path” parameter (current default is: <nodeclient_root>>/recorders/data)  and using the Json structure:

```json
        {
            "uuid": "", 
            "sensor_uuid": "", 
            "recording_uuid": "", 
            "time": "", 
            "measurement": [], 
            "timeMap": [], 
            "signal": “”, 
            "samples": “”, 
            "duration": “”, 
            "label": ""
        }
```

## Running the nodeclient component in Raspberry Pi
### Install dependencies

Access the Raspberry via SSH or directly connecting a keyboard to the device:

1. using a command line interface update the system            
    -   ```sudo apt update```            
2.   Install the runtime environment for nodeclient orchestrator:
    -   install npm and node packages 
        -   ```sudo apt install npm```
        -   ```sudo apt install nodejs```
3.   Install node dependencies for the component 
        -   ```npm install axios --save```
        -   ```npm install uuid --save```
        -   ```npm install --save ws```
        -   ```npm install @stomp/stompjs websocket --save```
        -   ```npm install systeminformation --save```
4.   Install dependencies for the python scripts
        -   ```sudo apt install  python3-paho-mqtt```
5.   Install dependencies for the linux kernel drivers
        -   ```sudo apt install libi2c-dev i2c-tools```
        -   ```sudo apt-get install linux-headers```
        -   ```sudo apt install linux-headers-$(uname -r)```

### Run the nodeclient
1. Clone the source code from the repository using git.
2. Enter the cloned directory
    -   ```cd nodeclient```
3. Install runtime environment modules
    -   ```npm install```
4. The following command will run the nodeclient attached to the terminal connection, showing all the Log events on the screen:
    -   ```node app.js```
5. To run the client in the background and keep logs in a file, use the following command:
    -   ```sudo nohup node app.js > app.log 2>&1```

## Run the drivers as a Linux kernel module
1. Clone the source code from the repository using git.
2. Access the directory: 
	-   ```cd kernel_modules```
3. Compile the module for the current Linux environment: 
	-   ```make ```
4. Load the kernel module with insmod command: 
	-   ```sudo insmod mbox_single_driver_v3```
5. To check the module latest Log messages, run: 
	-   ```sudo dmesg | tail -10```
6. To unload the modules from the kernel, use the rmmod command: 
	-   ```sudo rmmod mbox_single_driver_v3```


## Device Configuration structure (mbox_config.json file)

The main configuration file is a JSON structure with the values the device needs to record the signals and connect the back end. The main components of the structure are: 
- agent: include the HTTP URL of the backend server and the port to connect.
-   Mqserver: include the IP and Port to connect a MQTT server
-   device: provide the dimensions of the bed and a name to recognize it
-   patient: ID and surname of the patient using the device
-   sensors: List of sensors connected to the device and the parameters to run the scripts

The following snippet shows the basic structure of the configuration file:

```json
{
	"agent": {
		"api_url": "http://<<SERVER_URL_OR_IP>>",
		"api_port": "<<SERVER_PORT>>"
	},
	"mqserver": {
		"url": "<<MQTT_SERVER_IP>>",
		"port": "<<MQTT_PORT>>"
	},
	"device": {
		"token": "",
		"name": "",
		"type": "bed",
		"active": true,
		"uuid": "",
		"patient_uuid": "",
		"yBedDimension": 186,
		"xBedDimension": 110,
		"bedDimensionUnits": "cm",
	},
	"patient": {
		"uuid": "",
		"name": ""
	},
	"sensors": [
		{
			"recorder": {
				"command": null,
				"filepath": null,
				"streamer": false,
				"params": null,
				"description": null
			},
			"description": null,
			"name": "",
			"active": true,
			"uuid": "",
			"transducerType": "",
			"physicalMin": -5,
			"physicalMax": 0,
			"digitalMin": 0,
			"digitalMax": 2047,
			"xLocation": 30,
			"yLocation": 50,
			"xDimension": 2,
			"yDimension": 2,
			"accessProtocol": "I2C",
			"portAddress": "",
			"physicalDimension": "V"
		}
	]
}
```
## Running the server with Docker-Compose

1. Move the folder server/ files  to the Docker-enabled server. 
2. Setup **morpheusagent** component configuration
    -   Create file ```server/morpheusagent/application.properties``` and add the following line:
    ```console
        spring.profiles.active=prod
    ```
    -   Create File ```server/morpheusagent/application-prod.properties``` and include the database configuration
    ```console
        spring.datasource.driver-class-name =<database_Driver>
        spring.jpa.properties.hibernate.dialect = <database_Dialect>
        spring.datasource.url=<database_url>
        spring.datasource.username=<database_username>
        spring.datasource.password=<database_password>
    ```
3. Setup **mqttstreamdigest** component configuration
    -   Create file ```server/mqttstreamdigest/application.properties``` and add the following line:
    ```console
        spring.profiles.active=prod
    ```
    -   Create File ```server/mqttstreamdigest/application-prod.properties``` and include the database configuration
    ```console
        spring.datasource.driver-class-name =<database_Driver>
        spring.jpa.properties.hibernate.dialect = <database_Dialect>
        spring.datasource.url=<database_url>
        spring.datasource.username=<database_username>
        spring.datasource.password=<database_password>
    ```
4. Access the ```server/``` directory using a console and run command ```docker-compose```. The following containers will be deployed:
    -   FIWARE iot-agent
    -   FIWARE Orion Broker
    -   mongo-db
    -   grafana
    -   mosquitto
    -   morpheus-agent
    -   mqtt-diggester

## Troubleshooting server connection

Nodeclient will check for server connection immediately after starting. If no server connection is available, the program will try to start recording signals from the sensors using the configuration available in the mbox_config.json file. The startup will fail if the configuration information is incomplete and server connection is not responsive.

Nodeclient uses two channels to connect with the back end components. Via HTTP (Port 80) or when supported HTTPS (port 443), it will access the back end to provide and collect authentication credentials. Via WebSocket (ws protocol on port 8080) it will interact with the graphic interface of the administration panel.

### Checkpoints
1. Verify the server URL/IP in the mbox_config.json file.
2. Verify that the server stated in the mbox_config.json file is the same as local.module.js at line 22:
    -   mbox_websocket_endpoint: ```ws://<<SERVER_IP>>:<<SERVER_PORT>>/morpheusagent-websocket```
3. Restart the nodeclient

## Acknowledgements
Carl-Zeiss-Foundation funded the research on which this Software was developed: “Non-invasive system for measuring parameters relevant to sleep quality” (project number: P2019-03-003).

import sys
import time
from lib.ptz_kernel import ads1115_ptz
from lib.syslogger import SystemLogger
from lib.datarecord import DataRecord
from logging import Logger
from paho.mqtt import client as mqtt_client

def get_value_from_arg(arg):
    """Extracts the value from a command-line argument."""
    try:
        # Assuming the format is key=value, split and return the value
        values = arg.split("=",2)
        return [v.replace(" ","") for v in values]
    except IndexError:
        # Log error and exit if the format is incorrect
        LOGGER.error(f"Error processing argument: {arg}")


def on_connect(client, userdata, flags, reason_code, properties):
    #if flags.session_present:
        # ...
    if reason_code == 0:
        # success connect
        print("Connected to MQTT Broker!")
    if reason_code > 0:
        # error processing
        print("Failed to connect, return code %d\n", rc)

   

def on_disconnect(client, userdata, flags, reason_code, properties):
    logging.info("Disconnected with result code: %s", reason_code)
    reconnect_count, reconnect_delay = 0, FIRST_RECONNECT_DELAY
    while reconnect_count < MAX_RECONNECT_COUNT:
        logging.info("Reconnecting in %d seconds...", reconnect_delay)
        time.sleep(reconnect_delay)

        try:
            client.reconnect()
            logging.info("Reconnected successfully!")
            return
        except Exception as err:
            logging.error("%s. Reconnect failed. Retrying...", err)

        reconnect_delay *= RECONNECT_RATE
        reconnect_delay = min(reconnect_delay, MAX_RECONNECT_DELAY)
        reconnect_count += 1
    logging.info("Reconnect failed after %s attempts. Exiting...", reconnect_count)


def dataline_to_datarecord(dataline, recordingId, sensorID):
    """Convert the dataline extracted from kernel file into a datarecord."""
    
    datarecord = DataRecord()

    kernel_datalist = dataline.split(",")
    data_items = len(kernel_datalist)
    end_epoch = int(kernel_datalist.pop(data_items-1))
    init_epoch = int(kernel_datalist.pop(0))
    data_items = len(kernel_datalist)

    end_time = datarecord.setTimeFromEpoch(end_epoch)
    init_time = datarecord.setTimeFromEpoch(init_epoch)
    
    datarecord.sensor_uuid = sensorID
    datarecord.recording_uuid = recordingId
    #datarecord.setTimeFromEpoch(init_epoch)
    datarecord.samples = data_items
    datarecord.measurement = kernel_datalist
    datarecord.setDurationFromtime(init_time,end_time)

    return datarecord


if __name__ == "__main__":
    LOGGER:Logger = SystemLogger(True).getLogger()
    #ARGS from execution
    if len(sys.argv) < 3:
        LOGGER.error("Not enough command-line arguments provided. ("+str(len(sys.argv))+")")
        sys.exit(1)

    # Dictionary to hold argument values
    arg_values = {}

    # The script name is the first argument; others are parameters
    name_of_script = sys.argv[0]
    LOGGER.info(f"Script Name: {name_of_script}")

    # Process and save each parameter value
    for i in range(1, len(sys.argv)):
        value = get_value_from_arg(str(sys.argv[i]))
        arg_values[value[0]] = value[1]
        LOGGER.info(f"value{i}: {value}")

    # required Args
    # Find broker value

    broker = next((key for key in arg_values if "--broker" in key), "test.mosquitto.org")
    LOGGER.info("broker: "+broker)

    port = next((key for key in arg_values if "--port" in key), "1883")
    LOGGER.info("port: "+port)

    topic = next((key for key in arg_values if "--recording_uuid" in key), "/python_mqtt")
    LOGGER.info("topic: "+topic)

    recording_uuid = next((key for key in arg_values if "--recording_uuid" in key), "")
    LOGGER.info("recording_uuid: "+recording_uuid)

    sensor_uuid = next((key for key in arg_values if "--sensor" in key), "")
    LOGGER.info("sensor_uuid: "+sensor_uuid)

    path = next((key for key in arg_values if "--path" in key), "")
    LOGGER.info("path: "+path)

    channel = next((key for key in arg_values if "--channel" in key), "")
    LOGGER.info("channel: "+channel)

    #filename is <recording_uuid>_<sensoruuid>
    filepath = arg_values[path] + "/" + arg_values[recording_uuid] + "_" + arg_values[sensor_uuid] + "_rawPTZ" + ".json"
    #reset
    temp_f = open(filepath, 'w')
    temp_f.close()

    #Starts MQTT client
    # Set Connecting Client ID
    client_id = 'python-mqtt_' + arg_values[sensor_uuid]
    client = mqtt_client.Client(mqtt_client.CallbackAPIVersion.VERSION2, client_id)
    # client.username_pw_set(username, password)
    client.on_connect = on_connect
    client.on_disconnect = on_disconnect
    client.connect(arg_values[broker], int(arg_values[port]))
    #Set Topic as topic/SensorID
    topic = "/" +arg_values[topic] +"/" +arg_values[sensor_uuid]+"/raw_ptz"
    LOGGER.info("sending to topic: "+topic)

    #Recorder
    recorder = ads1115_ptz(arg_values[channel], LOGGER)
    LOGGER.info("Accessing filepath:" + filepath)
    #Dump signal in file
    with open(filepath, 'a') as file:
        try:
            # mqtt client start
            client.loop_start()

            start_time = time.time()
            interval = 1
            i=0
            while True:
                time.sleep(abs((start_time + i*interval)-time.time()))
                val = recorder.read_register()
                data_record = dataline_to_datarecord(val,arg_values[recording_uuid],arg_values[sensor_uuid])
                file.write(data_record.getJsonStringData()+"\n")
                file.flush()
                val = str(data_record.time)+"|"+val[20:-20]
                LOGGER.info("val readed: "+str(time.time())+"\n"+val)
                result = client.publish(topic, val)
                LOGGER.info("result:"+ str(result))
                i+=1
        except KeyboardInterrupt:
            file.close()
            LOGGER.info("Interrupted")
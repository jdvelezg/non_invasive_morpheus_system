# #####################
# python 3.7 and above
# 
# HR32HZ - Breath 253
# #####################

import threading
import board
import busio
import adafruit_ads1x15.ads1115
from adafruit_ads1x15.analog_in import AnalogIn
import time
import datetime

from logging import Logger
from lib.datarecord import DataRecord
from lib.recording import Recording
from lib.datawindow import DataWindow
from recorders.lib.processor import RespirationRateProcessor



class FSRSensorRecorder(Recording):

    LOGGER:Logger
    recording_uuid:str
    sensor_uuid:str
    window_duration:float = 1.0


    i2c = busio.I2C(board.SCL, board.SDA)
    ads = adafruit_ads1x15.ads1115.ADS1115(i2c) 
    channel:any
    #chan_0 = AnalogIn(ads, adafruit_ads1x15.ads1115.P0) #A0=15
    #chan_3 = AnalogIn(ads, adafruit_ads1x15.ads1115.P3) #A3=14

    def __init__(self, recording_uuid, sensor_uuid, channel:str='P0', logger:Logger=None):
        """Constructor"""
        self.recording_uuid = recording_uuid
        self.sensor_uuid = sensor_uuid
        if(channel.capitalize() == 'P0'):
            self.channel = self.initForChannel0()
        elif(channel.capitalize() == 'P1'):
            self.channel = self.initForChannel1()
        elif(channel.capitalize() == 'P2'):
            self.channel = self.initForChannel2()
        elif(channel.capitalize() == 'P3'):
            self.channel = self.initForChannel3()

    
    def initForChannel0(self):
        return AnalogIn(self.ads, adafruit_ads1x15.ads1115.P0) #A0 left
    
    def initForChannel1(self):
        return AnalogIn(self.ads, adafruit_ads1x15.ads1115.P1) #A1 right
    
    def initForChannel2(self):
        return AnalogIn(self.ads, adafruit_ads1x15.ads1115.P2) #A2 center
    
    def initForChannel3(self):
        return AnalogIn(self.ads, adafruit_ads1x15.ads1115.P3) #A3=14

    def read_raw_fsr(self)-> str: 
        """Thread safe method that collects the readings from the sensors and store them in the recording"""   
        #read Sensor data
        current_milli = time.time()
        record = DataRecord(sensor_uuid=self.sensor_uuid, recording_uuid=self.recording_uuid, time=current_milli, signal=self.channel.value, samples=1.0, duration=1)
        dataline = record.getJsonStringData() 
        return dataline

    def read_fsr(self)-> str: 
        #Create a window for sensor
        data_window = DataWindow(recording_uuid=self.recording_uuid, sensor_uuid=self.sensor_uuid)
        #time mark control
        duration = datetime.timedelta(seconds=self.window_duration)
        current = datetime.datetime.now()
        time_mark = current + duration
        #Loops for data window
        try:
            while (current <= time_mark):
                #read Sensor data
                current_milli = time.time()
                record = DataRecord(sensor_uuid=self.sensor_uuid, recording_uuid=self.recording_uuid, time=current_milli, signal=self.channel.value, samples=1.0, duration=1)
                data_window.addRecord(record)   
                current = datetime.datetime.now()
            #Export datarecord
            data_record = data_window.exportToDataRecord()
        except KeyboardInterrupt:
            #Export datarecord
            data_record = data_window.exportToDataRecord()
        
        dataline = data_record.getJsonStringData()        
        return dataline


class FSRSensorPreprocessor(FSRSensorRecorder):

    window_duration:int

    def __init__(self, recording_uuid, sensor_uuid, duration:int, channel: str = 'P0', logger: Logger = None):
        self.window_duration =duration
        super().__init__(recording_uuid, sensor_uuid, channel, logger)

    def read_fsr(self)-> str: 
        #Create a window for sensor
        data_window = DataWindow(recording_uuid=self.recording_uuid, sensor_uuid=self.sensor_uuid)
        #time mark control
        duration = datetime.timedelta(seconds=self.window_duration)
        current = datetime.datetime.now()
        time_mark = current + duration
        #Loops for data window
        try:
            while (current <= time_mark):
                #read Sensor data
                current_milli = time.time()
                record = DataRecord(sensor_uuid=self.sensor_uuid, recording_uuid=self.recording_uuid, time=current_milli, signal=self.channel.value, samples=1.0, duration=1)
                data_window.addRecord(record)   
                current = datetime.datetime.now()
            #Process signal Sensor 1
            rr = RespirationRateProcessor(data_window,self.LOGGER).calculate_rr()
            #Export datarecord
            data_record = data_window.exportToDataRecord(signal=rr,label='RR')
        except KeyboardInterrupt:
            #Process signal Sensor 1
            rr = RespirationRateProcessor(data_window,self.LOGGER).calculate_rr()
            #Export datarecord
            data_record = data_window.exportToDataRecord(signal=rr,label='RR')
        
        dataline = data_record.getJsonStringData()        
        return dataline



# #####################
# python 3.7 and above
# #####################

from dataclasses import dataclass, field
import datetime
import json 
import uuid


@dataclass
class DataRecord():
    uuid: str = None
    sensor_uuid: str = None 
    recording_uuid:int = None
    time: datetime.datetime = None 
    measurement:list = field(default_factory=list)
    timeMap:list = field(default_factory=list)
    signal: float = 0.0 
    samples: float = 0.0
    duration: int = 0
    label:str = 'raw'

    def __post_init__(self):
         self.uuid = str(uuid.uuid4())

    def addMeasurement(self,signal:float, time: datetime.datetime) -> None:
        """Adds multiple signals in the measurement list, upatting the other parameters"""
        self.measurement.append(signal)
        self.duration += float(time) - float(self.time)
        self.samples +=1
    
    def getJsonStringData(self) ->str:
        string = str(json.dumps(self,default=lambda o: o.__dict__) ) 
        return string
    
    def getJsonMeasurements(self) -> str:
        """Returns the JSON interpretation of the measurements list"""
        json_list:str = json.dumps(self.measurement,default=lambda o: o.__dict__)
        return json_list
    
    def getJsonTimeMap(self) -> str:
        """Returns the JSON interpretation of the measurements list"""
        json_list:str = json.dumps(self.timeMap,default=lambda o: o.__dict__)
        return json_list

    def setTimeFromEpoch(self,epochdatetime):
        """Set the field time from a epoch.
        Return the assigned value in format '%Y-%m-%d %H:%M:%S'
        """
        time_seconds = epochdatetime // 1000000000
        self.time = datetime.datetime.fromtimestamp(int(time_seconds)).strftime('%Y-%m-%d %H:%M:%S')
        return self.time
    
    def setDurationFromtime(self, initTime, endTime):
        """Calculates the duration from the init time and end time"""
        FMT = '%Y-%m-%d %H:%M:%S'
        delta = datetime.datetime.strptime(endTime,FMT) - datetime.datetime.strptime(initTime,FMT)
        seconds = delta.total_seconds()
        self.duration = seconds if (seconds>0) else 1
        return self.duration


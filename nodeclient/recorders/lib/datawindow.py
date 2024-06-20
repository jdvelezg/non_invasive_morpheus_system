# #####################
# python 3.7 and above
# #####################

from dataclasses import dataclass, field
from lib.datarecord import DataRecord
from datetime import timedelta, datetime


@dataclass
class DataWindow:
    """list of datarecords comprising a segment of data aka: window"""
    
    recording_uuid:str
    sensor_uuid:str
    dataElements:list = field(default_factory=list)
    duration:timedelta = timedelta(seconds=1)
    iniTime:datetime = None
    endTime:datetime = None
    unord_values: list = field(default_factory=list)

    def addRecord(self,record:DataRecord) -> None:
        """
        Add a record to the datalements and computes the duration.
        if record must be linked to same self sensor
        """
        #if not same sensor exits
        if (record.sensor_uuid != self.sensor_uuid):
            return
        #set initial time not set
        if (self.iniTime is None):
            self.iniTime = datetime.fromtimestamp(record.time)
        #set end time
        self.__setEndTime__(record.time)
        #add element
        self.dataElements.append(record)
        #unordered list to compute general calculations
        self.unord_values.append(record.signal)

    def __setEndTime__(self,time) -> None:
        """Set the end time and calculates de final duration"""
        theTime = datetime.fromtimestamp(time)
        if(self.endTime is None):
            self.endTime = theTime
        elif(theTime > self.endTime):
            self.endTime = theTime

        if(theTime < self.iniTime):
            self.iniTime = theTime

        self.duration = self.endTime - self.iniTime

    def getDataLength(self) -> int:
        """Return the number of data elements"""
        val =len(self.dataElements)
        return val

    def getValue(self,pos:int) -> float:
        """Returns the signal value of the record in the posision pos"""
        record:DataRecord = self.dataElements[pos]
        value:float = record.signal
        return value

    def getMax(self) -> float:
        """returns the max signal value"""
        max_value = max(self.unord_values)
        return float(max_value)

    def getMin(self) -> float:
        """returns the min signal value"""
        min_value = min(self.unord_values)
        return float(min_value)

    def getDataFrecuency(self) -> float:
        """Returns the frecuency in seconds of the data sample contained"""
        duration =self.duration.seconds
        if duration == 0:
            return 0
        frec:float = self.getDataLength() / self.duration.seconds
        return frec

    def getValueList(self) -> list:
        """returns a list with the signal values"""
        valueList = []
        for record in self.dataElements : valueList.append(record.signal)
        return valueList
    
    def getTimeMap(self) -> list:
        """returns a list with the time map for the values"""
        timeMap = []
        for record in self.dataElements : timeMap.append(record.time)
        return timeMap

    def gerNormalizedList(self) -> list:
        """Returns a normalized list of signal values"""
        max_val =self.getMax()
        min_val =self.getMin()
        self.unord_values = self.getValueList()
        normal_list = list( map( lambda v: (v-min_val)/(max_val-min_val), self.unord_values) )
        
        return normal_list

    def exportToDataRecord(self, signal=0, label:str='raw') -> DataRecord:
        """Returns a data record with the information of the window, usign signal and label provided"""
        data_elements = [signal] if signal!=0 else self.getValueList()
        time_map =[self.iniTime.timestamp()] if signal!=0 else self.getTimeMap()
        record = DataRecord(
                            sensor_uuid=self.sensor_uuid,
                            recording_uuid=self.recording_uuid,
                            time=self.iniTime.timestamp(),
                            samples=self.getDataLength(),
                            duration=self.duration.seconds,
                            measurement=data_elements,
                            timeMap=time_map,
                            signal=signal,
                            label=label)
        return record
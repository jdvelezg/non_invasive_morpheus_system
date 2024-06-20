# #####################
# python 3.7 and above
# #####################

from dataclasses import dataclass
from multiprocessing import Queue

from typing import Any
import datetime
import uuid

from model.dataobject import DataObject
from model.patient import Patient

@dataclass
class Recording(DataObject):
    id: int = None
    patient: Patient = None
    startDate: datetime.datetime = None
    dataqueue: Queue  = None
    datarecords: list  = None
    stopdate: datetime.datetime = None
    uuid: str = None

    def __setRandomUUID__(self) -> None:
        self.uuid = str(uuid.uuid4())

    def __orderedFields__(self) -> str:
        """returns the fields ordered and separated by comma"""
        return "id,patient_uuid,startDate,stopdate,uuid,patient_id"
    
    def __defaultSelect__(self) -> str:
        """returns the query to retrieve the data for this object"""
        return self.__fieldSelect__(self.__orderedFields__())
    
    def __fieldSelect__(self, fields:str) -> str:
        """Returns the SQL select statement with the fields provided. fields should be comma separated"""
        return "".join(["SELECT ",fields," FROM ",self.__tablename__()," WHERE startDate ='",str(self.startDate),"' AND patient_uuid='",str(self.patient.uuid),"';"])
    
    def __setId__(self,id:int) -> str:
        """set the id for this object"""
        self.id = id
    
    def __setFromFetch__(self,data:list):
        """maps the fields of the object from a default ordered fetch"""
        self.patient = Patient(name="")
        for field in data:
            self.id         = field[0]
            self.patient.uuid = field[1]
            self.startDate  = field[2]
            self.stopdate   = field[3]
            self.uuid       = field[4]
            self.patient.id = field[5]

    def __tablename__(self) -> str:
        """Returns the name of the table used to store data for this object"""
        return "recordings"


    def __tableQuery__(self) -> str:
        """Defines the query to create the table used to store this object data"""
        query ="".join(["CREATE TABLE ",self.__tablename__(),
            "(",
            "id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,",
            "uuid CHAR(40) NOT NULL,",
            "startDate CHAR(50) NOT NULL,",
            "patient_uuid CHAR(250) NOT NULL,",
            "patient_id INT NOT NULL,",
            "stopDate CHAR(250) NOT NULL,",
            "sync CHAR(1) DEFAULT '0'",# 1- sync with cloud. 0- local stored
            ");"]
        )
        return query
    
    def __insertQuery__(self) -> str:
        """Defines the query to insert the data into the table used to store this object"""
        query ="".join(["INSERT INTO ",self.__tablename__(),"(startDate,patient_uuid,stopDate,uuid,patient_id) ",
            "VALUES(",
            "'",str(self.startDate),"',",
            "'",str(self.patient.uuid),"',",  
            "'",str(self.stopdate),"',",
            "'",str(self.uuid),"',",
            "'",str(self.patient.id),"'",
            ");"]
        )
        return query

    def __saveQuery__(self) -> str:
        """Defines the query to update the data into the table used to store this object"""        
        query = "".join(["UPDATE ",self.__tablename__()," "
            "SET ",
            "startDate ='",str(self.startDate),"',",
            "stopDate ='",str(self.stopdate),"',",
            "patient_uuid ='",str(self.patient.uuid),"',",            
            "uuid ='",str(self.uuid),"',",            
            "patient_id ='",str(self.patient.id),"',",            
            "sync ='0'",            
            " WHERE id =",str(self.id),";"]
        )
        return query
    
    def __deleteQuery__(self) -> str:
        """Returns the query to delete this object data"""
        query ="".join(["DELETE FROM ",self.__tablename__()," WHERE id =",str(self.id),";"])
        return query

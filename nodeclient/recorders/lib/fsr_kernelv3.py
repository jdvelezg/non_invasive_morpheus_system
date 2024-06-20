import datetime
import os.path

from logging import Logger

class ads1115_fsr:
    
    LOGGER:Logger
    fsr_kernel_folder_exist:bool = os.path.exists("/sys/devices/platform/morpheusbox_fsr_v3")
    path:str ="/sys/devices/platform/morpheusbox_fsr_v3/fsr_data"
    path_time:str ="/sys/devices/platform/morpheusbox_fsr_v3/fsr_time"

    def __init__(self, channel, logger:Logger=None):
        self.fsr_file_exist = os.path.exists("/sys/devices/platform/morpheusbox_fsr_v3/fsr"+str(channel)+"_data")
        self.fsr_time_exist = os.path.exists("/sys/devices/platform/morpheusbox_fsr_v3/fsr"+str(channel)+"_time")
        self.LOGGER = logger
        if self.fsr_kernel_folder_exist and self.fsr_file_exist and self.fsr_time_exist:
            self.LOGGER.info("Kernel file present assigning channel...")
            self.path = "/sys/devices/platform/morpheusbox_fsr_v3/fsr"+str(channel)+"_data"
            self.path_time = "/sys/devices/platform/morpheusbox_fsr_v3/fsr"+str(channel)+"_time"
        else:
            self.LOGGER.error(f"The kernel file does not exist: {self.fsr_file_exist} and {self.fsr_kernel_folder_exist} and {self.fsr_time_exist}")


    def read_register(self):
        with open(self.path, 'r') as datafile , \
         open(self.path_time, 'r') as timefile:
            val = datafile.readline()
            time = timefile.readline()
        return val, time
    
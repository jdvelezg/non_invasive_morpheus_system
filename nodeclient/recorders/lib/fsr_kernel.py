import time
import datetime
import os.path

from logging import Logger

class ads1115_fsr:
    
    LOGGER:Logger
    fsr_kernel_folder_exist:bool = os.path.exists("/sys/devices/platform/morpheusbox_fsr_v1")
    path:str ="/sys/devices/platform/morpheusbox_fsr_v1/fsr_data"

    def __init__(self, channel, logger:Logger=None):
        self.fsr_file_exist = os.path.exists("/sys/devices/platform/morpheusbox_fsr_v1/fsr"+str(channel)+"_data")
        self.LOGGER = logger
        if self.fsr_kernel_folder_exist and self.fsr_file_exist:
            self.LOGGER.info("Kernel file present assigning channel...")
            self.path = "/sys/devices/platform/morpheusbox_fsr_v1/fsr"+str(channel)+"_data"
        else:
            self.LOGGER.error(f"The kernel file does not exist: {self.fsr_file_exist} and {self.fsr_kernel_folder_exist}")


    def read_register(self):
        with open(self.path, 'r') as file:
            val = file.readline()
        return val
    
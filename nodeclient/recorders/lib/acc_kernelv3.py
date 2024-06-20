import time
import datetime
import os.path

from logging import Logger

class adxl355z:

    LOGGER:Logger
    acc_kernel_file_exist = os.path.exists("/sys/devices/platform/morpheusbox_acc_v3/")


    def __init__(self, channel, logger:Logger=None):
        self.LOGGER = logger

        self.acc_x_file_exist = os.path.exists("/sys/devices/platform/morpheusbox_acc_v3/acc"+str(channel)+"_xdata")
        self.acc_y_file_exist = os.path.exists("/sys/devices/platform/morpheusbox_acc_v3/acc"+str(channel)+"_ydata")
        self.acc_z_file_exist = os.path.exists("/sys/devices/platform/morpheusbox_acc_v3/acc"+str(channel)+"_zdata")
        self.acc_time_file_exist = os.path.exists("/sys/devices/platform/morpheusbox_acc_v3/acc1_time")

        if self.acc_x_file_exist:
            self.x_path = "/sys/devices/platform/morpheusbox_acc_v3/acc"+str(channel)+"_xdata"
            #self.acc_xfile = open("/sys/devices/platform/morpheusbox_acc_v1/acc"+str(channel)+"_xdata", "r")
        if self.acc_y_file_exist:
            self.y_path = "/sys/devices/platform/morpheusbox_acc_v3/acc"+str(channel)+"_ydata"
            #self.acc_yfile = open("/sys/devices/platform/morpheusbox_acc_v1/acc"+str(channel)+"_ydata", "r")
        if self.acc_z_file_exist:
            self.z_path = "/sys/devices/platform/morpheusbox_acc_v3/acc"+str(channel)+"_zdata"
            #self.acc_zfile = open("/sys/devices/platform/morpheusbox_acc_v1/acc"+str(channel)+"_zdata", "r")
        if self.acc_time_file_exist:
            self.time_file = "/sys/devices/platform/morpheusbox_acc_v3/acc1_time"


    def read_xaxis_register(self):
        with open(self.x_path, 'r') as file_x:
            x = file_x.readline()
        return x
    

    def read_xaxis_time_register(self):
        with open(self.x_path, 'r') as file_x, \
            open(self.time_file, 'r') as file_t:
            x = file_x.readline()
            t = file_t.readline()
        return x, t


    def read_yaxis_register(self):
        with open(self.y_path, 'r') as file_y:
            y = file_y.readline()
        return y
    
    def read_yaxis_time_register(self):
        with open(self.y_path, 'r') as file_y, \
            open(self.time_file, 'r') as file_t:
            y = file_y.readline()
            t = file_t.readline()
        return y, t
    

    def read_zaxis_register(self):
        with open(self.z_path, 'r') as file_z:
            z = file_z.readline()
        return z
    
    def read_zaxis_time_register(self):
        with open(self.z_path, 'r') as file_z, \
            open(self.time_file, 'r') as file_t:
            z = file_z.readline()
            t = file_t.readline()
        return z, t
    

    def read_axis_register(self):
        with open(self.x_path, 'r') as file_x, \
             open(self.y_path, 'r') as file_y, \
             open(self.z_path, 'r') as file_z:
            x = file_x.readline()
            y = file_y.readline()
            z = file_z.readline()
        return x, y, z
    

    def read_axis_time_register(self):
        with open(self.x_path, 'r') as file_x, \
             open(self.y_path, 'r') as file_y, \
             open(self.z_path, 'r') as file_z, \
            open(self.time_file, 'r') as file_t:
            x = file_x.readline()
            y = file_y.readline()
            z = file_z.readline()
            t = file_t.readline()
        return x, y, z, t
    
    def read_register(self, axis='all'):
        if(axis == 'x'):
            self.LOGGER.debug("read X: "+axis)
            return self.read_xaxis_register()

        elif(axis == 'y'):
            self.LOGGER.debug("read Y: "+axis)
            return self.read_yaxis_register()

        elif(axis == 'z'):
            self.LOGGER.debug("read Z: "+axis)
            return self.read_zaxis_register()
        else:
            self.LOGGER.debug("read tuple: "+axis)
            return self.read_axis_register()
    
    def read_time_register(self, axis='all'):
        if(axis == 'x'):
            self.LOGGER.debug("read X: "+axis)
            return self.read_xaxis_time_register()

        elif(axis == 'y'):
            self.LOGGER.debug("read Y: "+axis)
            return self.read_yaxis_time_register()

        elif(axis == 'z'):
            self.LOGGER.debug("read Z: "+axis)
            return self.read_zaxis_time_register()
        else:
            self.LOGGER.debug("read tuple: "+axis)
            return self.read_axis_time_register()
    
    



# /sys/devices/platform/morpheusbox_acc_v1/ [xdata  acc_ydata  acc_zdata  acc2_xdata  acc2_ydata  acc2_zdata]
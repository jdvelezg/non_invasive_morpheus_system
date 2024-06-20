import logging
import sys
import os.path

#Singleton
LOGGER:logging.Logger = logging.getLogger('morpheusbox')

class SystemLogger:

    loglevel:int = logging.INFO

    def __init__(self,addhandlers:bool=False) -> None:
        """Constructor: loglevel defines the level to register en ERROR.log. INFO by default"""
        self.loggingconfigpath = './config/logginglevel.properties'
        self.__setLoggingLevel__()
        LOGGER.setLevel(logging.DEBUG)
        if addhandlers:
            self.addHandlers()
        
        
    def addHandlers(self) -> None:
        """Add handlers to the Logger"""
        # Create handlers
        c_handler = logging.StreamHandler(sys.stdout)
        c_handler.setLevel(logging.INFO)
        c_format = logging.Formatter('%(name)s - %(levelname)s - %(message)s')
        c_handler.setFormatter(c_format)
        LOGGER.addHandler(c_handler)
        
        f_handler = logging.FileHandler('ERROR.log')
        f_handler.setLevel(logging.WARNING)
        f_format = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
        f_handler.setFormatter(f_format)
        LOGGER.addHandler(f_handler)

        g_handler = logging.FileHandler('global.log')
        g_handler.setLevel(self.loglevel)
        g_format = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
        g_handler.setFormatter(g_format)
        LOGGER.addHandler(g_handler)
        
        dev_handler = logging.FileHandler('debug.log')
        dev_handler.setLevel(logging.DEBUG)
        dev_format = logging.Formatter('%(asctime)s -  %(filename)s - %(levelname)s - %(message)s')
        dev_handler.setFormatter(dev_format)
        LOGGER.addHandler(dev_handler)


    def __setLoggingLevel__(self) -> None:
        """Reads logginglevel properties file and set logging level"""
        #Check if file exist
        if not os.path.exists(self.loggingconfigpath):
            print('No logging configuration File present: INFO level set by default')
            return
        
        # Open the file
        with open(self.loggingconfigpath) as l:
            content = l.read().splitlines()
        
        for line in content:
            #if comment or emptyline
            if (len(line) == 0 or line[0] == '#'):
                continue
            else:
                level = "".join(line.split()).upper()
                if (level.__contains__('DEBUG')): 
                    self.loglevel = logging.DEBUG
                    LOGGER.debug('logging set to DEBUG')
                elif (level.__contains__('INFO')):
                    self.loglevel = logging.INFO
                    LOGGER.debug('logging set to INFO')
                elif (level.__contains__('WARN')):
                    self.loglevel = logging.WARNING
                    LOGGER.debug('logging set to WARNING')
                elif (level.__contains__('ERROR')):
                    self.loglevel = logging.ERROR
                    LOGGER.debug('logging set to ERROR')
                elif (level.__contains__('CRITICAL')):
                    self.loglevel = logging.CRITICAL
                    LOGGER.debug('logging set to CRITICAL')
                else:
                    LOGGER.debug('default logging set to INFO')
                    self.loglevel = logging.INFO
                #Only set it once
                break 
        LOGGER.warning('logging level:'+str(level))  

    def getLogger(self) -> logging.Logger:
        """Returns the system logger."""       
        return LOGGER
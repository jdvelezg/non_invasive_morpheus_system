# #####################
# python 3.7 and above
# #####################

import numpy
import scipy

from lib.datawindow import DataWindow
from lib.datarecord import DataRecord
from lib.syslogger import SystemLogger
from logging import Logger


class RespirationRateProcessor:
    """Class with functionalities to preprocess raw data into Respiration Rate"""

    dataWindow:DataWindow
    LOGGER: Logger

    def __init__(self, dataWindow:DataWindow,logger:Logger=None) -> None:
        """Constructor"""
        self.dataWindow = dataWindow
        self.LOGGER = SystemLogger(True).getLogger() if logger is None else logger

    def band_pass_filter(self,signal,bttype="RR"):
        """
        Apply band pass filter to signal.
        Parameters
        ----------
        signal : array_like
        The array of data to be filtered.
        btype : {RR, HR}, optional
        The type of desired signal. Default is 'RR'-> Respiration-Rate.
        """
        #Signal frecuency
        fs = self.dataWindow.getDataFrecuency()
        #choose the parameters accordignly
        if(bttype.upper() == 'RR'):
            lowcut:float = 0.15
            highcut:float = 0.4
        elif(bttype.upper() == 'HR'):
            lowcut:float = 0 #TODO to be checked
            highcut:float = 0 #TODO to be checked
        #Compute base parameters
        nyq     = 0.5 * fs
        low     = lowcut / nyq
        high    = highcut / nyq
        order   = 2
        # Bandpass filter
        b, a    = scipy.signal.butter(order, [low, high], 'bandpass', analog=False)
        y       = scipy.signal.filtfilt(b, a, signal, axis=0)

        return y

    def calculate_rr(self) ->float:
        """estimates respiration rate"""
        signaldata = self.dataWindow.gerNormalizedList()
        fr = self.dataWindow.getDataFrecuency()
        self.LOGGER.debug("windowfrecuency: "+str(fr))
        distance = 2 * fr
        #band pass filter
        bpf_signal = numpy.array(self.band_pass_filter(signaldata, bttype='RR'))
        #get indexes of peaks
        peaks, _ = scipy.signal.find_peaks(bpf_signal, distance=distance)
        #estimates respiration rate from signal
        data = numpy.array(signaldata)
        denominator = numpy.mean(numpy.diff(data[peaks]))
        self.LOGGER.debug("denominator: "+str(denominator))
        if denominator != 0:
            br =  60 / denominator
        else:
            br = 0

        return br
        



#sudo apt-get install raspberrypi-kernel-headers
obj-m +=mbox_single_driver_v3.o

all:
		make -C /lib/modules/$(shell uname -r)/build M=$(PWD) modules

clean:
		make -C /lib/modules/$(shell uname -r)/build M=$(PWD) clean

#include <linux/module.h>
#include <linux/init.h>
#include <linux/fs.h>
#include <linux/version.h>
#include <linux/cdev.h>
#include <linux/uaccess.h>
#include <linux/slab.h>
#include <linux/i2c.h>
#include <linux/kernel.h>
#include <linux/time.h>
#include <linux/timekeeping.h>
#include <linux/kthread.h>
#include <linux/sched.h>
#include <linux/delay.h>
#include <linux/wait.h>
#include <linux/string.h>

#include <linux/platform_device.h>
#include <linux/device.h>
#include <linux/sysfs.h>


/**
* @brief Module configuration params
*/
#define MAX_SPS 30
#define BUFF_SIZE 2048
#define FSR_PLAT_NAME "morpheusbox_fsr_v3"
#define PTZ_PLAT_NAME "morpheusbox_ptz_v3"
#define ADXL_DEVICE_NAME "morpheusbox_acc_v3"
#define TCA_DEVICE_NAME "MBOX_TCA9548A_70"

static unsigned int sensors_set = 1;
module_param(sensors_set, uint, S_IRUGO);
MODULE_PARM_DESC(sensors_set, "number of sensors to enable in this LKM");

/**
 * @brief ADX1115 iic address definition
 */
#define ADS1115_ADDRESS1        (0x48 << 0)        /**< iic address 1 */
#define ADS1115_ADDRESS2        (0x42 << 0)        /**< iic address 2 */
#define ADS1115_ADDRESS3        (0x4A << 0)        /**< iic address 3 */
#define ADS1115_ADDRESS4        (0x4B << 0)        /**< iic address 4 */

/**
 * @brief ADXL355 (Accelerometer) i2c address definition 
 */
#define ADXL355_ADDRESS0        (0x1D << 0)        /**< MUX address 0 */
#define ADXL355_ADDRESS1        (0x53 << 0)        /**< MUX address 1 */

/**
 * @brief TCA9548A(mux) i2C configurable iic address definition
 */
#define TCA9548A_ADDRESS0    (0X70 << 0)//(0X1D << 0)
#define TCA9548A_ADDRESS1    (0X71 << 0)
#define TCA9548A_ADDRESS2    (0X72 << 0)
#define TCA9548A_ADDRESS3    (0X73 << 0)
#define TCA9548A_ADDRESS4    (0X74 << 0)
#define TCA9548A_ADDRESS5    (0X75 << 0)
#define TCA9548A_ADDRESS6    (0X76 << 0)
#define TCA9548A_ADDRESS7    (0X77 << 0)


/**
 * @brief ADX1115 register definition
 */
#define ADS1115_REG_CONVERT         0x00        /**< adc result register */
#define ADS1115_REG_CONFIG          0x01        /**< chip config register */
#define ADS1115_REG_LOWRESH         0x02        /**< interrupt low threshold register */
#define ADS1115_REG_HIGHRESH        0x03        /**< interrupt high threshold register */
/**
 * @brief Device configuration:
 * bit1:0: COMP_QUE[1:0]  - 11 : Disable comparator and set ALERT/RDY pin to high-impedance (default)
 * bit2: COMP_LAT[1]      - 0 : Nonlatching comparator . The ALERT/RDY pin does not latch when asserted (default).
 * bit3: COMP_POL[1]      - 0 : Active low (default)
 * bit4: COMP_MODE[1]     - 0 : Traditional comparator (default)
 * bit7:5: DR[2:0]        - 111 : 860 SPS
 * bit8: MODE[1]          - 1 : Single-shot mode or power-down state (default)
 * bit11:9: PGA[2:0]      - 001 : FSR = ±4.096 V
 * bit14:12: MUX[2:0]     - 100 : AINP = AIN0 and AINN = GND 
 * bit15: OS              - 1 : Start a single conversion (when in power-down state) 
 *  binary = 1000001111100011
 *  hex = 0x83E3
 */
#define DEVICE_ONESHOT_CONFIG 0x83E3
#define DEVICE_ONESHOT_CONFIG_NOCONVERSION 0x03E3

/**
 * @brief ADXL355 (Accelerometer) register definition
 */
#define ADXL355_STATUS              0x04        /**This register includes bits that describe the various conditions of the ADXL355. (Bit4-NVM_BUSY) (Bit3-Activity) (Bit2-FIFO_OVR) (Bit1-FIFO_FULL) (Bit0-DATA_RDY) */ 
#define ADXL355_DATA_ODR            0x28        /**Internal ODR */
#define ADXL355_FIFO_ENTRIES        0x05        /**This register indicates the number of valid data samples present in the FIFO buffer. This number ranges from 0 to 96 */

#define ADXL355_RANGE               0X02c       /** Bits[7] I 2 C speed. (1 = high speed mode;0 = fast mode.); Bits[6] INT_POL; Bits[5:2] Reserved; Bits[1] Range (01=±2g;10=4g;11=8g)*/
#define ADXL355_TEMP2               0x06        /**(Uncalibrated temperature data) contains the four most significant bits Of the 12-bit value*/
#define ADXL355_TEMP1               0x07        /**(Uncalibrated temperature data) contains the eight least significant bits of the 12-bit value*/
#define ADXL355_XDATA3              0x08        /**XDATA, Bits[19:12] These three registers contain the x-axis acceleration data. Data is left justified and formatted as twos complement*/
#define ADXL355_XDATA2              0x09        /**XDATA, Bits[11:4] These three registers contain the x-axis acceleration data. Data is left justified and formatted as twos complement*/
#define ADXL355_XDATA1              0x0A        /**XDATA, Bits[3:0] These three registers contain the x-axis acceleration data. Data is left justified and formatted as twos complement*/
#define ADXL355_YDATA3              0x0B        /**YDATA, Bits[19:12]*/
#define ADXL355_YDATA2              0x0C        /**YDATA, Bits[11:4] */
#define ADXL355_YDATA1              0x0D        /**YDATA, Bits[3:0] */
#define ADXL355_ZDATA3              0x0E        /**ZDATA, Bits[19:12]*/
#define ADXL355_ZDATA2              0x0F        /**ZDATA, Bits[11:4]*/
#define ADXL355_ZDATA1              0x10        /**ZDATA, Bits[3:0]*/
/**
* @brief FIFO data is formatted to 24 bits, 3 bytes, most significant byte first. A read to this
* address pops an effective three equal byte words of axis data from the FIFO. Two
* subsequent reads or a multibyte read completes the transaction of this data onto the
* interface. Continued reading or a sustained multibyte read of this field continues to
* pop the FIFO every third byte. Multibyte reads to this address do not increment the
* address pointer. If this address is read due to an autoincrement from the previous
* address, it does not pop the FIFO. Instead, it returns zeros and increments on to the
* next address.
*/
#define ADXL355_FIFO_DATA           0x11        /**FIFO_DATA */
#define ADXL355_FIFO_SAMPLES        0x29        /** specify the number of samples to store in the FIFO. Default 96 */

#define ADXL355_ACT_EN              0x24        /**Activity detection algorithm: 111 - XYZ are  component of the activity detection algorithm*/
#define ADXL355_I2CSPEED            0x2C        /** 1<<7 = high speed mode; 0<<7 = fast mode */
#define ADXL355_POWER_CTL           0x2D        /** 1= Standby; 0= measurement mode; In standby mode, the device is in a low power state, and the temperature and acceleration datapaths are not operating*/
#define ADXL355_SELF_TEST           0x2E        /***/
#define ADXL355_RESET               0x2F        /** Write Code 0x52 to resets the device, similar to a power-on reset (POR) */

#define ADXL_RESET_VALUE            0x52        /** the value to send to reset sensor config*/
#define ADXL_RANGE_VALUE            0x81        /** range value used: I2C_HS=high speed mode; INT_POL=INT1 and INT2 are active low; Range=2g*/


/**
* @brief i2c communication structures 
*/
static struct i2c_adapter * mbox_i2c_adapter = NULL;  //Adapter to I2C Bus
static struct i2c_client * fsr_a2d1115_i2c_client = NULL;  //Client device
static struct i2c_client * ptz_a2d1115_i2c_client = NULL;  //Client device
static struct i2c_client * tca_i2c_client = NULL;  //TCA Client device
static struct i2c_client * adxl_i2c_client = NULL;  //ACC Client device
#define I2C_BUS_AVAILABLE	1 //The I2C Bus available on the raspberry
/**
* https://www.kernel.org/doc./html/latest/i2c/writing-clients.html#device-creation
* Device Creation:
* If you know for a fact that an I2C device is connected to a given I2C bus, 
* you can instantiate that device by simply filling an i2c_board_info structure 
* with the device address and driver name, and calling i2c_new_client_device(). 
* This will create the device, then the driver core will take care of finding the 
* right driver and will call its probe() method. If a driver supports different device 
* types, you can specify the type you want using the type field.*/
static struct i2c_board_info FSR_ADS1115_board_info ={
    I2C_BOARD_INFO(FSR_PLAT_NAME, ADS1115_ADDRESS1)
};

static struct i2c_board_info PTZ_ADS1115_board_info ={
    I2C_BOARD_INFO(PTZ_PLAT_NAME, ADS1115_ADDRESS2)
};

static struct i2c_board_info TCA9548A_board_info ={
    I2C_BOARD_INFO(TCA_DEVICE_NAME, TCA9548A_ADDRESS0)
};

static struct i2c_board_info ADXL355_board_info ={
    I2C_BOARD_INFO(ADXL_DEVICE_NAME, ADXL355_ADDRESS0)
};


/**
* @brief FSR morpheus device structures 
*/
//device id
static struct i2c_device_id FSR_ADS1115_idtable[] = {
      { "DEVICE_NAME", FSR_PLAT_NAME },
      { }
};

//driver struct
static struct i2c_driver mbox_ADS1115_fsrdriver ={
    .driver ={
        .name = FSR_PLAT_NAME,
        .owner = THIS_MODULE
    },
    .id_table         = FSR_ADS1115_idtable,
    //.probe          = foo_probe,
    //.remove         = foo_remove,
    ///* if device autodetection is needed: */
    //.class          = I2C_CLASS_SOMETHING,
    //.detect         = foo_detect,
    //.address_list   = normal_i2c,
    //.shutdown       = foo_shutdown, /* optional */
};

/**
* @brief PTZ morpheus device structures 
*/
//device id
static struct i2c_device_id PTZ_ADS1115_idtable[] = {
      { "DEVICE_NAME", PTZ_PLAT_NAME },
      { }
};

//driver struct
static struct i2c_driver mbox_ADS1115_ptzdriver ={
    .driver ={
        .name = PTZ_PLAT_NAME,
        .owner = THIS_MODULE
    },
    .id_table         = PTZ_ADS1115_idtable,
    //.probe          = foo_probe,
    //.remove         = foo_remove,
    ///* if device autodetection is needed: */
    //.class          = I2C_CLASS_SOMETHING,
    //.detect         = foo_detect,
    //.address_list   = normal_i2c,
    //.shutdown       = foo_shutdown, /* optional */
};

//TCA device id
static struct i2c_device_id TCA9548A_idtable[] = {
      { "DEVICE_NAME", TCA_DEVICE_NAME},
      { }
};
//TCA driver struct
static struct i2c_driver mbox_TCA9548A_driver ={
    .driver ={
        .name = TCA_DEVICE_NAME,
        .owner = THIS_MODULE
    },
    .id_table         = TCA9548A_idtable,
    //.probe          = foo_probe,
    //.remove         = foo_remove,
    ///* if device autodetection is needed: */
    //.class          = I2C_CLASS_SOMETHING,
    //.detect         = foo_detect,
    //.address_list   = normal_i2c,
    //.shutdown       = foo_shutdown, /* optional */
};

//ADXL device id
static struct i2c_device_id ADXL355_idtable[] = {
      { "DEVICE_NAME", ADXL_DEVICE_NAME},
      { }
};
//ADXL driver struct
static struct i2c_driver mbox_ADXL355_driver ={
    .driver ={
        .name = ADXL_DEVICE_NAME,
        .owner = THIS_MODULE
    },
    .id_table         = ADXL355_idtable,
    //.probe          = foo_probe,
    //.remove         = foo_remove,
    ///* if device autodetection is needed: */
    //.class          = I2C_CLASS_SOMETHING,
    //.detect         = foo_detect,
    //.address_list   = normal_i2c,
    //.shutdown       = foo_shutdown, /* optional */
};


static struct platform_device *morpheusbox_fsr;
static struct platform_device *morpheusbox_ptz;
static struct platform_device *morpheusbox_acc;

//sys files FSR
#define SYSFS_FSR1 fsr1_data
#define SYSFS_TIME_FSR1 fsr1_time
#define SYSFS_FSR2 fsr2_data
#define SYSFS_TIME_FSR2 fsr2_time
#define SYSFS_FSR3 fsr3_data
#define SYSFS_TIME_FSR3 fsr3_time
#define SYSFS_FSR4 fsr4_data
#define SYSFS_TIME_FSR4 fsr4_time
//sys files PTZ
#define SYSFS_PTZ1 ptz1_data
#define SYSFS_TIME_PTZ1 ptz1_time
#define SYSFS_PTZ2 ptz2_data
#define SYSFS_TIME_PTZ2 ptz2_time
#define SYSFS_PTZ3 ptz3_data
#define SYSFS_TIME_PTZ3 ptz3_time
#define SYSFS_PTZ4 ptz4_data
#define SYSFS_TIME_PTZ4 ptz4_time
//sys files ACC
#define SYSFS_ACC1X acc1_xdata
#define SYSFS_ACC1Y acc1_ydata
#define SYSFS_ACC1Z acc1_zdata
#define SYSFS_TIME_ACC1 acc1_time
#define SYSFS_ACC2X acc2_xdata
#define SYSFS_ACC2Y acc2_ydata
#define SYSFS_ACC2Z acc2_zdata
#define SYSFS_TIME_ACC2 acc2_time
#define SYSFS_ACC3X acc3_xdata
#define SYSFS_ACC3Y acc3_ydata
#define SYSFS_ACC3Z acc3_zdata
#define SYSFS_TIME_ACC3 acc3_time
#define SYSFS_ACC4X acc4_xdata
#define SYSFS_ACC4Y acc4_ydata
#define SYSFS_ACC4Z acc4_zdata
#define SYSFS_TIME_ACC4 acc4_time



/**
* @brief Global buffer variables 
*/
s32 fsr_config_register, ptz_config_register, fsr_conversion_register, ptz_conversion_register, lo_thresh_register, hi_thresh_register;
uint8_t read_buff[2], write_buff[2];

static uint8_t tca_mux, mux_iterator;
static uint8_t adlx_status[8], adlx_fifo_count[8], adlx_fifo_samples[8], adlx_powerctl[8];

/**
* @brief thread access variables
*/
DECLARE_WAIT_QUEUE_HEAD(thread_wq);
static int resource_flag = 0;//0-free; >0-busy
static uint8_t adc_mux = 4;
static int adc_muxer[4] = {4,5,6,7};//ADC ports
static int A0_mux = 0;
static int A1_mux = 1;
static int A2_mux = 2;
static int A3_mux = 3;
static struct task_struct *kthread_A0;
static struct task_struct *kthread_A1;
static struct task_struct *kthread_A2;
static struct task_struct *kthread_A3;

static char A0_fsr_buffer[BUFF_SIZE];
static char A1_fsr_buffer[BUFF_SIZE];
static char A2_fsr_buffer[BUFF_SIZE];
static char A3_fsr_buffer[BUFF_SIZE];

static char A0_ptz_buffer[BUFF_SIZE];
static char A1_ptz_buffer[BUFF_SIZE];
static char A2_ptz_buffer[BUFF_SIZE];
static char A3_ptz_buffer[BUFF_SIZE];

static char A0_time_buffer[BUFF_SIZE];
static char A1_time_buffer[BUFF_SIZE];
static char A2_time_buffer[BUFF_SIZE];
static char A3_time_buffer[BUFF_SIZE];

static int A0_fsr_output_flag = 0;//0-free; >0-busy
static int A1_fsr_output_flag = 0;//0-free; >0-busy
static int A2_fsr_output_flag = 0;//0-free; >0-busy
static int A3_fsr_output_flag = 0;//0-free; >0-busy

static int A0_ptz_output_flag = 0;//0-free; >0-busy
static int A1_ptz_output_flag = 0;//0-free; >0-busy
static int A2_ptz_output_flag = 0;//0-free; >0-busy
static int A3_ptz_output_flag = 0;//0-free; >0-busy

static int A0t_output_flag = 0;//0-free; >0-busy
static int A1t_output_flag = 0;//0-free; >0-busy
static int A2t_output_flag = 0;//0-free; >0-busy
static int A3t_output_flag = 0;//0-free; >0-busy

//Data buffers A0
static char A0_Xbuffer[BUFF_SIZE];
static char A0_Ybuffer[BUFF_SIZE];
static char A0_Zbuffer[BUFF_SIZE];
//Data buffers A1
static char A1_Xbuffer[BUFF_SIZE];
static char A1_Ybuffer[BUFF_SIZE];
static char A1_Zbuffer[BUFF_SIZE];
//Data buffers A2
static char A2_Xbuffer[BUFF_SIZE];
static char A2_Ybuffer[BUFF_SIZE];
static char A2_Zbuffer[BUFF_SIZE];
//Data buffers A3
static char A3_Xbuffer[BUFF_SIZE];
static char A3_Ybuffer[BUFF_SIZE];
static char A3_Zbuffer[BUFF_SIZE];
//Data access flags
static int A0X_output_flag = 0;//0-free; >0-busy
static int A0Y_output_flag = 0;//0-free; >0-busy
static int A0Z_output_flag = 0;//0-free; >0-busy
static int A1X_output_flag = 0;//0-free; >0-busy
static int A1Y_output_flag = 0;//0-free; >0-busy
static int A1Z_output_flag = 0;//0-free; >0-busy
static int A2X_output_flag = 0;//0-free; >0-busy
static int A2Y_output_flag = 0;//0-free; >0-busy
static int A2Z_output_flag = 0;//0-free; >0-busy
static int A3X_output_flag = 0;//0-free; >0-busy
static int A3Y_output_flag = 0;//0-free; >0-busy
static int A3Z_output_flag = 0;//0-free; >0-busy


 /**
 * @brief increments the MUX port to the next possible port
 */
 static void adc_next_port(void){
    if(adc_mux < ((adc_muxer[A0_mux]-1)+sensors_set))
        adc_mux++;
    else
        adc_mux = 4;
 }
  /**
 * @brief reset the MUX to zero
 */
 static void tcaselect_reset(void){
    i2c_smbus_write_byte(tca_i2c_client, 0x00);
 }

 /**
 * @brief select the active channel to transmit
 * @return Zero on success, -EIO if channel not responsive
 */
 static int tcaselect_channel(uint8_t channel){
    
    if(channel < 7){
        tcaselect_reset();
        i2c_smbus_write_byte(tca_i2c_client, (1<<channel));
                
        tca_mux = channel;
    }else
        return -EIO;

    return 0;  
 }

 /**
 * @brief increments the MUX port to the next possible port
 */
 static void tca_next_port(void){
    if(tca_mux < (sensors_set-1))
        tca_mux++;
    else
        tca_mux = 0;
 }

 /**
 * @brief Enables the measurment mode
 */
 static void enable_adxl_measurement_mode(uint8_t channel){
    //select MUX channel
    tcaselect_channel(channel);
    //Enable measure mode
    i2c_smbus_write_byte_data(adxl_i2c_client, ADXL355_POWER_CTL, (0<<0));

 }

/**
 * @brief Check the status of the current selected ADXL
 * @return Zero if succeed. -EIO on failure
 */
 static int check_current_adxl(struct i2c_client *client){
    int result;
    //check reading the status
    result = i2c_smbus_read_byte_data(client, ADXL355_STATUS);
    if(result < 0)
        return -EIO;
    
    //update global status variable
    adlx_status[tca_mux] = result;

    return 0;
 }

 /**
 * @brief Check FIFO of current selected ADXL
 * @return 1 if FIFO is full. Zero otherwise
 */
 static int fifostatus_current_adxl(void){
    int result;
    //check reading the status
    result = i2c_smbus_read_byte_data(adxl_i2c_client, ADXL355_STATUS);
    if(result < 0)
        return -EIO;
    if(result & (2 == 2))//FIFO_WATERMARK
        return 1;
    else
        return 0;
 }

/**
 * @brief https://ez.analog.com/mems/f/q-a/539755/understanding-about-adxl343-fifo-data-format-and-i2c-read
 */
 static int twos_complement(uint value, int bits){
    int val = 0;
    val = (int) value;
    if (val & (1 << (bits-1))){
        val -= 1 << bits;
    }
    return val;
}

/**
 * @brief 
 */
 static int data_to_number(uint16_t data){
    int value = (data>>8)|((data & 0xFF)<<8);
    return value;
 }

/**
 * @brief Set ADXL device to standby mode
 */
 static void set_adxl_standby(struct i2c_client *client,  uint8_t channel){
    //select MUX channel
    tcaselect_channel(channel);
    //writes 1 to standby mode
    i2c_smbus_write_byte_data(client, ADXL355_POWER_CTL, (1<<0));

 }

 /**
 * @brief Threaded function to read raw data
 * @return !=0 when error occured
 */
 int read_raw_data(void *__args){ 
    //the mux port to read
    const int mux = *(int *) __args;
    const int fsr_mux = adc_muxer[mux]; 
    //sample-rate and data controllers
    int sps_counter=0, trigger=0, buff_pointer=0;
    int fsr_conf_register_value, ptz_conf_register_value;
    long out_segment;
    //ADXL xmarker and empty indicator
    int x_marker, empty_indicator;
    uint8_t x1,x2,x3,y1,y2,y3,z1,z2,z3;
    uint x,y,z;
    //Sample rate
    size_t buff_lenght = (size_t)MAX_SPS;
    //time controllers
    ktime_t initial_ns, final_ns, now_ts = ktime_get_real_seconds();
    //data buffers
    char *output_Xbuffer, *output_Ybuffer, *output_Zbuffer, *fsr_output_buffer, *ptz_output_buffer, *output_time_buffer;
    int *outputX_flag = 0, *outputY_flag = 0, *outputZ_flag = 0, *fsr_output_flag = 0, *ptz_output_flag = 0;
    uint fsr_buffer[MAX_SPS];
    uint ptz_buffer[MAX_SPS];
    long acc_buffer[3][MAX_SPS];
    uint64_t timebuff[MAX_SPS];
    uint16_t fsr_conversion_value, ptz_conversion_value, config_value = DEVICE_ONESHOT_CONFIG|((mux<<12)|(1<<15));


    //init timer
    ktime_t current_ts = ktime_get_real_seconds();

    //binds to the port assigned
    if(mux == 0){
        //TIME
        output_time_buffer = A0_time_buffer;
        //FSR
        fsr_output_buffer = A0_fsr_buffer;
        fsr_output_flag = &A0_fsr_output_flag;
        //PTZ
        ptz_output_buffer = A0_ptz_buffer;
        ptz_output_flag = &A0_ptz_output_flag;
        //ACC
        output_Xbuffer = A0_Xbuffer;
        output_Ybuffer = A0_Ybuffer;
        output_Zbuffer = A0_Zbuffer;
        outputX_flag = &A0X_output_flag;
        outputY_flag = &A0Y_output_flag;
        outputZ_flag = &A0Z_output_flag;
    }else
    if(mux == 1){
        //TIME
        output_time_buffer = A1_time_buffer;
        //FSR
        fsr_output_buffer = A1_fsr_buffer;
        fsr_output_flag = &A1_fsr_output_flag;
        //PTZ
        ptz_output_buffer = A1_ptz_buffer;
        ptz_output_flag = &A1_ptz_output_flag;
        //ACC
        output_Xbuffer = A1_Xbuffer;
        output_Ybuffer = A1_Ybuffer;
        output_Zbuffer = A1_Zbuffer;
        outputX_flag = &A1X_output_flag;
        outputY_flag = &A1Y_output_flag;
        outputZ_flag = &A1Z_output_flag;
    }else 
    if(mux == 2){
        //TIME
        output_time_buffer = A2_time_buffer;
        //FSR
        fsr_output_buffer = A2_fsr_buffer;
        fsr_output_flag = &A2_fsr_output_flag;
        //PTZ
        ptz_output_buffer = A2_ptz_buffer;
        ptz_output_flag = &A2_ptz_output_flag;
        //ACC
        output_Xbuffer = A2_Xbuffer;
        output_Ybuffer = A2_Ybuffer;
        output_Zbuffer = A2_Zbuffer;
        outputX_flag = &A2X_output_flag;
        outputY_flag = &A2Y_output_flag;
        outputZ_flag = &A2Z_output_flag;
    }else 
    if(mux == 3){
        //TIME
        output_time_buffer = A3_time_buffer;
        //FSR
        fsr_output_buffer = A3_fsr_buffer;
        fsr_output_flag = &A3_fsr_output_flag;
        //PTZ
        ptz_output_buffer = A3_ptz_buffer;
        ptz_output_flag = &A3_ptz_output_flag;
        //ACC
        output_Xbuffer = A3_Xbuffer;
        output_Ybuffer = A3_Ybuffer;
        output_Zbuffer = A3_Zbuffer;
        outputX_flag = &A3X_output_flag;
        outputY_flag = &A3Y_output_flag;
        outputZ_flag = &A3Z_output_flag;
    }else{
        pr_info("kthread - Thread for mux %d finished for execution error: Port not supported\n", mux);
        return 0;
    }

    
    //check client
    if(fsr_a2d1115_i2c_client==NULL || ptz_a2d1115_i2c_client==NULL){
        printk("kthread - Thread for mux %d finished for execution error: client NULL pointer\n", mux);
        return 0;
    }

    pr_info("MBOX thread_mbox0%d - start running with config_value: 0x%04x",mux,config_value);
    //working loop
    while(!kthread_should_stop()){
        //pr_info("thread - assert should stop");
        //check current second
        now_ts = ktime_get_real_seconds();
        trigger = current_ts - now_ts;

        if(buff_pointer > buff_lenght && trigger == 0){
            //printk("MBOX Driver - trigger: %d of (%lld)-(%lld)",trigger,current_ts,now_ts);
            //do Nothing

        /*
        *reset after completing samples
        */
        }else if(buff_pointer > buff_lenght){
            //pr_info("thread_mbox0%d Driver - init raw reading",mux);
            //clear buffer
            memset(fsr_buffer, 0, sizeof(fsr_buffer[0])*buff_lenght);
            memset(ptz_buffer, 0, sizeof(ptz_buffer[0])*buff_lenght);
            memset(acc_buffer[0], 0, sizeof(acc_buffer[0][0])*buff_lenght);
            memset(acc_buffer[1], 0, sizeof(acc_buffer[1][0])*buff_lenght);
            memset(acc_buffer[2], 0, sizeof(acc_buffer[2][0])*buff_lenght);
            memset(timebuff, 0, sizeof(timebuff[0])*buff_lenght);

            buff_pointer = -1;
            sps_counter = 0;            

        /*
        * builds output when completing samples or time-second changes
        */
        }else if(buff_pointer == buff_lenght || (now_ts > current_ts && sps_counter!=0) ){//|| now_ts > current_ts
            //pr_info("MBOX thread-mbox0%d - set raw output data for mux: %d",mux,mux);
            /** ISSUE: apparently snprintf returns a global pointer/variable; 
            *   So it crashes when trying to iterate secuentially two buffers,
            *   the workaround is using a single snprintf result (aka. out_segment) in separate iterations
            */
            //////////////////////////////////////////put FSR data in the buffer///////////////////////////////
            //waits for the data to be ready
            while(*fsr_output_flag!=0){
                //wait
            }
            //set output file flag to busy
            *fsr_output_flag = fsr_mux;
            memset(fsr_output_buffer,0,BUFF_SIZE);
            memset(output_time_buffer,0,BUFF_SIZE);
                        
            out_segment =snprintf(fsr_output_buffer, BUFF_SIZE, "%d", fsr_buffer[0]);
            for(int i=1; i<buff_lenght;i++){
                //num+,+END
                //pr_info("kthread - %d ~ data-segment: %s",i,output_buffer);
                out_segment +=snprintf(fsr_output_buffer + out_segment, BUFF_SIZE, ",%d", fsr_buffer[i]);
                
            }/***/
            out_segment +=snprintf(fsr_output_buffer + out_segment, BUFF_SIZE, "\n");
            //pr_info("MBOX thread-mbox0%d - FSR data-read: %s",mux,fsr_output_buffer);

            //////////////////////////////////////////put TIME data in the buffer///////////////////////////////
            out_segment =snprintf(output_time_buffer, BUFF_SIZE, "%lld", timebuff[0]);
            for(int i=1; i<buff_lenght;i++){
                
                //pr_info("kthread - %d ~ time-segment: %s",i,output_time_buffer);
                out_segment +=snprintf(output_time_buffer + out_segment, BUFF_SIZE, ",%lld", timebuff[i]);
                
            }/***/
            out_segment +=snprintf(output_time_buffer + out_segment, BUFF_SIZE, "\n");
            
            //free output file flag
            *fsr_output_flag = 0;
            out_segment = 0;
            //pr_info("MBOX thread-mbox0%d - FSR-TIME-READ",mux); 
            //////////////////////////////////////////put X data in the buffer///////////////////////////////
            //waits for the data to be read
            while(*outputX_flag!=0){
                //wait
            }
            //set output file flag to busy
            *outputX_flag = 10;

            memset(output_Xbuffer,0,BUFF_SIZE);
            out_segment = snprintf(output_Xbuffer, BUFF_SIZE, "%ld", acc_buffer[0][0]);
            for(int i=1; i<buff_lenght;i++){
                //num+,+END
                out_segment +=snprintf(output_Xbuffer + out_segment, BUFF_SIZE, ",%ld", acc_buffer[0][i]);
            }
            out_segment += snprintf(output_Xbuffer + out_segment, BUFF_SIZE-out_segment, "\n");
            //free output file flag
            *outputX_flag = 0;
            out_segment = 0;
            //pr_info("MBOX thread-mbox0%d - XDATA-READ",mux); 
            //////////////////////////////////////////put Y data in the buffer///////////////////////////////
            //waits for the data to be read
            while(*outputY_flag!=0){
                //wait
            }
            //set output file flag to busy
            *outputY_flag = 11;
            
            memset(output_Ybuffer,0,BUFF_SIZE);
            out_segment = snprintf(output_Ybuffer, BUFF_SIZE, "%ld", acc_buffer[1][0]);
            for(int i=1; i<buff_lenght;i++){
                //num+,+END
                out_segment +=snprintf(output_Ybuffer + out_segment, BUFF_SIZE, ",%ld", acc_buffer[1][i]);
            }
            out_segment += snprintf(output_Ybuffer + out_segment, BUFF_SIZE-out_segment, "\n");
            //free output file flag
            *outputY_flag = 0;
            out_segment = 0;
            //pr_info("MBOX thread-mbox0%d - YDATA-READ",mux); 
            //////////////////////////////////////////put Z data in the buffer///////////////////////////////
            //waits for the data to be read
            while(*outputZ_flag!=0){
                //wait
            }
            //set output file flag to busy
            *outputZ_flag = 12;
            
            memset(output_Zbuffer,0,BUFF_SIZE);
            out_segment = snprintf(output_Zbuffer, BUFF_SIZE, "%ld", acc_buffer[2][0]);
            for(int i=1; i<buff_lenght;i++){
                //num+,+END
                out_segment +=snprintf(output_Zbuffer + out_segment, BUFF_SIZE, ",%ld", acc_buffer[2][i]);
            }
            out_segment += snprintf(output_Zbuffer + out_segment, BUFF_SIZE-out_segment, "\n");
            //free output file flag
            *outputZ_flag = 0;
            out_segment = 0;
            //pr_info("MBOX thread-mbox0%d - ZDATA-READ",mux); 
            //////////////////////////////////////////put PTZ data in the buffer///////////////////////////////
            //waits for the data to be ready
            while(*ptz_output_flag!=0){
                //wait
            }
            //set output file flag to busy
            *ptz_output_flag = fsr_mux;
            memset(ptz_output_buffer,0,BUFF_SIZE);
                        
            out_segment =snprintf(ptz_output_buffer, BUFF_SIZE, "%d", ptz_buffer[0]);
            for(int i=1; i<buff_lenght;i++){
                //num+,+END
                //pr_info("kthread - %d ~ data-segment: %s",i,output_buffer);
                out_segment +=snprintf(ptz_output_buffer + out_segment, BUFF_SIZE, ",%d", ptz_buffer[i]);
                
            }/***/
            out_segment +=snprintf(ptz_output_buffer + out_segment, BUFF_SIZE, "\n");
            //free output ptz file flag
            *ptz_output_flag = 0;

            //pr_info("MBOX thread-mbox0%d - PTZ-READ",mux); 
            ////////////////////////////if time-over case is true////////////////////////////
            buff_pointer = buff_lenght;

        /*
        * extract values while max number of samples has not been reached
        */
        }else if(sps_counter < buff_lenght){
            //pr_info("MBOX thread_mbox0%d reading %d of %d, lenght-%ld",mux, buff_pointer, sps_counter, buff_lenght);

            if(tca_mux != mux){
                //wait
                while(wait_event_timeout(thread_wq, tca_mux == mux, msecs_to_jiffies(0.5)) == 0){
                    //pr_info("MBOX Driver - (%d)Waiting. device still busy (%d) but timeout elapsed!\n",mux,resource_flag);
                    if(kthread_should_stop()){
                        break;
                    }
                }//while-wait
            }
            
            //update initial timestamp
            if(initial_ns == 0 || sps_counter == 0){
                initial_ns = ktime_get_real(); 
                current_ts = ktime_get_real_seconds();
            }
            
            //////////////////////////////////////////Set FSR ADC for Measurement///////////////////////////////
            //writes device to setup MUX & conversion flag
            i2c_smbus_write_byte(fsr_a2d1115_i2c_client,ADS1115_REG_CONFIG);
            i2c_smbus_write_word_data(fsr_a2d1115_i2c_client, ADS1115_REG_CONFIG, data_to_number(config_value) );
            i2c_smbus_write_byte(fsr_a2d1115_i2c_client,ADS1115_REG_CONFIG);
            fsr_conf_register_value = data_to_number(i2c_smbus_read_word_data(fsr_a2d1115_i2c_client, ADS1115_REG_CONFIG));

            //////////////////////////////////////////Set PTZ ADC for Measurement///////////////////////////////
            //writes device to setup MUX & conversion flag
            i2c_smbus_write_byte(ptz_a2d1115_i2c_client,ADS1115_REG_CONFIG);
            i2c_smbus_write_word_data(ptz_a2d1115_i2c_client, ADS1115_REG_CONFIG, data_to_number(config_value) );
            i2c_smbus_write_byte(ptz_a2d1115_i2c_client,ADS1115_REG_CONFIG);
            ptz_conf_register_value = data_to_number(i2c_smbus_read_word_data(fsr_a2d1115_i2c_client, ADS1115_REG_CONFIG));
            
            //////////////////////////////////////////Read FSR conversion//////////////////////////////////////////
            while((fsr_conf_register_value & 0x8000) == 0){
                fsr_conf_register_value = data_to_number(i2c_smbus_read_word_data(fsr_a2d1115_i2c_client, ADS1115_REG_CONFIG));
            }
            i2c_smbus_write_byte(fsr_a2d1115_i2c_client,ADS1115_REG_CONVERT);
            fsr_conversion_value = data_to_number(i2c_smbus_read_word_data(fsr_a2d1115_i2c_client, ADS1115_REG_CONVERT));
            timebuff[buff_pointer] = ktime_get_real_ns();
            fsr_buffer[buff_pointer]  = twos_complement(fsr_conversion_value,16);

            //////////////////////////////////////////Read PTZ conversion//////////////////////////////////////////
            /*while((ptz_conf_register_value & 0x8000) == 0){
                ptz_conf_register_value = data_to_number(i2c_smbus_read_word_data(ptz_a2d1115_i2c_client, ADS1115_REG_CONFIG));
            }
            i2c_smbus_write_byte(ptz_a2d1115_i2c_client,ADS1115_REG_CONVERT);
            ptz_conversion_value = data_to_number(i2c_smbus_read_word_data(ptz_a2d1115_i2c_client, ADS1115_REG_CONVERT));
            ptz_buffer[buff_pointer]  = twos_complement(ptz_conversion_value,16);
            /***/
            //////////////////////////////////////////Read ACC DATA//////////////////////////////////////////
            //enable TCA channel
            if(tcaselect_channel(mux) != 0){
                pr_err("Error in channel switch to mux:%d!",mux);
                tca_next_port();
                continue;
            }

            //Read data
            x3 = i2c_smbus_read_byte_data(adxl_i2c_client, ADXL355_XDATA3);
            x2 = i2c_smbus_read_byte_data(adxl_i2c_client, ADXL355_XDATA2);
            x1 = i2c_smbus_read_byte_data(adxl_i2c_client, ADXL355_XDATA1);

            //extracts Y
            y3 = i2c_smbus_read_byte_data(adxl_i2c_client, ADXL355_YDATA3);
            y2 = i2c_smbus_read_byte_data(adxl_i2c_client, ADXL355_YDATA2);
            y1 = i2c_smbus_read_byte_data(adxl_i2c_client, ADXL355_YDATA1);

            //extracts Z
            z3 = i2c_smbus_read_byte_data(adxl_i2c_client, ADXL355_ZDATA3);
            z2 = i2c_smbus_read_byte_data(adxl_i2c_client, ADXL355_ZDATA2);
            z1 = i2c_smbus_read_byte_data(adxl_i2c_client, ADXL355_ZDATA1);


            //next port
            tca_next_port();
            adc_next_port();
            //wakes up other threads
            wake_up_all(&thread_wq);

            //Build up data
            x = (x3 << 12) | (x2 << 4) | (x1 >> 4);
            acc_buffer[0][buff_pointer] = twos_complement(x,20);
            
            y = (y3 << 12) | (y2 << 4) | (y1 >> 4);
            acc_buffer[1][buff_pointer] = twos_complement(y,20);
            //pr_info("MBOX Driver Thread- y_fifo_count: %#10x,%#10x,%#10x,",y1,y2,y3);
                        
            z = (z3 << 12) | (z2 << 4) | (z1 >> 4);
            acc_buffer[2][buff_pointer] = twos_complement(z,20);


            //increase sample counter
            sps_counter++;
            //update final timestamp
            final_ns = ktime_get_real();

        /*
        * wait for time-second to change
        */
        }
        buff_pointer++;

    }//while-kthread_should_stop
    //while(!kthread_should_stop()){}
    printk("MBOX Driver - Thread for mux %d finished execution!\n", mux);
    return 0; 
 }


/**
 * @brief reader function for SYS file fsr1_data
 */
static ssize_t fsr1_data_show(struct device *dev, struct device_attribute *attr,char *buf) {
    //int reg = 0x83E3|(4<<11)|(1<<15);//00011000000000000000
    int n;
    //waits for the data to be ready
    while(A0_fsr_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A0_fsr_output_flag = 1;
        
	n = snprintf(buf,sizeof(A0_fsr_buffer),A0_fsr_buffer);
    //Free flag
    A0_fsr_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file fsr1_time
 */
static ssize_t fsr1_time_show(struct device *dev, struct device_attribute *attr,char *buf) {
    //int reg = 0x83E3|(4<<11)|(1<<15);//00011000000000000000
    int n;
    //waits for the data to be ready
    while(A0t_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A0t_output_flag = 1;
        
	n = snprintf(buf,sizeof(A0_time_buffer),A0_time_buffer);
    //Free flag
    A0t_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file fsr2_data
 */
static ssize_t fsr2_data_show(struct device *dev, struct device_attribute *attr,char *buf) {
    int n;
    //waits for the data to be ready
    while(A1_fsr_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A1_fsr_output_flag = 1;
	n = snprintf(buf,sizeof(A1_fsr_buffer),A1_fsr_buffer);
    //Free flag
    A1_fsr_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file fsr2_time
 */
static ssize_t fsr2_time_show(struct device *dev, struct device_attribute *attr,char *buf) {
    //int reg = 0x83E3|(4<<11)|(1<<15);//00011000000000000000
    int n;
    //waits for the data to be ready
    while(A1t_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A1t_output_flag = 1;
        
	n = snprintf(buf,sizeof(A1_time_buffer),A1_time_buffer);
    //Free flag
    A1t_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file fsr3_data
 */
static ssize_t fsr3_data_show(struct device *dev, struct device_attribute *attr,char *buf) {
    int n;    
    //waits for the data to be ready
    while(A2_fsr_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A2_fsr_output_flag = 1;
	n = snprintf(buf,sizeof(A2_fsr_buffer),A2_fsr_buffer);
    //Free flag
    A2_fsr_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file fsr3_time
 */
static ssize_t fsr3_time_show(struct device *dev, struct device_attribute *attr,char *buf) {
    //int reg = 0x83E3|(4<<11)|(1<<15);//00011000000000000000
    int n;
    //waits for the data to be ready
    while(A2t_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A2t_output_flag = 1;
        
	n = snprintf(buf,sizeof(A2_time_buffer),A2_time_buffer);
    //Free flag
    A2t_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file fsr4_data
 */
static ssize_t fsr4_data_show(struct device *dev, struct device_attribute *attr,char *buf) {
    int n;    
    //waits for the data to be ready
    while(A3_fsr_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A3_fsr_output_flag = 1;
	n = snprintf(buf,sizeof(A3_fsr_buffer),A3_fsr_buffer);
    //Free flag
    A3_fsr_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file fsr3_time
 */
static ssize_t fsr4_time_show(struct device *dev, struct device_attribute *attr,char *buf) {
    //int reg = 0x83E3|(4<<11)|(1<<15);//00011000000000000000
    int n;
    //waits for the data to be ready
    while(A3t_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A3t_output_flag = 1;
        
	n = snprintf(buf,sizeof(A3_time_buffer),A3_time_buffer);
    //Free flag
    A3t_output_flag = 0;

    return n;
}

/**
 * @brief sysfs files definition using macro
 */
static DEVICE_ATTR_RO(SYSFS_FSR1);
static DEVICE_ATTR_RO(SYSFS_FSR2);
static DEVICE_ATTR_RO(SYSFS_FSR3);
static DEVICE_ATTR_RO(SYSFS_FSR4);

static DEVICE_ATTR_RO(SYSFS_TIME_FSR1);
static DEVICE_ATTR_RO(SYSFS_TIME_FSR2);
static DEVICE_ATTR_RO(SYSFS_TIME_FSR3);
static DEVICE_ATTR_RO(SYSFS_TIME_FSR4);

/**
 * @brief reader function for SYS file acc1_xdata
 */
static ssize_t acc1_xdata_show(struct device *dev, struct device_attribute *attr,char *buf) {
    int n;
    //waits for the data to be ready
    while(A0X_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A0X_output_flag = 1;        
	n = snprintf(buf,sizeof(A0_Xbuffer),A0_Xbuffer);
    //Free flag
    A0X_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file acc1_ydata
 */
static ssize_t acc1_ydata_show(struct device *dev, struct device_attribute *attr,char *buf) {
    int n;
    //waits for the data to be ready
    while(A0Y_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A0Y_output_flag = 1;        
	n = snprintf(buf,sizeof(A0_Ybuffer),A0_Ybuffer);
    //Free flag
    A0Y_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file acc1_zdata
 */
static ssize_t acc1_zdata_show(struct device *dev, struct device_attribute *attr,char *buf) {
    int n;
    //waits for the data to be ready
    while(A0Z_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A0Z_output_flag = 1;        
	n = snprintf(buf,sizeof(A0_Zbuffer),A0_Zbuffer);
    //Free flag
    A0Z_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file acc1_time
 */
static ssize_t acc1_time_show(struct device *dev, struct device_attribute *attr,char *buf) {
    int n;
    //waits for the data to be ready
    while(A0t_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A0t_output_flag = 1;
        
	n = snprintf(buf,sizeof(A0_time_buffer),A0_time_buffer);
    //Free flag
    A0t_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file acc2_xdata
 */
static ssize_t acc2_xdata_show(struct device *dev, struct device_attribute *attr,char *buf) {
    int n;
    //waits for the data to be ready
    while(A1X_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A1X_output_flag = 1;        
	n = snprintf(buf,sizeof(A1_Xbuffer),A1_Xbuffer);
    //Free flag
    A1X_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file acc2_ydata
 */
static ssize_t acc2_ydata_show(struct device *dev, struct device_attribute *attr,char *buf) {
    int n;
    //waits for the data to be ready
    while(A1Y_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A1Y_output_flag = 1;        
	n = snprintf(buf,sizeof(A1_Ybuffer),A1_Ybuffer);
    //Free flag
    A1Y_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file acc2_zdata
 */
static ssize_t acc2_zdata_show(struct device *dev, struct device_attribute *attr,char *buf) {
    int n;
    //waits for the data to be ready
    while(A1Z_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A1Z_output_flag = 1;        
	n = snprintf(buf,sizeof(A1_Zbuffer),A1_Zbuffer);
    //Free flag
    A1Z_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file acc2_time
 */
static ssize_t acc2_time_show(struct device *dev, struct device_attribute *attr,char *buf) {
    int n;
    //waits for the data to be ready
    while(A1t_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A1t_output_flag = 1;
        
	n = snprintf(buf,sizeof(A1_time_buffer),A1_time_buffer);
    //Free flag
    A1t_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file acc3_xdata
 */
static ssize_t acc3_xdata_show(struct device *dev, struct device_attribute *attr,char *buf) {
    int n;
    //waits for the data to be ready
    while(A2X_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A2X_output_flag = 1;        
	n = snprintf(buf,sizeof(A2_Xbuffer),A2_Xbuffer);
    //Free flag
    A2X_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file acc3_ydata
 */
static ssize_t acc3_ydata_show(struct device *dev, struct device_attribute *attr,char *buf) {
    int n;
    //waits for the data to be ready
    while(A2Y_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A2Y_output_flag = 1;        
	n = snprintf(buf,sizeof(A2_Ybuffer),A2_Ybuffer);
    //Free flag
    A2Y_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file acc3_zdata
 */
static ssize_t acc3_zdata_show(struct device *dev, struct device_attribute *attr,char *buf) {
    int n;
    //waits for the data to be ready
    while(A2Z_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A2Z_output_flag = 1;        
	n = snprintf(buf,sizeof(A2_Zbuffer),A2_Zbuffer);
    //Free flag
    A2Z_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file acc3_time
 */
static ssize_t acc3_time_show(struct device *dev, struct device_attribute *attr,char *buf) {
    int n;
    //waits for the data to be ready
    while(A2t_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A2t_output_flag = 1;
        
	n = snprintf(buf,sizeof(A2_time_buffer),A2_time_buffer);
    //Free flag
    A2t_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file acc4_xdata
 */
static ssize_t acc4_xdata_show(struct device *dev, struct device_attribute *attr,char *buf) {
    int n;
    //waits for the data to be ready
    while(A3X_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A3X_output_flag = 1;        
	n = snprintf(buf,sizeof(A3_Xbuffer),A3_Xbuffer);
    //Free flag
    A3X_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file acc4_ydata
 */
static ssize_t acc4_ydata_show(struct device *dev, struct device_attribute *attr,char *buf) {
    int n;
    //waits for the data to be ready
    while(A3Y_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A3Y_output_flag = 1;        
	n = snprintf(buf,sizeof(A3_Ybuffer),A3_Ybuffer);
    //Free flag
    A3Y_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file acc4_zdata
 */
static ssize_t acc4_zdata_show(struct device *dev, struct device_attribute *attr,char *buf) {
    int n;
    //waits for the data to be ready
    while(A3Z_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A3Z_output_flag = 1;        
	n = snprintf(buf,sizeof(A3_Zbuffer),A3_Zbuffer);
    //Free flag
    A3Z_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file acc4_time
 */
static ssize_t acc4_time_show(struct device *dev, struct device_attribute *attr,char *buf) {
    int n;
    //waits for the data to be ready
    while(A3t_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A3t_output_flag = 1;
        
	n = snprintf(buf,sizeof(A3_time_buffer),A3_time_buffer);
    //Free flag
    A3t_output_flag = 0;

    return n;
}

/**
 * @brief sysfs files definition using macro
 */
static DEVICE_ATTR_RO(SYSFS_ACC1X);
static DEVICE_ATTR_RO(SYSFS_ACC1Y);
static DEVICE_ATTR_RO(SYSFS_ACC1Z);

static DEVICE_ATTR_RO(SYSFS_ACC2X);
static DEVICE_ATTR_RO(SYSFS_ACC2Y);
static DEVICE_ATTR_RO(SYSFS_ACC2Z);

static DEVICE_ATTR_RO(SYSFS_ACC3X);
static DEVICE_ATTR_RO(SYSFS_ACC3Y);
static DEVICE_ATTR_RO(SYSFS_ACC3Z);

static DEVICE_ATTR_RO(SYSFS_ACC4X);
static DEVICE_ATTR_RO(SYSFS_ACC4Y);
static DEVICE_ATTR_RO(SYSFS_ACC4Z);

static DEVICE_ATTR_RO(SYSFS_TIME_ACC1);
static DEVICE_ATTR_RO(SYSFS_TIME_ACC2);
static DEVICE_ATTR_RO(SYSFS_TIME_ACC3);
static DEVICE_ATTR_RO(SYSFS_TIME_ACC4);

/**
 * @brief reader function for SYS file ptz1_data
 */
static ssize_t ptz1_data_show(struct device *dev, struct device_attribute *attr,char *buf) {
    //int reg = 0x83E3|(4<<11)|(1<<15);//00011000000000000000
    int n;
    //waits for the data to be ready
    while(A0_ptz_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A0_ptz_output_flag = 1;
        
	n = snprintf(buf,sizeof(A0_ptz_buffer),A0_ptz_buffer);
    //Free flag
    A0_ptz_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file ptz1_time
 */
static ssize_t ptz1_time_show(struct device *dev, struct device_attribute *attr,char *buf) {
    //int reg = 0x83E3|(4<<11)|(1<<15);//00011000000000000000
    int n;
    //waits for the data to be ready
    while(A0t_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A0t_output_flag = 1;
        
	n = snprintf(buf,sizeof(A0_time_buffer),A0_time_buffer);
    //Free flag
    A0t_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file ptz2_data
 */
static ssize_t ptz2_data_show(struct device *dev, struct device_attribute *attr,char *buf) {
    int n;
    //waits for the data to be ready
    while(A1_ptz_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A1_ptz_output_flag = 1;
	n = snprintf(buf,sizeof(A1_ptz_buffer),A1_ptz_buffer);
    //Free flag
    A1_ptz_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file ptz2_time
 */
static ssize_t ptz2_time_show(struct device *dev, struct device_attribute *attr,char *buf) {
    //int reg = 0x83E3|(4<<11)|(1<<15);//00011000000000000000
    int n;
    //waits for the data to be ready
    while(A1t_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A1t_output_flag = 1;
        
	n = snprintf(buf,sizeof(A1_time_buffer),A1_time_buffer);
    //Free flag
    A1t_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file ptz3_data
 */
static ssize_t ptz3_data_show(struct device *dev, struct device_attribute *attr,char *buf) {
    int n;    
    //waits for the data to be ready
    while(A2_ptz_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A2_ptz_output_flag = 1;
	n = snprintf(buf,sizeof(A2_ptz_buffer),A2_ptz_buffer);
    //Free flag
    A2_ptz_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file ptz3_time
 */
static ssize_t ptz3_time_show(struct device *dev, struct device_attribute *attr,char *buf) {
    //int reg = 0x83E3|(4<<11)|(1<<15);//00011000000000000000
    int n;
    //waits for the data to be ready
    while(A2t_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A2t_output_flag = 1;
        
	n = snprintf(buf,sizeof(A2_time_buffer),A2_time_buffer);
    //Free flag
    A2t_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file ptz4_data
 */
static ssize_t ptz4_data_show(struct device *dev, struct device_attribute *attr,char *buf) {
    int n;    
    //waits for the data to be ready
    while(A3_ptz_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A3_ptz_output_flag = 1;
	n = snprintf(buf,sizeof(A3_ptz_buffer),A3_ptz_buffer);
    //Free flag
    A3_ptz_output_flag = 0;

    return n;
}

/**
 * @brief reader function for SYS file ptz3_time
 */
static ssize_t ptz4_time_show(struct device *dev, struct device_attribute *attr,char *buf) {
    //int reg = 0x83E3|(4<<11)|(1<<15);//00011000000000000000
    int n;
    //waits for the data to be ready
    while(A3t_output_flag!=0){
        //wait
    }
    //Set flag to busy
    A3t_output_flag = 1;
        
	n = snprintf(buf,sizeof(A3_time_buffer),A3_time_buffer);
    //Free flag
    A3t_output_flag = 0;

    return n;
}

/**
 * @brief sysfs files definition using macro
 */
static DEVICE_ATTR_RO(SYSFS_PTZ1);
static DEVICE_ATTR_RO(SYSFS_PTZ2);
static DEVICE_ATTR_RO(SYSFS_PTZ3);
static DEVICE_ATTR_RO(SYSFS_PTZ4);

static DEVICE_ATTR_RO(SYSFS_TIME_PTZ1);
static DEVICE_ATTR_RO(SYSFS_TIME_PTZ2);
static DEVICE_ATTR_RO(SYSFS_TIME_PTZ3);
static DEVICE_ATTR_RO(SYSFS_TIME_PTZ4);


/**
* Initialization function
*/
static int __init ModuleInit(void) {
    int returnVal = -1;
    int result = 0;

    //printk(KERN_INFO,"MOBO 94379087498374932740938274093274098723490782309487JJJJJJJJJJJJJJJ!!!!!!");

    //////////////////////////ADD the i2c bus adapter & client////////////////////////////
    mbox_i2c_adapter = i2c_get_adapter(I2C_BUS_AVAILABLE);
    if(mbox_i2c_adapter != NULL){

        //////////////////////////FSR client////////////////////////////
        fsr_a2d1115_i2c_client = i2c_new_client_device(mbox_i2c_adapter, &FSR_ADS1115_board_info);
        if (!IS_ERR(fsr_a2d1115_i2c_client)){
            if(i2c_add_driver(&mbox_ADS1115_fsrdriver) != -1){
                returnVal = 0;
            }else{
                pr_err("MBOX Driver - Can not add dirver\n");
            }
        }else{
             pr_err("MBOX Driver - Error here: %ld", PTR_ERR(fsr_a2d1115_i2c_client));
        }

        //////////////////////////PTZ client////////////////////////////
        ptz_a2d1115_i2c_client = i2c_new_client_device(mbox_i2c_adapter, &PTZ_ADS1115_board_info);
        if (!IS_ERR(ptz_a2d1115_i2c_client)){
            if(i2c_add_driver(&mbox_ADS1115_ptzdriver) != -1){
                returnVal = 0;
            }else{
                pr_err("MBOX Driver - Can not add dirver\n");
            }
        }else{
             pr_err("MBOX Driver - Error here: %ld", PTR_ERR(ptz_a2d1115_i2c_client));
        }

        //////////////////////////TCA-MUX client////////////////////////////
        tca_i2c_client = i2c_new_client_device(mbox_i2c_adapter, &TCA9548A_board_info);
        if (!IS_ERR(tca_i2c_client)){
            if(i2c_add_driver(&mbox_TCA9548A_driver) != -1){
                returnVal = 0;
            }else{
                pr_err("MBOX Driver - Can not add dirver for TCA9548A\n");
                returnVal = -1;
            }
        }else{
             pr_err("MBOX Driver - Error here: %ld", PTR_ERR(tca_i2c_client));
             returnVal = -1;
        }


        i2c_put_adapter(mbox_i2c_adapter);
    }
    if(returnVal ==0)
        pr_info("MBOX Driver - Morpheusbox driver added!\n");
    else
        return -ENOMEM;

    //////////////////////////////creates sys Folder/////////////////////////
    morpheusbox_fsr = platform_device_register_simple(FSR_PLAT_NAME, -1, NULL, 0);
    //Check operation
    if(!morpheusbox_fsr) {
        pr_info("MBOX Driver - Error creating /sys/devices/platform/morpheusbox_fsr_v3\n");
		return -ENOMEM;
	}
    pr_info("MBOX Driver - SYS Folder created: /sys/devices/platform/morpheusbox_fsr_v3\n");


    morpheusbox_ptz = platform_device_register_simple(PTZ_PLAT_NAME, -1, NULL, 0);
    //Check operation
    if(!morpheusbox_ptz) {
        pr_info("MBOX Driver - Error creating /sys/devices/platform/morpheusbox_ptz_v3\n");
		return -ENOMEM;
	}
    pr_info("MBOX Driver - SYS Folder created: /sys/devices/platform/morpheusbox_ptz_v3\n");


    morpheusbox_acc = platform_device_register_simple(ADXL_DEVICE_NAME, -1, NULL, 0);
    //Check operation
    if(!morpheusbox_acc) {
        pr_info("MBOX Driver - Error creating /sys/devices/platform/morpheusbox_acc_v3\n");
		return -ENOMEM;
	}
    pr_info("MBOX Driver - SYS Folder created: /sys/devices/platform/morpheusbox_acc_v3\n");


    //////////////////////////ADD DRIVER to the i2c bus adapter & client////////////////////////////
    if(sensors_set >= 1){ 
        //creates fsr1  
        returnVal = device_create_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR1);       
        if(returnVal){
            pr_err("MBOX Driver - Error creating the sysfs file FSR1");        
            goto SysfileError;
        }

        //creates time_fsr1
        returnVal = device_create_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR1);       
        if(returnVal){
            pr_err("MBOX Driver - Error creating the sysfs time-file FSR1");  
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR1);       
            goto SysfileError;
        }

        //creates ptz1  
        returnVal = device_create_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_PTZ1);       
        if(returnVal){
            pr_err("MBOX Driver - Error creating the sysfs file PTZ1");      
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR1);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR1);    
            goto SysfileError;
        }
        
        //creates time_ptz1
        returnVal = device_create_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_PTZ1);       
        if(returnVal){
            pr_err("MBOX Driver - Error creating the sysfs time-file PTZ1"); 
            device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_PTZ1);       
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR1);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR1);   
            goto SysfileError;
        }

        //enable the first channel
        tcaselect_channel(A0_mux);
        //add acc1 drivers
        if(mbox_i2c_adapter != NULL){
            adxl_i2c_client = i2c_new_client_device(mbox_i2c_adapter, &ADXL355_board_info);
            if (!IS_ERR(adxl_i2c_client)){
                if(i2c_add_driver(&mbox_ADXL355_driver) != -1){
                    returnVal = 0;
                }else{
                    pr_err("MBOX Driver - Can not add dirver for ADXL355\n");
                    returnVal = -1;
                }
            }else{
                pr_err("MBOX Driver - Error here: %ld", PTR_ERR(adxl_i2c_client));
                returnVal = -1;
            }
        }
        if(returnVal == 0)
            pr_info("MBOX Driver - i2c driver for ADXL3555 added!\n");
        else{
            device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_PTZ1);       
            device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_PTZ1);       
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR1);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR1);  
            goto SysfileError;
            }

        //Check sensor1 response
        result = check_current_adxl(adxl_i2c_client);
        if(result != 0){
            pr_err("Error accessing Sensor 1. Not responsive");
            device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_PTZ1);       
            device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_PTZ1);       
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR1);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR1);
            goto SysfileSensorError;
        }
    
        /////////////////////////Creates SYS files///////////////////////////////
        //creates acc1_xdata
        if(device_create_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC1X)){
            pr_err("MBOX Driver - Error creating the sysfs file ACC1_XDATA");
            device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_PTZ1);       
            device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_PTZ1);       
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR1);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR1);   
            goto SysfileSensorError;
        }
        //creates acc1_ydata
        if(device_create_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC1Y)){
            pr_err("MBOX Driver - Error creating the sysfs file ACC1_YDATA");
            device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC1X);
            device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_PTZ1);       
            device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_PTZ1);       
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR1);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR1);
            goto SysfileSensorError;
        }
        //creates acc1_zdata
        if(device_create_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC1Z)){
            pr_err("MBOX Driver - Error creating the sysfs file ACC1_ZDATA");
            device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC1Y);
            device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC1X);
            device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_PTZ1);       
            device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_PTZ1);       
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR1);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR1);
            goto SysfileSensorError;
        }
        //creates time_acc1
        returnVal = device_create_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_TIME_ACC1);       
        if(returnVal){
            pr_err("MBOX Driver - Error creating the sysfs time-file ACC1"); 
            device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC1Z);
            device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC1Y);
            device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC1X);
            device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_PTZ1);       
            device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_PTZ1);       
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR1);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR1); 
            goto SysfileSensorError;
        }

        //creates thread for fsr1
        kthread_A0 =  kthread_create_on_node(read_raw_data, &A0_mux,  NUMA_NO_NODE, "kthread_mbox01");
    }//if-sensors_set>=1

    if(sensors_set >= 2){
        //creates fsr2
        returnVal = device_create_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR2);
        if(returnVal){
            pr_err("MBOX Driver - Error creating the sysfs file FSR2");           
            goto SysfileSensor2Error;
        }
        //creates time_fsr2
        returnVal = device_create_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR2);       
        if(returnVal){
            pr_err("MBOX Driver - Error creating the sysfs time-file FSR2");   
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR2);  
            goto SysfileSensor2Error;
        }

        //creates ptz2
        returnVal = device_create_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_PTZ2);
        if(returnVal){
            pr_err("MBOX Driver - Error creating the sysfs file PTZ2");        
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR2);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR2);            
            goto SysfileSensor2Error;
        }
        //creates time_ptz2
        returnVal = device_create_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_PTZ2);       
        if(returnVal){
            pr_err("MBOX Driver - Error creating the sysfs time-file PTZ2");       
            device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_PTZ2);       
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR2);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR2);       
            goto SysfileSensor2Error;
        }

        //enables channel 2
        tcaselect_channel(A1_mux);   

        //Check sensor2 response
        result = check_current_adxl(adxl_i2c_client);
        if(result != 0){
            pr_err("Error accessing Sensor 2. Not responsive");                   
            device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_PTZ2);       
            device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_PTZ2);       
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR2);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR2);
            goto SysfileSensor2Error;
        }

        //creates acc2_xdata
        if(device_create_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC2X)){
            pr_err("MBOX Driver - Error creating the sysfs file ACC2_XDATA");
            device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_PTZ2);       
            device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_PTZ2);       
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR2);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR2);
            goto SysfileSensor2Error;
        }
        //creates acc2_ydata
        if(device_create_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC2Y)){
            pr_err("MBOX Driver - Error creating the sysfs file ACC2_YDATA");
            device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC2X);
            device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_PTZ2);       
            device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_PTZ2);       
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR2);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR2);
            goto SysfileSensor2Error;
        }
        //creates acc2_zdata
        if(device_create_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC2Z)){
            pr_err("MBOX Driver - Error creating the sysfs file ACC2_ZDATA");
            device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC2X);
            device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC2Y);
            device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_PTZ2);       
            device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_PTZ2);       
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR2);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR2);
            goto SysfileSensor2Error;
        }

        //creates thread for fsr2
        kthread_A1 =  kthread_create_on_node(read_raw_data, &A1_mux,  NUMA_NO_NODE, "kthread_mbox02");
    }//sensor_set>=2
    
    if(sensors_set >= 3){
        //creates fsr3
        returnVal = device_create_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR3);
        if(returnVal){
            pr_err("MBOX Driver - Error creating the sysfs file FSR3");       
            goto SysfileSensor3Error;
        }
        //creates time_fsr3
        returnVal = device_create_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR3);       
        if(returnVal){
            pr_err("MBOX Driver - Error creating the sysfs time-file FSR3");    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR3);    
            goto SysfileSensor3Error;
        }

        //creates ptz3
        returnVal = device_create_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_PTZ3);
        if(returnVal){
            pr_err("MBOX Driver - Error creating the sysfs file PTZ3");    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR3);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR3);    

            goto SysfileSensor3Error;
        }
        //creates time_ptz3
        returnVal = device_create_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_PTZ3);       
        if(returnVal){
            pr_err("MBOX Driver - Error creating the sysfs time-file PTZ3");    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_PTZ3);   
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR3);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR3);   
            goto SysfileSensor3Error;
        }

        //select channel 3
        tcaselect_channel(A2_mux);
        //Check sensor3 response
        result = check_current_adxl(adxl_i2c_client);
        if(result != 0){
            pr_err("Error accessing Sensor 3. Not responsive");
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_PTZ3);   
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_PTZ3);   
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR3);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR3); 
            goto SysfileSensor3Error;
        }

        //creates acc3_xdata
        if(device_create_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC3X)){
            pr_err("MBOX Driver - Error creating the sysfs file ACC3_XDATA");
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_PTZ3);   
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_PTZ3);   
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR3);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR3); 
            goto SysfileSensor3Error;
        }
        //creates acc3_ydata
        if(device_create_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC3Y)){
            pr_err("MBOX Driver - Error creating the sysfs file ACC3_YDATA");
            device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC3X);
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_PTZ3);   
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_PTZ3);   
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR3);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR3); 
            goto SysfileSensor3Error;
        }
        //creates acc3_zdata
        if(device_create_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC3Z)){
            pr_err("MBOX Driver - Error creating the sysfs file ACC3_ZDATA");
            device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC3X);
            device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC3Y);
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_PTZ3);   
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_PTZ3);   
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR3);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR3); 
            goto SysfileSensor3Error;
        }


        //creates thread for fsr3
        kthread_A2 =  kthread_create_on_node(read_raw_data, &A2_mux,  NUMA_NO_NODE, "kthread_fsr3");
    }//sensor_set>=3
    
    if(sensors_set == 4){
        //creates fsr4
        if(device_create_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR4)){
            pr_err("MBOX Driver - Error creating the sysfs file FSR2");  
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR1);                 
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR1); 
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR2);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR2);     
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR3);     
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR3);     
            goto SysfileError;
        }
        //creates time_fsr4
        returnVal = device_create_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR4);       
        if(returnVal){
            pr_err("MBOX Driver - Error creating the sysfs time-file FSR2");  
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR1);                 
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR1); 
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR2);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR2);     
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR3);     
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR3);    
            device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR4);                 
            goto SysfileError;
        }
        //creates thread for fsr4
         kthread_A3 =  kthread_create_on_node(read_raw_data, &A3_mux,  NUMA_NO_NODE, "kthread_fsr4");
    }/***/

    ////////////////////////////Inits the ADC1115 FSR component/////////////////////////       
    //Read default configuration
    i2c_smbus_write_byte(fsr_a2d1115_i2c_client,ADS1115_REG_CONFIG);
    fsr_config_register = data_to_number(i2c_smbus_read_word_data(fsr_a2d1115_i2c_client, ADS1115_REG_CONFIG));
    pr_info("MBOX Driver - Default configuration FSR register value: 0x%04x\n",fsr_config_register);
    //Read default conversion
    i2c_smbus_write_byte(fsr_a2d1115_i2c_client,ADS1115_REG_CONVERT);
    fsr_conversion_register = data_to_number(i2c_smbus_read_word_data(fsr_a2d1115_i2c_client, ADS1115_REG_CONVERT));
    pr_info("MBOX Driver - Default conversion FSR register value: 0x%04x\n",fsr_conversion_register);
    //Init the device
    i2c_smbus_write_byte(fsr_a2d1115_i2c_client,ADS1115_REG_CONFIG);
    i2c_smbus_write_word_data(fsr_a2d1115_i2c_client, ADS1115_REG_CONFIG, data_to_number(DEVICE_ONESHOT_CONFIG_NOCONVERSION));
    fsr_config_register = data_to_number(i2c_smbus_read_word_data(fsr_a2d1115_i2c_client, ADS1115_REG_CONFIG));
    pr_info("MBOX Driver - Default configuration FSR register Set 0x83E3 : 0x%04x\n",fsr_config_register);
    
    ///////////////////////////Init threads for data extraction//////////////////////////////
    adc_next_port();

    if(kthread_A0 != NULL){
		wake_up_process(kthread_A0);
		printk("MBOX Driver - Thread mbox01 is running\n");
	}
	else {
		printk("MBOX Driver - Thread mbox01 not created!\n");
        if(sensors_set >= 1)
		    goto ThreadError;
	}/***/
    
    if(kthread_A1 != NULL){
		wake_up_process(kthread_A1);
		printk("MBOX Driver - Thread mbox02 is running\n");
	}
	else {
		printk("MBOX Driver - Thread mbox02 not created!\n");
		if(sensors_set >= 2)
		    goto ThreadError;
	}
    
    if(kthread_A2 != NULL){
		wake_up_process(kthread_A2);
		printk("MBOX Driver - Thread mbox03 is running\n");
	}
	else {
		printk("MBOX Driver - Thread mbox03 not created!\n");
		if(sensors_set >= 3)
		    goto ThreadError;
	}
    
    if(kthread_A3 != NULL){
		wake_up_process(kthread_A3);
		printk("MBOX Driver - Thread mbox04 is running\n");
	}
	else {
		printk("MBOX Driver - Thread mbox04 not created!\n");
		if(sensors_set == 4)
		    goto ThreadError;
	}/***/

    return 0;


    ThreadError:
        if(kthread_A0 != NULL){
            kthread_stop(kthread_A0);
        }
        if(kthread_A1 != NULL){
            kthread_stop(kthread_A1);
        }
        if(kthread_A2 != NULL){
            kthread_stop(kthread_A2);
        }
        if(kthread_A3 != NULL){
            kthread_stop(kthread_A3);
        }

    SysfileSensor4Error:
        device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_ACC3);       
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC3Z);
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC3X);
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC3Y);
        device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_PTZ3);       
        device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_PTZ3);       
        device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR3);    
        device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR3);

    SysfileSensor3Error:
        device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_ACC2);       
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC2Z);
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC2X);
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC2Y);
        device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_PTZ2);       
        device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_PTZ2);       
        device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR2);    
        device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR2);

    SysfileSensor2Error:
        device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_ACC1);       
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC1Z);
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC1Y);
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC1X);
        device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_PTZ1);       
        device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_PTZ1);       
        device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR1);    
        device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR1); 

    SysfileSensorError:
        i2c_unregister_device(adxl_i2c_client);
        i2c_del_driver(&mbox_ADXL355_driver);
    
    SysfileError:
        platform_device_unregister(morpheusbox_fsr);
        platform_device_unregister(morpheusbox_ptz);
        platform_device_unregister(morpheusbox_acc);
        i2c_unregister_device(fsr_a2d1115_i2c_client);
        i2c_unregister_device(ptz_a2d1115_i2c_client);
        i2c_unregister_device(tca_i2c_client);
	    i2c_del_driver(&mbox_ADS1115_fsrdriver);
	    i2c_del_driver(&mbox_ADS1115_ptzdriver);
        i2c_del_driver(&mbox_TCA9548A_driver);
        return -ENOMEM;
}


static void __exit ModuleExit(void) {
    ///////////////Stop al threads//////////////////////
    if(kthread_A0 != NULL){
        kthread_stop(kthread_A0);
    }
    if(kthread_A1 != NULL){
        kthread_stop(kthread_A1);
    }
    if(kthread_A2 != NULL){
        kthread_stop(kthread_A2);
    }
    if(kthread_A3 != NULL){
        kthread_stop(kthread_A3);
    }
    ///////////////removes SYS files /////////////////////
    if(sensors_set >= 1){
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_TIME_ACC1);
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC1Z);
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC1Y);
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC1X);
        device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_PTZ1);       
        device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_PTZ1);       
        device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR1);    
        device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR1); 
    }
    if(sensors_set >= 2){
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_TIME_ACC2);
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC2Z);
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC2Y);
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC2X);
        device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_PTZ2);       
        device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_PTZ2);       
        device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR2);    
        device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR2); 
    }
    if(sensors_set >= 3){
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_TIME_ACC3);
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC3Z);
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC3Y);
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC3X);
        device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_PTZ3);       
        device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_PTZ3);       
        device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR3);    
        device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR3); 
    }
    if(sensors_set == 4){
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_TIME_ACC4);
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC4Z);
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC4Y);
        device_remove_file(&morpheusbox_acc->dev, &dev_attr_SYSFS_ACC4X);
        device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_TIME_PTZ4);       
        device_remove_file(&morpheusbox_ptz->dev, &dev_attr_SYSFS_PTZ4);       
        device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_TIME_FSR4);    
        device_remove_file(&morpheusbox_fsr->dev, &dev_attr_SYSFS_FSR4); 
    }/***/

    ///////////////removes I2C resources//////////////
    platform_device_unregister(morpheusbox_fsr);
    platform_device_unregister(morpheusbox_ptz);
    platform_device_unregister(morpheusbox_acc);

    i2c_unregister_device(adxl_i2c_client);
    i2c_unregister_device(fsr_a2d1115_i2c_client);
    i2c_unregister_device(ptz_a2d1115_i2c_client);
    i2c_unregister_device(tca_i2c_client);

    i2c_del_driver(&mbox_ADS1115_fsrdriver);
    i2c_del_driver(&mbox_ADS1115_ptzdriver);
    i2c_del_driver(&mbox_ADXL355_driver);
    i2c_del_driver(&mbox_TCA9548A_driver);

    pr_info("MBOX Driver - mbox_driver unloaded..\n");

}


module_init(ModuleInit);
module_exit(ModuleExit);
/* Meta Information */
MODULE_LICENSE("GPL");
MODULE_AUTHOR("Daniel Velez <jvelezg@htwg.de>; <jdvelezg@gmail.com>");
MODULE_DESCRIPTION("LKM driver for the morpheusbox FSR ADS1115 & ACC ADXL375 using a Multiplexor TCA9548A");
MODULE_INFO(intree, "Y");
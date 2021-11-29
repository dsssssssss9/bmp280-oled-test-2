input.onButtonPressed(Button.A, function () {
    OLED12864_I2C.clear()
})
input.onButtonPressed(Button.B, function () {
	
})
BMP280.Address(BMP280_I2C_ADDRESS.ADDR_0x76)
BMP280.PowerOn()
OLED12864_I2C.init()
OLED12864_I2C.clear()
basic.showIcon(IconNames.SmallDiamond)
OLED12864_I2C.String("BMP-280 Demo", 25, 0, 1)
OLED12864_I2C.hline(25, 10, 72, 1)
basic.forever(function () {
    OLED12864_I2C.String("Temp: ", 0, 3, 1)
    OLED12864_I2C.Number(BMP280.temperature(), 32, 3, 1)
    OLED12864_I2C.String(" Centigrade", 44, 3, 1)
    OLED12864_I2C.String("Pressure:  ", 0, 6, 1)
    OLED12864_I2C.Number(BMP280.pressure() / 100, 64, 6, 1)
    basic.pause(500)
})

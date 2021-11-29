input.onButtonPressed(Button.A, function () {
    basic.showString("" + (BMP280.temperature()))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(BMP280.pressure() / 100)
})
BMP280.Address(BMP280_I2C_ADDRESS.ADDR_0x76)
BMP280.PowerOn()
basic.showIcon(IconNames.SmallDiamond)
basic.forever(function () {
	
})

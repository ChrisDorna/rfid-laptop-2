input.onButtonPressed(Button.A, function () {
    serial.writeLine("aaaaa")
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("chris")
    MFRC522.write("dorna")
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
})
let dataGelezen = ""
MFRC522.Init()
motor.servo(motor.Servos.S8, 0)
basic.pause(200)
motor.servo(motor.Servos.S8, 90)
basic.pause(200)
motor.servo(motor.Servos.S8, 0)
serial.writeLine("gelukt")
basic.showLeds(`
    . . . . .
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    dataGelezen = MFRC522.read()
    serial.writeLine("ID  :" + ("" + MFRC522.getID()))
    serial.writeLine("DATA:" + dataGelezen)
    serial.writeLine("Lengte:" + dataGelezen.length)
    if (MFRC522.getID() == 874964799707) {
        serial.writeLine("HIER")
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
    }
})

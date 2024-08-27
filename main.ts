input.onButtonPressed(Button.A, function () {
    MFRC522.write("CoderDojo")
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    MFRC522.write("Dorna")
    basic.showLeds(`
        # # # # .
        . # . . #
        . # . . #
        . # . . #
        # # # # .
        `)
})
let dataGelezen = ""
MFRC522.Init()
motor.servo(motor.Servos.S8, 0)
basic.pause(200)
motor.servo(motor.Servos.S8, 90)
basic.pause(200)
motor.servo(motor.Servos.S8, 0)
serial.writeLine("We zijn gestart")
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
    serial.writeLine("DATA:" + MFRC522.read())
    serial.writeLine("Lengte:" + MFRC522.read().length)
    if (MFRC522.getID() == 874964799707) {
        serial.writeLine("HIER")
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
    }
})

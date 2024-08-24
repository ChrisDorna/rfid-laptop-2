def on_button_pressed_a():
    serial.write_line("aaaaa")
    basic.show_leds("""
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    serial.write_line("chris")
    MFRC522.write("dorna")
    basic.show_leds("""
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        """)
input.on_button_pressed(Button.B, on_button_pressed_b)

dataGelezen = ""
MFRC522.init()
motor.servo(motor.Servos.S8, 0)
basic.pause(200)
motor.servo(motor.Servos.S8, 90)
basic.pause(200)
motor.servo(motor.Servos.S8, 0)
serial.write_line("gelukt")
basic.show_leds("""
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    """)

def on_forever():
    global dataGelezen
    dataGelezen = MFRC522.read()
    serial.write_line("ID  :" + str(MFRC522.get_id()))
    serial.write_line("DATA:" + dataGelezen)
    if dataGelezen == "dorna":
        motor.servo(motor.Servos.S8, 180)
    else:
        motor.servo(motor.Servos.S8, 0)
basic.forever(on_forever)

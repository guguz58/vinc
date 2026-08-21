input.onButtonPressed(Button.A, function () {
    sag()
})
function sol () {
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P8, açı)
    basic.pause(50)
    ContinuousServo.turn_off_motor(DigitalPin.P8)
}
function yukarı () {
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P12, açı)
    basic.pause(100)
    ContinuousServo.turn_off_motor(DigitalPin.P12)
}
input.onButtonPressed(Button.B, function () {
    sol()
})
radio.onReceivedValue(function (name, value) {
    if (name == "10") {
        if (value == 1) {
            ContinuousServo.turn_off_motor(DigitalPin.P12)
        } else {
            ContinuousServo.spin_other_way_with_speed(AnalogPin.P12, açı)
        }
    }
    if (name == "11") {
        if (value == 1) {
            ContinuousServo.turn_off_motor(DigitalPin.P12)
        } else {
            ContinuousServo.spin_one_way_with_speed(AnalogPin.P12, açı)
        }
    }
    if (name == "13") {
        if (value == 1) {
            ContinuousServo.turn_off_motor(DigitalPin.P8)
        } else {
            ContinuousServo.spin_one_way_with_speed(AnalogPin.P8, açı)
        }
    }
    if (name == "12") {
        if (value == 1) {
            ContinuousServo.turn_off_motor(DigitalPin.P8)
        } else {
            ContinuousServo.spin_other_way_with_speed(AnalogPin.P8, açı)
        }
    }
    if (name == "14") {
        if (value == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            music.stopAllSounds()
        } else {
            basic.showIcon(IconNames.Yes)
            music.ringTone(175)
        }
    }
    if (name == "15") {
        if (value == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            music.stopAllSounds()
        } else {
            basic.showString("YS Robotik")
            music.ringTone(131)
            music.ringTone(147)
            music.ringTone(165)
        }
    }
    if (name == "16") {
        if (value == 1) {
            music.stopAllSounds()
        } else {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
})
function aşağı () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P12, açı)
    basic.pause(100)
    ContinuousServo.turn_off_motor(DigitalPin.P12)
}
function sag () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P8, açı)
    basic.pause(50)
    ContinuousServo.turn_off_motor(DigitalPin.P8)
}
let açı = 0
radio.setGroup(1)
radio.setTransmitPower(7)
radio.setFrequencyBand(0)
açı = 50

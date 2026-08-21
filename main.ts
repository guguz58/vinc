radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        sag()
    }
    if (receivedNumber == 9) {
        sol()
    }
    if (receivedNumber == 8) {
        yukarı()
    }
    if (receivedNumber == 7) {
        aşağı()
    }
})
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
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    aşağı()
})
input.onGesture(Gesture.ThreeG, function () {
    yukarı()
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
basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.SmallHeart)
açı = 30

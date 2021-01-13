input.onButtonPressed(Button.A, function () {
    stap += 1
})
input.onButtonPressed(Button.B, function () {
    stap += -1
})
let stap = 0
basic.showNumber(0)
basic.forever(function () {
    basic.showNumber(stap)
})

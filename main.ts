// On button A presss, pin 0 will flash on and off 4 times with 300ms pause between on and off.
input.onButtonPressed(Button.A, function () {
    // Repeat the pin on/off flashing 4 times.
    for (let index = 0; index < 4; index++) {
        // Turn on pin 0
        pins.digitalWritePin(DigitalPin.P0, 1)
        // Pause 300 ms
        basic.pause(300)
        // Turn off Pin 0
        pins.digitalWritePin(DigitalPin.P0, 0)
        // Pause 300 ms
        basic.pause(300)
    }
})
// On button A and B press, show string CSIM.
input.onButtonPressed(Button.AB, function () {
    // Show string CSIM on LEDs.
    basic.showString("CSIM")
})
// On button B press, Pin 1 will get 3 tones 
input.onButtonPressed(Button.B, function () {
    // Set pin P1 to analog pitch pin
    pins.analogSetPitchPin(AnalogPin.P1)
    // Play tone Middle C on pin 1 for 1 beat
    music.playTone(262, music.beat(BeatFraction.Whole))
    // Play tone High C on pin 1 for 1 beat
    music.playTone(523, music.beat(BeatFraction.Whole))
    // Play tone Middle C on pin 1 for 1 beat
    music.playTone(262, music.beat(BeatFraction.Whole))
})

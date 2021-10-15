let Sélecteur = 0
input.onGesture(Gesture.Shake, function () {
    Sélecteur = randint(1, 3)
    if (Sélecteur == 1) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . . # . .
            . # # # .
            `)
    } else if (Sélecteur == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (Sélecteur == 3) {
        basic.showLeds(`
            . # . . .
            # # # # .
            # # # # #
            # # # # #
            . . . . .
            `)
    }
})
basic.forever(function () {
	
})

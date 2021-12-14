namespace SpriteKind {
    export const Button = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Location == 0) {
        if (Button == 0) {
            Button = 2
            music.baDing.play()
        }
        if (Button == 1) {
            Button = 2
            music.baDing.play()
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Location == 0) {
        if (Button == 2) {
            Location = 1
            music.powerUp.play()
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Location == 0) {
        if (Button == 2) {
            Button = 1
        }
        if (Button == 0) {
            Button = 1
        }
    }
})
let Button = 0
let Location = 0
Location = 0
tiles.setTilemap(tilemap`level2`)
let StartButton = sprites.create(assets.image`Start Button0`, SpriteKind.Button)
let ExitButton = sprites.create(assets.image`Start Button`, SpriteKind.Button)
let Cursor = sprites.create(assets.image`Cursor`, SpriteKind.Player)
StartButton.setStayInScreen(true)
ExitButton.setStayInScreen(true)
ExitButton.setPosition(80, 80)
forever(function () {
    if (Location == 0) {
        scene.centerCameraAt(scene.cameraProperty(CameraProperty.X) + 1, scene.cameraProperty(CameraProperty.Y) + 1)
        StartButton.x += 1
        StartButton.y += 1
        ExitButton.x += 1
        ExitButton.y += 1
        if (140 < scene.cameraProperty(CameraProperty.X)) {
            scene.centerCameraAt(0, 0)
            StartButton.setPosition(80, 60)
            ExitButton.setPosition(80, 80)
        }
    } else {
        ExitButton.destroy()
        StartButton.destroy()
        Cursor.destroy()
    }
})
forever(function () {
    if (Button == 2) {
        Cursor.destroy()
        Cursor = sprites.create(assets.image`Cursor`, SpriteKind.Player)
        Cursor.setStayInScreen(true)
        Cursor.setPosition(StartButton.x, StartButton.y + 8)
    }
    if (Button == 0) {
        Cursor.destroy()
    }
    if (Button == 1) {
        Cursor.destroy()
        Cursor = sprites.create(assets.image`Cursor`, SpriteKind.Player)
        Cursor.setStayInScreen(true)
        Cursor.setPosition(ExitButton.x, ExitButton.y + 8)
    }
})

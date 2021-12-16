enum RadioMessage {
    message1 = 49434,
    l = 6987
}
namespace SpriteKind {
    export const Button = SpriteKind.create()
    export const title_scrren = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Location == 0) {
        if (Button2 == 0) {
            Button2 = 2
            music.baDing.play()
        }
        if (Button2 == 1) {
            Button2 = 2
            music.baDing.play()
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Location == 0) {
        if (Button2 == 2) {
            Location = 1
            music.powerUp.play()
            tiles.setTilemap(tilemap`gaymer`)
            startfinish = 1
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Location == 0) {
        if (Button2 == 2) {
            Button2 = 1
        }
        if (Button2 == 0) {
            Button2 = 1
        }
    }
})
let Button2 = 0
let Location = 0
let startfinish = 0
startfinish = 0
scene.setBackgroundColor(15)
let start_screen = sprites.create(assets.image`gayming`, SpriteKind.title_scrren)
pause(1000)
start_screen.destroy()
Location = 0
tiles.setTilemap(tilemap`level2`)
let StartButton = sprites.create(assets.image`Start Button0`, SpriteKind.Button)
let ExitButton = sprites.create(assets.image`Start Button`, SpriteKind.Button)
let Cursor = sprites.create(assets.image`Cursor`, SpriteKind.Player)
StartButton.setStayInScreen(true)
ExitButton.setStayInScreen(true)
ExitButton.setPosition(80, 80)
forever(function () {
    if (Button2 == 2) {
        Cursor.destroy()
        Cursor = sprites.create(assets.image`Cursor`, SpriteKind.Player)
        Cursor.setStayInScreen(true)
        Cursor.setPosition(StartButton.x, StartButton.y + 8)
    }
    if (Button2 == 0) {
        Cursor.destroy()
    }
    if (Button2 == 1) {
        Cursor.destroy()
        Cursor = sprites.create(assets.image`Cursor`, SpriteKind.Player)
        Cursor.setStayInScreen(true)
        Cursor.setPosition(ExitButton.x, ExitButton.y + 8)
    }
})
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
game.onUpdateInterval(100, function () {
    if (startfinish == 1) {
        music.powerDown.play()
        pause(2000)
    }
    for (let index = 0; index < 4; index++) {
        pause(100)
    }
})

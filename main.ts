enum RadioMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const Button = SpriteKind.create()
    export const title_scrren = SpriteKind.create()
    export const watch_yo_jet = SpriteKind.create()
    export const spaceship = SpriteKind.create()
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
    pressedGame1 = 1
    if (Location == 0) {
        if (Button2 == 2) {
            Location = 1
            music.powerUp.play()
        }
    }
    if (pressedGame1 == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 2 2 . . . . . 
            . . . . . . . 2 2 2 4 2 . . . . 
            . . . . 2 2 2 2 4 4 5 4 2 . . . 
            . . . . . . . 2 2 2 4 2 . . . . 
            . . . . . . . . 2 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Player_ship, 100, 0)
        pressedGame1 = 0
        gameID = 1
    }
})
sprites.onOverlap(SpriteKind.watch_yo_jet, SpriteKind.spaceship, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.warmRadial, 500)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.spaceship, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.warmRadial, 500)
    info.changeScoreBy(1)
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
let Enemy_ship: Sprite = null
let jet_ur_mom = 0
let gameID = 0
let Player_ship: Sprite = null
let projectile: Sprite = null
let pressedGame1 = 0
let Button2 = 0
let Location = 0
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
    if (jet_ur_mom == 0) {
        if (gameID == 1) {
            jet_ur_mom = 1
            tiles.setTilemap(tilemap`level9`)
            effects.starField.startScreenEffect()
            Player_ship = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . 6 . . . . . . . . . . . 
                . . . . 8 6 . . . . . . . . . . 
                . . . . c 8 6 . . . . . . . . . 
                . . . . e c 8 6 . . . . . . . . 
                . . . e c 8 7 7 6 . . . . . . . 
                . . e c 2 8 7 7 6 6 6 6 6 6 . . 
                . e c 2 4 8 8 8 8 8 9 8 8 8 8 . 
                e c 2 2 4 b 9 6 6 6 9 9 6 6 6 7 
                . e c 2 4 8 8 8 8 8 9 8 8 8 8 . 
                . . e c 2 8 7 7 6 6 6 6 6 6 . . 
                . . . e c 8 7 7 6 . . . . . . . 
                . . . . e c 8 6 . . . . . . . . 
                . . . . c 8 6 . . . . . . . . . 
                . . . . 8 6 . . . . . . . . . . 
                . . . . 6 . . . . . . . . . . . 
                `, SpriteKind.watch_yo_jet)
            controller.moveSprite(Player_ship)
            Player_ship.setStayInScreen(true)
            info.setLife(1)
        }
    }
})
forever(function () {
    if (gameID == 1) {
        for (let index = 0; index < 500; index++) {
            pause(600)
            Enemy_ship = sprites.create(img`
                . . . . . . . a a a a . . . . . . . 
                . . . . . . a a a a a a . . . . . . 
                . . . . . a 7 9 9 9 9 7 a . . . . . 
                . . . . . a 7 7 7 7 7 7 a . . . . . 
                . . . . . a 7 f 7 7 f 7 a . . . . . 
                . . . . . a 7 7 7 7 7 7 a . . . . . 
                . . . . . a 9 7 f f 7 9 a . . . . . 
                . . . a a a 9 7 7 7 7 9 a a a . . . 
                . . a 6 6 6 f f f f f f 6 6 6 a . . 
                . a 8 8 8 8 6 6 6 6 6 6 8 8 8 8 a . 
                a c c 8 8 8 8 8 6 6 8 8 8 8 8 c c a 
                . a c c c 8 8 8 8 8 8 8 8 c c c a . 
                . . a c c c c 8 8 8 8 c c c c a . . 
                . . . a a c c c c c c c c a a . . . 
                . . . . . a a c c c c a a . . . . . 
                . . . . . . . a a a a . . . . . . . 
                `, SpriteKind.spaceship)
            Enemy_ship.x = scene.screenWidth()
            Enemy_ship.vx = -20
            Enemy_ship.y = randint(10, scene.screenHeight() - 10)
        }
    } else {
    	
    }
})

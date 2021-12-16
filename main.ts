namespace SpriteKind {
    export const Button = SpriteKind.create()
    export const Ball = SpriteKind.create()
}
let Location = 0
let BallPlaying = 0
let balltime = 0
let BallHealth = 0
let Balltype = 0
let Ball: Sprite = null
let BallMoved = 0
let Ball_LeftRight = 0
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Location == 0) {
        let Button2 = 0
        if (Button2 == 2) {
            let Cursor: Sprite = null
            Location = 1
            music.powerUp.play()
            tiles.setTilemap(tilemap`level4`)
            Cursor.destroy()
            pause(1000)
            BallPlaying = 1
            balltime = 500
            BallHealth = 100
            CreateBall()
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Location == 1) {
        if (BallPlaying == 1) {
            if (Balltype == 0) {
                Ball.setPosition(37, 56)
                BallMoved = 1
            } else {
                BallHealth += -10
                scene.cameraShake(8, 40)
                music.bigCrash.play()
                if (BallHealth == 0) {
                    game.splash("you lose haha")
                    game.reset()
                }
            }
        }
    }
})
function Ball1 () {
    for (let index = 0; index < balltime; index++) {
        if (BallMoved != 1) {
            pause(2.5)
            if (Ball_LeftRight == 0) {
                Ball.x += 0.025
                Ball.y += 0.2
            } else {
                Ball.x += -0.025
                Ball.y += 0.2
            }
        } else {
            Ball.destroy(effects.spray, 30)
            music.smallCrash.play()
            scene.cameraShake(4, 40)
            balltime = balltime - 5
            pause(250)
            CreateBall()
            break;
        }
        if (balltime < 300) {
            break;
        }
    }
    if (BallMoved == 0) {
        if (balltime < 300) {
            game.splash("you win!")
        } else {
            game.splash("you lose haha")
            game.reset()
        }
    }
    return
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Location == 1) {
        if (BallPlaying == 1) {
            if (Balltype == 1) {
                Ball.setPosition(109, 56)
                BallMoved = 1
            } else {
                BallHealth += -10
                scene.cameraShake(8, 40)
                music.bigCrash.play()
                if (BallHealth == 0) {
                    game.splash("you lose haha")
                    game.reset()
                }
            }
        }
    }
})
function Ball0 () {
    for (let index = 0; index < balltime; index++) {
        if (BallMoved != 1) {
            pause(2.5)
            if (Ball_LeftRight == 0) {
                Ball.x += 0.025
                Ball.y += -0.2
            } else {
                Ball.x += -0.025
                Ball.y += -0.2
            }
        } else {
            Ball.destroy(effects.spray, 30)
            music.smallCrash.play()
            scene.cameraShake(4, 40)
            balltime = balltime - 5
            pause(250)
            CreateBall()
            break;
        }
        if (balltime < 300) {
            break;
        }
    }
    if (BallMoved == 0) {
        if (balltime < 300) {
            game.splash("you win!")
        } else {
            game.splash("you lose haha")
            game.reset()
        }
    }
    return
}
function CreateBall () {
    BallMoved = 0
    if (Location == 1) {
        if (BallPlaying == 1) {
            if (randint(0, 1) == 0) {
                Ball = sprites.create(assets.image`ball`, SpriteKind.Ball)
                animation.runImageAnimation(
                Ball,
                assets.animation`myAnim`,
                60,
                true
                )
                Ball.setBounceOnWall(true)
                Ball.setPosition(79, 122)
                Ball_LeftRight = randint(0, 1)
                Balltype = 0
                pause(100)
                Ball0()
            } else {
                Ball = sprites.create(assets.image`Blueball`, SpriteKind.Ball)
                animation.runImageAnimation(
                Ball,
                assets.animation`myAnim0`,
                60,
                true
                )
                Ball.setPosition(79, 0)
                Ball_LeftRight = randint(0, 1)
                Balltype = 1
                pause(100)
                Ball1()
            }
        }
    }
}

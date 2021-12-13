tiles.setTilemap(tilemap`level2`)
forever(function () {
    scene.centerCameraAt(scene.cameraProperty(CameraProperty.X) + 2, scene.cameraProperty(CameraProperty.Y) + 2)
})
forever(function () {
    if (140 < scene.cameraProperty(CameraProperty.X)) {
        scene.centerCameraAt(0, 0)
    }
})

const HEADSET_MODEL_PATH = "3d/headset.obj"
const BACKGROUND_COLOUR = "#0e1e22"
const HEADSET_COLOUR = "#002040"
const ROTATION_SCALE = 50000 
const MODEL_SCALE = 2.45

const BASE_X_ROTATION = 3.05
const BASE_Y_ROTATION = 3.8
const ROTATION_SPEED = 0.02



let headsetModel
let headsetTexture
let mouseX
let mouseY
let updateCounter = 10

let xRotation = BASE_X_ROTATION
let yRotation = BASE_Y_ROTATION


function preload(){
    headsetModel = loadModel(HEADSET_MODEL_PATH, true)
    headsetTexture = loadImage("img/headsetTexture.png")
}

function setup(){
    createCanvas(1200, 1200, WEBGL)
    camera(0, 0, 600, -80, 100, 0)
    strokeWeight(0.2)
    stroke(color(0, 200, 255))
}

function draw(){
    clear()
    smooth()
    // background("black")
    ambientLight(50, 50, 100)
    pointLight(0, 200, 250, -200, 800, -500)

    texture(headsetTexture)
    specularMaterial(color(HEADSET_COLOUR))
    let scaleAmount = MODEL_SCALE
    if(window.innerWidth < 600){
        scaleAmount /= 3
    }
    else if(window.innerWidth < 800){
        scaleAmount /= 2
    }else if(window.innerWidth < 1500) scaleAmount /= 1.5

    scale(scaleAmount)
    const rotationScale = ROTATION_SCALE * window.innerWidth / 2560

    const targetXRotation = BASE_X_ROTATION - mouseY / rotationScale * PI
    const targetYRotation = BASE_Y_ROTATION - mouseX / rotationScale * PI
    if(targetXRotation && targetYRotation){
        const xDelta = targetXRotation - xRotation
        const yDelta = targetYRotation - yRotation
        
        xRotation += xDelta * ROTATION_SPEED
        yRotation += yDelta * ROTATION_SPEED 
    }

    rotateX(xRotation)
    rotateY(yRotation)
    model(headsetModel)
}

document.addEventListener("mousemove", e => {
    if(updateCounter == 0){
        updateCounter = 10
        mouseX = e.pageX
        mouseY = e.pageY
    }
    else updateCounter--
})

document.addEventListener("mousedown", e => {
    mouseX = e.pageX
    mouseY = e.pageY
})
const HEADSET_MODEL_PATH = "3d/headset.obj"
const BACKGROUND_COLOUR = "#0e1e22"
const HEADSET_COLOUR = "#002040"
const ROTATION_SCALE = 40000
const MODEL_SCALE = 2.6

const BASE_X_ROTATION = 3.05
const BASE_Y_ROTATION = 3.8
const ROTATION_SPEED = 0.1


let headsetModel
let headsetTexture
let mouseX
let mouseY

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
    // background("black")
    ambientLight(50, 50, 100)
    pointLight(0, 200, 250, -200, 800, -500)

    texture(headsetTexture)
    specularMaterial(color(HEADSET_COLOUR))

    scale(MODEL_SCALE)

    const targetXRotation = BASE_X_ROTATION + mouseY / ROTATION_SCALE * PI
    const targetYRotation = BASE_Y_ROTATION + mouseX / ROTATION_SCALE * PI
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
    mouseX = e.pageX
    mouseY = e.pageY
})
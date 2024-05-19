const box = document.getElementById("canvas")
const context = box.getContext("2d")


//cube stats
let x = 50
let y = 0
let vx = 0
let vy = 0
let kg = 0
let grounded = false


//cube update function
function Update() {
    box.width = window.innerWidth
    box.height = window.innerHeight
    context.clearRect(0, 0, box.width, box.height)
    //updating the functions
    Gravity()
    Collision()
    //setting kilograms
    kg = 1
    x += vx
    y += vy
    context.fillRect(x, y, 100, 100)
    requestAnimationFrame(Update)
}

Update()


//functions

//collion
function Collision() {
    if (y >= box.height - 99) {
        //solves some gliches
        if (vy > 0 && vy < 1 +kg) {vy = 0}
        grounded = true
        //bouncing. if cube is harder, less bounc
        vy *= -0.5 / kg
        y = innerHeight - 100
    }
    //right wall
    if (x >= box.width - 100) {
        vx *= -0.9 / kg
    }
    //left wall
    if (x <= 0) {
        vx *= -0.7 / kg
    }
    //top
    if (y < 0) {
        vy = 0 + 100
    }
}

//gravity
function Gravity() {
    if (y <= box.height - 101) {
        vy += 1 * kg
    }
}

//movement
document.addEventListener("keydown", function(event) {
    if (event.key === "a" || event.key === "A") {vx = -10}
    if (event.key === "d" || event.key === "D") {vx = 10}
    //check if grounded. if cube is harder, less bounc
    if (grounded) {if (event.key === " ") {vy = -10, grounded = false}}
})

document.addEventListener("keyup", function(event) {
    if (event.key === "a" || event.key === "A") {vx = 0}
    if (event.key === "d" || event.key === "D") {vx = 0}
})
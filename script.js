const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const skyImg = new Image()
sky.src = `./images/sky.jpg`

//Three objects that we can manipulate
let sky = { x: 0, y: 0, w: canvas.width, h: canvas.height }

let ship = { x: (canvas.width / 2) - (40), y: canvas.height - 140, w: 80, h: 140 }



//Need to wait until image loads before drawing.  
skyImg.onload = function () {
    ctx.drawImage(skyImg, sky.x, sky.y, sky.w, sky.h)
}

const shipImg = new Image()
shipImg.src = `./images/ship.jpg`

//Need to wait until image loads before drawing.  
shipImg.onload = function () {
    ctx.shipImg(shipImg, ship.x, ship.y, ship.w, ship.h)
}
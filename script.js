const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const skyImg = new Image();
skyImg.src = `./images/sky.jpg`;

const shipImg = new Image();
shipImg.src = `./images/enterprise.png`;

canvas.width = window.innerWidth * .98;
canvas.height = canvas.width;

let sky = {
    x: 0,
    y: 0,
    w: canvas.width,
    h: canvas.height
}

class Ship {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}
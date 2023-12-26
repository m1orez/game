let ctx, canvasWidth, canvasHeight;
const fps = 60;
const interval = 1000 / fps;
canvasWidth = 800;
canvasHeight = 600;
angryburgers = new Array();
keyObjects = new Array(255);

for (i = 0; i< keyObjects.length; i++) {
    keyObjects[i] = false;
}
document.addEventListener("keydown", keyDownHandler, false);
function keyDownHandler(event) {
    keyObjects[event.keyCode] = true;
}

document.addEventListener("keyup", keyUpHandler, false);
function keyUpHandler(event) {
    keyObjects[event.keyCode] = false;
}


for (i = 0; i < 5; i++) {
    let hamburger = new Sprite((Math.floor(Math.random() * 750)), 0, 0, (Math.floor(Math.random() * 10) + 1), 50, 50, "./img/angryBurger.png");
    angryburgers.push(hamburger);
}
function start() {
    let volgende;
    (function gameloop(timestamp){
        if (volgende === undefined){
            volgende = timestamp;
        }
        const verschil = timestamp - volgende;
        if (verschil > interval) {
            volgende = timestamp = (verschil % interval);
            update();
            draw();
        }
        requestAnimationFrame(gameloop);
    })();
}

function init() {
    const canvas = document.getElementById("myCanvas");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    sprite1 = new Sprite(300, 400, 0, 0, 200,140, "./img/cat.png");
    start()
}

function update() {
    if (keyObjects[39] == true || keyObjects[68] == true) {
        if (sprite1.X <= 630) {
            sprite1.rotation += 0.1;
            sprite1.X += 5;
        }
    } else if (keyObjects[37] == true || keyObjects[65] == true) {
        if (sprite1.X > -20) {
            sprite1.rotation -= 0.1;
            sprite1.X -= 5;
        }
    }
    sprite1.update();
    for (i = 0; i < 5; i++) {
        angryburgers[i].update();
        angryburgers[i].rotation += 0.07;
        if (angryburgers[i].Y > canvasHeight) {
            angryburgers[i].Y = 0;
            angryburgers[i].X = Math.floor(Math.random() * 750);
            angryburgers[i].speedY = Math.floor(Math.random() * 10) + 1;
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    sprite1.draw();
    for (i = 0; i < 5; i++) {
        angryburgers[i].draw();
    }
}
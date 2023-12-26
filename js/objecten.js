class Sprite {
    constructor(posX, posY, speedX, speedY, width, height, url) {
        this.X = posX;
        this.Y = posY;
        this.speedX = speedX;
        this.speedY = speedY;
        this.width = width;
        this.height = height;
        this.url = url;
        this.img = new Image();
        this.rotation = 0;
        this.alive = true;
        if (typeof(url) != "undefined") {
            this.img.src = url;
        } else {
            console.warn("geen url opgegeven");
        }
    }

    update() {
        this.X += this.speedX;
        this.Y += this.speedY;

        if (this.X > canvasWidth - this.width || this.X < 0) {
            this.speedX = -this.speedX;
        }
    }

    draw() {
        ctx.save();
        ctx.translate(this.X + this.width / 2, this.Y + this.height / 2);
        if (this.speedX < 0) {
            ctx.scale(-1, 1);
        }
        ctx.rotate(this.rotation);
        ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height);
        ctx.restore();
    }
}
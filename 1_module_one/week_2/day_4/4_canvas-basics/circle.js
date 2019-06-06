// inspiration : https://gist.github.com/getify/2926699

/**
 * @todo implement collision detection https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
 */
export default class Circle {

    constructor(ctx) {
        if (!ctx) throw new Error("sorry, you need to specify ctx args.");
        this.ctx = ctx;
        this.xMove = Math.random() > .5 ? "right" : "left";
        this.yMove = Math.random() > .5 ? "down" : "up";
        this.r = this.getRandomRadius(10, 40);
        this.minX = this.r * 1.5;
        this.maxX = this.ctx.canvas.width - this.r;
        this.minY = this.r * 2;
        this.maxY = this.ctx.canvas.height - (this.r * 2.2);
        this.x = this.getRandomX();
        this.y = this.getRandomX();
        this.bg = this.getRandomBackground();
        // console.log("r", this.r)
        // console.log("minX", this.minX)
        // console.log("maxX", this.maxX)
        // console.log("minY", this.minY)
        // console.log("maxY", this.maxY)
        this.draw();

        window.setTimeout(() => this.move(), 500);
    }

    getRandomX = () => Math.floor(Math.random() * (this.maxX - this.minX) + this.minX);

    getRandomY = () => Math.floor(Math.random() * (this.maxY - this.minY) - this.minY);

    getRandomRadius = (min, max) => Math.floor(Math.random() * (max - min) + min);

    getRandomBackground() {
        var color = '#', letters = '0123456789ABCDEF';
        for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
        return color;
    }

    draw() {
        this.ctx.fillStyle = this.bg;
        this.ctx.beginPath(); // mandatory. let's start to draw our circle
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); // radians from 0 for a full circle
        //  above args => x  x  radius radian-start radian-end
        this.ctx.fill();
        this.ctx.closePath();
    }

    move = () => {
        const previous = { x: this.x, y: this.y }
        const moveRate = Math.floor(Math.random() * (20 - 3) + 3); // 7: max , 3: min
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(previous.x, previous.y, this.r + 1, 0, 2 * Math.PI, true);
        this.ctx.clip();
        this.ctx.clearRect(previous.x - this.r, previous.y - this.r, this.r * 2, this.r * 2);
        this.ctx.restore();

        if (this.x - moveRate <= this.r || this.x + moveRate >= this.ctx.canvas.width - this.r) {
            this.xMove = this.xMove === "right" ? "left" : "right";
        }

        if (this.y - moveRate <= this.r || this.y + moveRate >= this.ctx.canvas.height - this.r) {
            this.yMove = this.yMove === "down" ? "up" : "down";
        }
        console.log()

        this.x = this.xMove === "right" ? this.x + moveRate : this.x - moveRate;
        this.y = this.yMove === "down" ? this.y + moveRate : this.y - moveRate;

        // console.log(this.x, this.y);

        this.draw();

        window.requestAnimationFrame(this.move);
    }
}

export default class Player { // export is mandatory
    // export allows you to "import" the script in another file
    constructor(context) {
        if (!context) throw new Error("sorry, you need to specify context arg");
        this.ctx = context;
        this.x = 0;
        this.y = 0;
        this.w = 20;
        this.h = 20;
        this.bg = "dodgerblue"; 
        this.draw(); // you can execute function(s) in the constructor
        this.listenKeys(); // for all actions that MUST be launched when the object is built
    }

    draw() {
        this.ctx.fillStyle = this.bg;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    move(dir) {
        const previous = {x: this.x, y: this.y}; // capture previous coordinate before redraw
        const moveRate = 20; // movement speed

        if (dir === "up" && this.y - 1 >= 0) { // if your inside the visible part of the canvas...
            this.y -= moveRate; // go up
        } else if (dir === "down" && this.y + 1 <= this.ctx.canvas.height) {
            this.y += moveRate; // go down
        } else if (dir === "left" && this.x - 1 >= 0) {
            this.x -= moveRate; // go left
        } else if (this.x + 1 <= this.ctx.canvas.width) {
            this.x += moveRate; // go right
        }
        // console.log(previous, this.x, this.y);
        this.ctx.clearRect(previous.x, previous.y, this.h, this.w); // erase the square
        this.draw(); // let's call draw again ... the square will be redraw at it's updated position
    }

    listenKeys() {
        const allowedKeys = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
        window.addEventListener("keydown", (evt) => {
            if (allowedKeys.includes(evt.key)) { // if the key pressed is containded in the array
                let direction = evt.key.split("Arrow").pop().toLocaleLowerCase();
                // little work on string ... just to provide a meaningfull info ...
                // lets keep only "up" "right" "down" "left"
                // ... as direction infos for the next function call
                this.move(direction);
            }
        })
    }
}
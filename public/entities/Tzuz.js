import { GameBoard } from "../graphics/GameBoard.js";
import { NubMath } from "../engine/Math.js";
export class Tzuz {
    imgs;
    imgIndex;
    x;
    y;
    width;
    height;
    // For the animation
    isClicked;
    MAX_SHRINK = 0.925;
    shrink;
    deltaTime;
    constructor() {
        this.imgs = Array.from(document.getElementsByClassName("img-tzuz"));
        this.imgIndex = 0;
        this.setDimensions();
        this.isClicked = false;
        this.shrink = 1.0;
        this.deltaTime = 0;
    }
    setDimensions() {
        const boardWidth = GameBoard.getWidth();
        const boardHeight = GameBoard.getHeight();
        const img = this.imgs[this.imgIndex];
        this.width = img.width;
        this.height = img.height;
        /*while (this.width > boardWidth || this.height > boardHeight) {
            this.width /= 2;
            this.height /= 2;
        }*/
        this.x = (boardWidth - this.width) / 2;
        this.y = (boardHeight - this.height) / 2;
    }
    render() {
        const x = this.x + ((1 - this.shrink) * this.width) / 2;
        const y = this.y + ((1 - this.shrink) * this.height) / 2;
        const w = this.width * this.shrink;
        const h = this.height * this.shrink;
        GameBoard.drawImage(this.imgs[this.imgIndex], x, y, w, h);
    }
    update() {
        if (this.shrink === 1 || this.shrink === this.MAX_SHRINK)
            this.deltaTime = 3;
        if (this.isClicked) {
            this.shrink -= 0.001 * this.deltaTime;
        }
        else {
            this.shrink += 0.001 * this.deltaTime;
        }
        this.deltaTime += 0.75;
        this.shrink = NubMath.clamp(this.shrink, this.MAX_SHRINK, 1);
    }
    press() {
        this.isClicked = true;
    }
    release() {
        this.isClicked = false;
        if (Math.random() * 100 > 85) {
            this.imgIndex = (this.imgIndex + 1) % this.imgs.length;
            this.setDimensions();
        }
    }
}

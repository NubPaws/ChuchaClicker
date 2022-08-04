export class Box {
    x;
    y;
    w;
    h;
    constructor(x = 0, y = 0, w = 0, h = 0) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    getX() { return this.x; }
    getY() { return this.y; }
    getWidth() { return this.w; }
    getHeight() { return this.h; }
    scale(s) {
        return new Box(this.x + (1 - s) * this.w / 2, this.y + (1 - s) * this.h / 2, this.w * s, this.h * s);
    }
}

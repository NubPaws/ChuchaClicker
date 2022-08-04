export var GameBoard;
(function (GameBoard) {
    let canvas;
    let ctx;
    let width;
    let height;
    function init(canvasID) {
        canvas = document.getElementById(canvasID);
        ctx = canvas.getContext("2d");
        width = canvas.width;
        height = canvas.height;
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "low";
    }
    GameBoard.init = init;
    function fillRect(x, y, w, h, color) {
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.fillStyle = color;
        ctx.fill();
    }
    GameBoard.fillRect = fillRect;
    function drawRect(x, y, w, h, color, stroke = -1) {
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.strokeStyle = color;
        if (stroke > -1)
            ctx.lineWidth = stroke;
        ctx.stroke();
    }
    GameBoard.drawRect = drawRect;
    function drawImage(img, x, y, w, h) {
        ctx.drawImage(img, x, y, w, h);
    }
    GameBoard.drawImage = drawImage;
    function fillBackground(color) {
        this.fillRect(0, 0, width, height, color);
    }
    GameBoard.fillBackground = fillBackground;
    function imgBackground(img) {
        this.drawImage(img, 0, 0, width, height);
    }
    GameBoard.imgBackground = imgBackground;
    function isVisible(x, y, w, h) {
        return ((0 <= x && x <= width)
            || (0 <= x + w && x + w <= width))
            && ((0 <= y && y <= height)
                || (0 <= y + h && y + h <= height));
    }
    GameBoard.isVisible = isVisible;
    function getCanvas() { return canvas; }
    GameBoard.getCanvas = getCanvas;
    function getCtx() { return ctx; }
    GameBoard.getCtx = getCtx;
    function getWidth() { return width; }
    GameBoard.getWidth = getWidth;
    function getHeight() { return height; }
    GameBoard.getHeight = getHeight;
})(GameBoard || (GameBoard = {}));

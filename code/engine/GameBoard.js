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
    }
    GameBoard.init = init;
})(GameBoard || (GameBoard = {}));

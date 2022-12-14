import { GameLoop } from "./engine/GameLoop.js";
import { GameBoard } from "./graphics/GameBoard.js";
import { Color } from "./graphics/Color.js";
import { Keys } from "./engine/Input.js";
import { Tzuz } from "./entities/Tzuz.js";
import { Game } from "./game/Game.js";
import { UI } from "./game/UI.js";
import { AudioPlayer } from "./engine/AudioPlayer.js";
function update() {
    tzuz.update();
    UI.update();
    let updateRate = GameLoop.getUpdateRate();
    Game.score += (Game.scratchingPost * Game.SCRATCHING_POST_BOOST) / updateRate;
    Game.score += (Game.sticks * Game.STICKS_BOOST) / updateRate;
    // Put this at the end
    Keys.update();
}
function render() {
    GameBoard.fillBackground(Color.White);
    tzuz.render();
}
function mouseDownOnTzuz(event) {
    tzuz.press();
    tzuz.isClicked = true;
    Game.score += Game.clickPower + (Game.clickPower - 1) * 0.1;
    if (Game.codeEntered)
        Game.score += Game.clickPower * 1000;
    if (purring.isPending() || purring.isStopped())
        purring.play();
}
function mouseUpOnTzuz(event) {
    tzuz.release();
    tzuz.isClicked = false;
}
GameBoard.init("drawing-board");
Keys.init();
Game.init();
UI.init();
const tzuz = new Tzuz();
const purring = new AudioPlayer("../res/sfx/tracktor.mp3", 1);
GameBoard.getCanvas().addEventListener("mousedown", mouseDownOnTzuz);
GameBoard.getCanvas().addEventListener("mouseup", mouseUpOnTzuz);
GameBoard.getCanvas().addEventListener("touchstart", mouseDownOnTzuz);
GameBoard.getCanvas().addEventListener("touchend", mouseUpOnTzuz);
GameLoop.init(update, render);
GameLoop.start();

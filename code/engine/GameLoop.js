export var GameLoop;
(function (GameLoop) {
    let updateRate = 60;
    let msToUpdate = 1000.0 / updateRate;
    let update;
    let render;
    let deltaTime;
    let lastTime;
    let nowTime;
    let ups;
    let fps;
    let fpsTimer;
    GameLoop.debug = false;
    function init(updateFunc, renderFunc) {
        update = updateFunc;
        render = renderFunc;
        deltaTime = 0;
        lastTime = 0;
        ups = fps = 0;
        fpsTimer = 0;
    }
    GameLoop.init = init;
    function loop(timestamp) {
        nowTime = timestamp;
        deltaTime += (nowTime - lastTime) / msToUpdate;
        lastTime = nowTime;
        while (deltaTime >= 1) {
            update();
            ups++;
            deltaTime--;
        }
        render();
        fps++;
        if (timestamp - fpsTimer > 1000) {
            fpsTimer = timestamp;
            if (GameLoop.debug)
                console.log(`fps: ${fps} | ups: ${ups}`);
            fps = ups = 0;
        }
        window.requestAnimationFrame(loop);
    }
    function start() {
        window.requestAnimationFrame(loop);
    }
    GameLoop.start = start;
    function getUpdateRate() { return updateRate; }
    GameLoop.getUpdateRate = getUpdateRate;
    function setUpdateRate(upRate) {
        updateRate = upRate;
        msToUpdate = 1000.0 / updateRate;
    }
    GameLoop.setUpdateRate = setUpdateRate;
})(GameLoop || (GameLoop = {}));

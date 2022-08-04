export var Keys;
(function (Keys) {
    const keyCount = 16;
    const keys = new Array(length).fill(false);
    const prevKeys = new Array(length).fill(false);
    let Code;
    (function (Code) {
        Code[Code["W"] = 0] = "W";
        Code[Code["A"] = 1] = "A";
        Code[Code["S"] = 2] = "S";
        Code[Code["D"] = 3] = "D";
        Code[Code["Space"] = 4] = "Space";
        Code[Code["Enter"] = 5] = "Enter";
        Code[Code["Ctrl"] = 6] = "Ctrl";
        Code[Code["Shift"] = 7] = "Shift";
        Code[Code["Esc"] = 8] = "Esc";
        Code[Code["G"] = 9] = "G";
    })(Code = Keys.Code || (Keys.Code = {}));
    function isPressed(key) { return keys[key]; }
    Keys.isPressed = isPressed;
    function isClicked(key) { return keys[key] && !prevKeys[key]; }
    Keys.isClicked = isClicked;
    function listener(event) {
        if (event.type === "keypressed")
            return;
        const pressed = (event.type === "keydown");
        switch (event.key) {
            case "w":
                keys[Code.W] = pressed;
                break;
            case "a":
                keys[Code.A] = pressed;
                break;
            case "s":
                keys[Code.S] = pressed;
                break;
            case "d":
                keys[Code.D] = pressed;
                break;
            case " ":
                keys[Code.Space] = pressed;
                break;
            case "Enter":
                keys[Code.Enter] = pressed;
                break;
            case "Control":
                keys[Code.Ctrl] = pressed;
                break;
            case "Shift":
                keys[Code.Shift] = pressed;
                break;
            case "Escape":
                keys[Code.Esc] = pressed;
                break;
            case "g":
                keys[Code.G] = pressed;
                break;
            default: break;
        }
    }
    function init() {
        document.addEventListener("keyup", listener);
        document.addEventListener("keydown", listener);
    }
    Keys.init = init;
    function update() {
        for (let i = 0; i < keyCount; i++)
            prevKeys[i] = keys[i];
    }
    Keys.update = update;
})(Keys || (Keys = {}));

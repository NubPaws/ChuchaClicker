export var Game;
(function (Game) {
    Game.codeEntered = false;
    let Item;
    (function (Item) {
        Item[Item["ClickPower"] = 0] = "ClickPower";
        Item[Item["ScratchingPost"] = 1] = "ScratchingPost";
        Item[Item["Sticks"] = 2] = "Sticks";
    })(Item = Game.Item || (Game.Item = {}));
    Game.score = 0;
    Game.clickPower = 1;
    Game.scratchingPost = 0;
    Game.sticks = 0;
    Game.SCRATCHING_POST_BOOST = 20;
    Game.STICKS_BOOST = 10;
    function init() {
        initListeners();
        if (document.cookie === "")
            return;
        Game.score = parseInt(getCookie("score"));
        Game.clickPower = parseInt(getCookie("clickPower"));
        Game.scratchingPost = parseInt(getCookie("scratchingPost"));
        Game.sticks = parseInt(getCookie("sticks"));
    }
    Game.init = init;
    function initListeners() {
        document.getElementById("button-save").onclick = save;
        document.getElementById("button-clear").onclick = clearData;
        document.getElementById("button-code").onclick = () => {
            const code = prompt("Enter special code:");
            if (code === "1808") {
                Game.codeEntered = true;
                alert("Happy birthday!");
            }
            else if (code === "2012") {
                Game.codeEntered = false;
                alert("Birthday ended.");
            }
        };
        document.getElementById("upgrade-better-pets-buy").onclick = buyBetterPets;
        document.getElementById("upgrade-scratching-post-buy").onclick = buyScratchingPost;
        document.getElementById("upgrade-sticks-buy").onclick = buySticks;
    }
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2)
            return parts.pop().split(";").shift();
        return "";
    }
    function save() {
        const nextYear = new Date();
        nextYear.setFullYear(nextYear.getFullYear() + 1);
        const expireDate = `expires=${nextYear.toUTCString()}`;
        document.cookie = `score=${Game.score}; ${expireDate}`;
        document.cookie = `clickPower=${Game.clickPower}; ${expireDate}`;
        document.cookie = `scratchingPost=${Game.scratchingPost}; ${expireDate}`;
        document.cookie = `sticks=${Game.sticks}; ${expireDate}`;
    }
    Game.save = save;
    function clearData() {
        let cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            let eqPos = cookie.indexOf("=");
            let name = eqPos == 1 ? 1 : eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
        }
        document.location.reload();
    }
    Game.clearData = clearData;
    function buyBetterPets() {
        Game.score -= calcCost(Item.ClickPower);
        Game.clickPower++;
    }
    function buyScratchingPost() {
        Game.score -= calcCost(Item.ScratchingPost);
        Game.scratchingPost++;
    }
    function buySticks() {
        Game.score -= calcCost(Item.Sticks);
        Game.sticks++;
    }
    function calcCost(item) {
        switch (item) {
            case Item.ClickPower:
                return 10 * (Game.clickPower * 1.1);
            case Item.ScratchingPost:
                return 50 * (Game.scratchingPost * 1.7 + 1);
            case Item.Sticks:
                return 25 * (Game.sticks * 1.3 + 1);
            default:
                return 10;
        }
    }
    Game.calcCost = calcCost;
})(Game || (Game = {}));

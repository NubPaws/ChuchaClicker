import { Game } from "./Game.js";
export var UI;
(function (UI) {
    let scoreText;
    let petsClickText;
    let petsSecText;
    // Upgrades variables
    let betterPetsCost;
    let betterPetsOwned;
    let betterPetsButton;
    let scratchingPostCost;
    let scratchingPostOwned;
    let scratchingPostButton;
    let sticksCost;
    let sticksOwned;
    let sticksButton;
    function init() {
        const getElm = (id) => { return document.getElementById(id); };
        scoreText = getElm("score-number");
        petsClickText = getElm("score-click-number");
        petsSecText = getElm("score-second-number");
        betterPetsCost = getElm("upgrade-better-pets-cost");
        betterPetsOwned = getElm("upgrade-better-pets-owned");
        betterPetsButton = getElm("upgrade-better-pets-buy");
        scratchingPostCost = getElm("upgrade-scratching-post-cost");
        scratchingPostOwned = getElm("upgrade-scratching-post-owned");
        scratchingPostButton = getElm("upgrade-scratching-post-buy");
        sticksCost = getElm("upgrade-sticks-cost");
        sticksOwned = getElm("upgrade-sticks-owned");
        sticksButton = getElm("upgrade-sticks-buy");
    }
    UI.init = init;
    function update() {
        scoreText.innerHTML = `${Game.score.toFixed(2)}`;
        petsClickText.innerHTML = `${Game.clickPower + (Game.clickPower - 1) * 0.1}`;
        petsSecText.innerHTML =
            `${Game.scratchingPost * Game.SCRATCHING_POST_BOOST + Game.sticks * Game.STICKS_BOOST}`;
        let cost;
        cost = Game.calcCost(Game.Item.ClickPower);
        betterPetsCost.innerHTML = `${cost.toFixed(2)}`;
        betterPetsOwned.innerHTML = `${Game.clickPower}`;
        betterPetsButton.disabled = cost > Game.score;
        cost = Game.calcCost(Game.Item.ScratchingPost);
        scratchingPostCost.innerHTML = `${cost.toFixed(2)}`;
        scratchingPostOwned.innerHTML = `${Game.scratchingPost}`;
        scratchingPostButton.disabled = cost > Game.score;
        cost = Game.calcCost(Game.Item.Sticks);
        sticksCost.innerHTML = `${cost.toFixed(2)}`;
        sticksOwned.innerHTML = `${Game.sticks}`;
        sticksButton.disabled = cost > Game.score;
    }
    UI.update = update;
})(UI || (UI = {}));

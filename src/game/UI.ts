import { Game } from "./Game.js";

type Span = HTMLSpanElement;
type Button = HTMLButtonElement;

export namespace UI {
	
	let scoreText: Span;
	let petsClickText: Span;
	let petsSecText: Span;
	
	// Upgrades variables
	let betterPetsCost: Span;
	let betterPetsOwned: Span;
	let betterPetsButton: Button;
	
	let scratchingPostCost: Span;
	let scratchingPostOwned: Span;
	let scratchingPostButton: Button;
	
	let sticksCost: Span;
	let sticksOwned: Span;
	let sticksButton: Button;
	
	export function init() {
		const getElm = (id: string) => { return document.getElementById(id); };
		
		scoreText = getElm("score-number") as Span;
		petsClickText = getElm("score-click-number") as Span;
		petsSecText = getElm("score-second-number") as Span;
		
		betterPetsCost = getElm("upgrade-better-pets-cost") as Span;
		betterPetsOwned = getElm("upgrade-better-pets-owned") as Span;
		betterPetsButton = getElm("upgrade-better-pets-buy") as Button;
		
		scratchingPostCost = getElm("upgrade-scratching-post-cost") as Span;
		scratchingPostOwned = getElm("upgrade-scratching-post-owned") as Span;
		scratchingPostButton = getElm("upgrade-scratching-post-buy") as Button;
		
		sticksCost = getElm("upgrade-sticks-cost") as Span;
		sticksOwned = getElm("upgrade-sticks-owned") as Span;
		sticksButton = getElm("upgrade-sticks-buy") as Button;
	}
	
	export function update() {
		scoreText.innerHTML = `${Game.score.toFixed(2)}`;
		petsClickText.innerHTML = `${Game.clickPower + (Game.clickPower - 1) * 0.1}`;
		petsSecText.innerHTML =
			`${Game.scratchingPost * Game.SCRATCHING_POST_BOOST + Game.sticks * Game.STICKS_BOOST}`;
		
		let cost: number;
		
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
	
}

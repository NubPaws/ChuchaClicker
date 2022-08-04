
export namespace Game {
	
	export let codeEntered = false;
	
	export enum Item {ClickPower, ScratchingPost, Sticks}
	
	export let score = 0;
	
	export let clickPower = 1;
	export let scratchingPost = 0;
	export let sticks = 0;
	
	export const SCRATCHING_POST_BOOST = 20;
	export const STICKS_BOOST = 10;
	
	export function init() {
		initListeners();
		
		if (document.cookie === "")
			return;
		
		score = parseInt(getCookie("score"));
		clickPower = parseInt(getCookie("clickPower"));
		scratchingPost = parseInt(getCookie("scratchingPost"));
		sticks = parseInt(getCookie("sticks"));
	}
	
	function initListeners() {
		document.getElementById("button-save").onclick = save;
		document.getElementById("button-clear").onclick = clearData;
		document.getElementById("button-code").onclick = () => {
			const code = prompt("Enter special code:");
			if (code === "1808") {
				codeEntered = true;
				alert("Happy birthday!");
			} else if (code === "2012") {
				codeEntered = false;
				alert("Birthday ended.");
			}
		};
		
		document.getElementById("upgrade-better-pets-buy").onclick = buyBetterPets;
		document.getElementById("upgrade-scratching-post-buy").onclick = buyScratchingPost;
		document.getElementById("upgrade-sticks-buy").onclick = buySticks;
		
	}
	
	function getCookie(name: string): string {
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${name}=`);
		if (parts.length === 2)
			return parts.pop().split(";").shift();
		return "";
	}
	
	export function save() {
		const nextYear = new Date();
		nextYear.setFullYear(nextYear.getFullYear() + 1);
		const expireDate = `expires=${nextYear.toUTCString()}`;
		
		document.cookie = `score=${score}; ${expireDate}`;
		document.cookie = `clickPower=${clickPower}; ${expireDate}`;
		document.cookie = `scratchingPost=${scratchingPost}; ${expireDate}`;
		document.cookie = `sticks=${sticks}; ${expireDate}`;
	}
	
	export function clearData() {
		let cookies = document.cookie.split(";");
		
		for (let i = 0; i < cookies.length; i++) {
			let cookie = cookies[i];
			let eqPos = cookie.indexOf("=");
			let name = eqPos == 1 ? 1 : eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
			document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
		}
		
		document.location.reload();
	}
	
	function buyBetterPets() {
		score -= calcCost(Item.ClickPower);
		clickPower++;
	}
	
	function buyScratchingPost() {
		score -= calcCost(Item.ScratchingPost);
		scratchingPost++;
	}
	
	function buySticks() {
		score -= calcCost(Item.Sticks);
		sticks++;
	}
	
	export function calcCost(item: Item): number {
		switch (item) {
			case Item.ClickPower:
				return 10 * (clickPower * 1.1);
			case Item.ScratchingPost:
				return 50 * (scratchingPost * 1.7 + 1);
			case Item.Sticks:
				return 25 * (sticks * 1.3 + 1);
			default:
				return 10;
		}
	}
	
}

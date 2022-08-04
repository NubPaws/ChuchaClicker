
export namespace Keys {
	
	const keyCount = 16;
	const keys: Array<boolean> = new Array(length).fill(false);
	const prevKeys: Array<boolean> = new Array(length).fill(false);
	
	export enum Code {
		W, A, S, D, Space, Enter, Ctrl, Shift, Esc, G
	}
	
	export function isPressed(key: Code): boolean { return keys[key]; }
	export function isClicked(key: Code): boolean { return keys[key] && !prevKeys[key]; }
	
	function listener(event: KeyboardEvent) {
		if (event.type === "keypressed")
			return;
		const pressed = (event.type === "keydown");
		switch (event.key) {
			case "w":		keys[Code.W]		= pressed; break;
			case "a":		keys[Code.A]		= pressed; break;
			case "s":		keys[Code.S]		= pressed; break;
			case "d":		keys[Code.D]		= pressed; break;
			case " ":		keys[Code.Space]	= pressed; break;
			case "Enter":	keys[Code.Enter]	= pressed; break;
			case "Control":	keys[Code.Ctrl]		= pressed; break;
			case "Shift":	keys[Code.Shift]	= pressed; break;
			case "Escape":	keys[Code.Esc]		= pressed; break;
			case "g":		keys[Code.G]		= pressed; break;
			default: break;
		}
	}
	
	export function init() {
		document.addEventListener("keyup", listener);
		document.addEventListener("keydown", listener);
	}
	
	export function update() {
		for (let i = 0; i < keyCount; i++)
			prevKeys[i] = keys[i];
	}
	
}

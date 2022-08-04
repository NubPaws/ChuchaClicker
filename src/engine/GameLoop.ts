
export namespace GameLoop {
	
	let updateRate = 60;
	let msToUpdate = 1000.0 / updateRate;
	
	let update: () => void;
	let render: () => void;
	
	let deltaTime: number;
	let lastTime: number;
	let nowTime: number;
	let ups: number;
	let fps: number;
	let fpsTimer: number;
	
	export let debug = false;
	
	export function init(updateFunc: () => void, renderFunc: () => void) {
		update = updateFunc;
		render = renderFunc;
		
		deltaTime = 0;
		lastTime = 0;
		ups = fps = 0;
		fpsTimer = 0;
	}
	
	function loop(timestamp: number) {
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
			if (debug)
				console.log(`fps: ${fps} | ups: ${ups}`);
			fps = ups = 0;
		}
		
		window.requestAnimationFrame(loop);
	}
	
	export function start() {
		window.requestAnimationFrame(loop);
	}
	
	export function getUpdateRate(): number { return updateRate; }
	
	export function setUpdateRate(upRate: number) {
		updateRate = upRate;
		msToUpdate = 1000.0 / updateRate;
	}
	
}

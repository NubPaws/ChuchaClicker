import { Image } from "../engine/Types.js";
import { GameBoard } from "../graphics/GameBoard.js";
import { NubMath } from "../engine/Math.js";

export class Tzuz {
	
	private imgs: Image[];
	private imgIndex: number;
	
	private x: number;
	private y: number;
	private width: number;
	private height: number;
	
	// For the animation
	public isClicked: boolean;
	
	private readonly MAX_SHRINK = 0.925;
	private shrink: number;
	private deltaTime: number;
	
	constructor() {
		this.imgs = Array.from(document.getElementsByClassName("img-tzuz")) as Image[];
		this.imgIndex = 0;
		
		this.setDimensions();
		
		this.isClicked = false;
		
		this.shrink = 1.0;
		this.deltaTime = 0;
	}
	
	private setDimensions() {
		const boardWidth = GameBoard.getWidth();
		const boardHeight = GameBoard.getHeight();
		
		const img = this.imgs[this.imgIndex];
		this.width = img.width as number;
		this.height = img.height as number;
		
		/*while (this.width > boardWidth || this.height > boardHeight) {
			this.width /= 2;
			this.height /= 2;
		}*/
		
		this.x = (boardWidth - this.width) / 2;
		this.y = (boardHeight - this.height) / 2;
	}
	
	public render() {
		const x = this.x + ((1 - this.shrink) * this.width) / 2;
		const y = this.y + ((1 - this.shrink) * this.height) / 2;
		const w = this.width * this.shrink;
		const h = this.height * this.shrink;
		GameBoard.drawImage(this.imgs[this.imgIndex], x, y, w, h);
	}
	
	public update() {
		if (this.shrink === 1 || this.shrink === this.MAX_SHRINK)
			this.deltaTime = 3;
		if (this.isClicked) {
			this.shrink -= 0.001 * this.deltaTime;
		} else {
			this.shrink += 0.001 * this.deltaTime;
		}
		this.deltaTime += 0.75;
		
		this.shrink = NubMath.clamp(this.shrink, this.MAX_SHRINK, 1);
	}
	
	public press() {
		this.isClicked = true;
	}
	
	public release() {
		this.isClicked = false;
		if (Math.random() * 100 > 85) {
			this.imgIndex = (this.imgIndex + 1) % this.imgs.length;
			this.setDimensions();
		}
	}
	
}

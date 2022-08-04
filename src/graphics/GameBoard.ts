import { Color } from "./Color.js";
import { Canvas, Context2D, Image } from "../engine/Types.js";

export namespace GameBoard {
	
	let canvas: Canvas;
	let ctx: Context2D;
	let width: number;
	let height: number;
	
	export function init(canvasID: string) {
		canvas = document.getElementById(canvasID) as Canvas;
		ctx = canvas.getContext("2d");
		width = canvas.width;
		height = canvas.height;
		ctx.imageSmoothingEnabled = true;
		ctx.imageSmoothingQuality = "low";
	}
	
	export function fillRect(x: number, y: number, w: number, h: number, color: Color) {
		ctx.beginPath();
		ctx.rect(x, y, w, h);
		ctx.fillStyle = color;
		ctx.fill();
	}
	
	export function drawRect(x: number, y: number, w: number, h: number, color: Color, stroke = -1) {
		ctx.beginPath();
		ctx.rect(x, y, w, h);
		ctx.strokeStyle = color;
		if (stroke > -1)
			ctx.lineWidth = stroke;
		ctx.stroke();
	}
	
	export function drawImage(img: Image, x: number, y: number, w: number, h: number) {
		ctx.drawImage(img, x, y, w, h);
	}
	
	export function fillBackground(color: Color) {
		this.fillRect(0, 0, width, height, color);
	}
	
	export function imgBackground(img: Image) {
		this.drawImage(img, 0, 0, width, height);
	}
	
	export function isVisible(x: number, y: number, w: number, h: number): boolean {
		return ((0 <= x		&& x	<= width)
			||  (0 <= x +w	&& x +w <= width))
			&& ((0 <= y		&& y	<= height)
			||  (0 <= y +h	&& y +h <= height));
	}
	
	export function getCanvas(): Canvas { return canvas; }
	export function getCtx(): Context2D {return ctx; }
	export function getWidth(): number { return width; }
	export function getHeight(): number { return height; }
	
}


export enum PlayingType {
	Stopped, Pending, Playing
}

export class AudioPlayer {
	
	private audio: HTMLAudioElement;
	private volume: number;
	private playing: number;
	
	constructor(audioFile: string, volume: number) {
		this.audio = new Audio(audioFile);
		this.setVolume(volume);
		this.playing = PlayingType.Stopped;
		
		this.audio.addEventListener("ended", () => this.playing = PlayingType.Pending);
	}
	
	public play() {
		this.playing = (this.playing == PlayingType.Stopped) ? PlayingType.Pending : PlayingType.Playing;
		
		if (this.playing == PlayingType.Playing)
			this.audio.play();
	}
	
	public stop() {
		this.playing = PlayingType.Stopped;
		this.audio.pause();
	}
	
	public setVolume(vol: number) {
		this.audio.volume = vol;
		this.volume = vol;
	}
	
	public getVolume(): number { return this.volume; }
	
	public isStopped(): boolean { return this.playing == PlayingType.Stopped; }
	public isPending(): boolean { return this.playing == PlayingType.Pending; }
	public isPlaying(): boolean { return this.playing == PlayingType.Playing; }
	
}

export var PlayingType;
(function (PlayingType) {
    PlayingType[PlayingType["Stopped"] = 0] = "Stopped";
    PlayingType[PlayingType["Pending"] = 1] = "Pending";
    PlayingType[PlayingType["Playing"] = 2] = "Playing";
})(PlayingType || (PlayingType = {}));
export class AudioPlayer {
    audio;
    volume;
    playing;
    constructor(audioFile, volume) {
        this.audio = new Audio(audioFile);
        this.setVolume(volume);
        this.playing = PlayingType.Stopped;
        this.audio.addEventListener("ended", () => this.playing = PlayingType.Pending);
    }
    play() {
        this.playing = (this.playing == PlayingType.Stopped) ? PlayingType.Pending : PlayingType.Playing;
        if (this.playing == PlayingType.Playing)
            this.audio.play();
    }
    stop() {
        this.playing = PlayingType.Stopped;
        this.audio.pause();
    }
    setVolume(vol) {
        this.audio.volume = vol;
        this.volume = vol;
    }
    getVolume() { return this.volume; }
    isStopped() { return this.playing == PlayingType.Stopped; }
    isPending() { return this.playing == PlayingType.Pending; }
    isPlaying() { return this.playing == PlayingType.Playing; }
}

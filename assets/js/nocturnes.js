class Nocturnes {
    constructor() {
        this.tracks = [];
        this.currentTrackIndex = 0;
        this.audioPlayer = new Audio();
        this.isPlaying = false;
        this.loadTracks();
        this.setupEventListeners();
    }

    loadTracks() {
        // Load all nocturne tracks from 1 to 20
        for (let i = 1; i <= 20; i++) {
            this.tracks.push(`assets/musics/single_tracks/nocturne_${i}.mp3`);
        }
    }

    setupEventListeners() {
        // When one track ends, play the next one
        this.audioPlayer.addEventListener('ended', () => {
            this.playNext();
        });

        // Handle errors
        this.audioPlayer.addEventListener('error', (e) => {
            console.error('Audio player error:', e);
            this.playNext(); // Skip problematic track
        });
    }

    play() {
        if (this.tracks.length === 0) return;
        
        this.audioPlayer.src = this.tracks[this.currentTrackIndex];
        this.audioPlayer.play()
            .then(() => {
                this.isPlaying = true;
                console.log(`Now playing: Nocturne ${this.currentTrackIndex + 1}`);
            })
            .catch(error => {
                console.error('Playback error:', error);
                this.playNext(); // Try next track if current one fails
            });
    }

    pause() {
        this.audioPlayer.pause();
        this.isPlaying = false;
    }

    resume() {
        if (!this.isPlaying) {
            this.audioPlayer.play();
            this.isPlaying = true;
        }
    }

    playNext() {
        this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
        this.play();
    }

    playPrevious() {
        this.currentTrackIndex = (this.currentTrackIndex - 1 + this.tracks.length) % this.tracks.length;
        this.play();
    }

    getCurrentTrackInfo() {
        return {
            track: this.currentTrackIndex + 1,
            src: this.tracks[this.currentTrackIndex]
        };
    }

    togglePlayPause() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.resume();
        }
        return this.isPlaying;
    }
}
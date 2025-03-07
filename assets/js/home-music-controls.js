(function() {
    // DOM Elements for music controls
    const controlsContainer = document.createElement('div');
    const playPauseButton = document.createElement('div');
    const repeatButton = document.createElement('div');
    const loopButton = document.createElement('div');
    
    // Track state
    let isRepeatEnabled = false;
    let isLoopEnabled = true; // Default to loop playlist
    
    // Initialize the controls
    function initMusicControls() {
        // Get reference to background audio from the main script
        const backgroundAudio = document.getElementById('backgroundAudio');
        
        // Set up container
        controlsContainer.className = 'home-music-controls';
        document.body.appendChild(controlsContainer);
        
        // Add the buttons to the container
        setupPlayPauseButton();
        setupRepeatButton();
        setupLoopButton();
        
        // Add event listeners for buttons
        addButtonListeners(backgroundAudio);
        
        // Add styles for controls
        addControlStyles();
        
        // Update button states based on current audio state
        updateButtonStates(backgroundAudio);
        
        // Hide controls in music mode
        observeMusicMode();
    }
    
    function setupPlayPauseButton() {
        playPauseButton.className = 'home-music-button play-pause-button';
        playPauseButton.innerHTML = '<img src="assets/images/music_pause_and_play_button.png" alt="Play/Pause">';
        playPauseButton.setAttribute('title', 'Play/Pause');
        controlsContainer.appendChild(playPauseButton);
    }
    
    function setupRepeatButton() {
        repeatButton.className = 'home-music-button repeat-button';
        repeatButton.innerHTML = '<img src="assets/images/repeat.png" alt="Repeat">';
        repeatButton.setAttribute('title', 'Repeat Current Song');
        controlsContainer.appendChild(repeatButton);
    }
    
    function setupLoopButton() {
        loopButton.className = 'home-music-button loop-button active';
        loopButton.innerHTML = '<img src="assets/images/music_loops.png" alt="Loop">';
        loopButton.setAttribute('title', 'Loop Playlist');
        controlsContainer.appendChild(loopButton);
    }
    
    function addButtonListeners(audio) {
        // Play/Pause button
        playPauseButton.addEventListener('click', function() {
            if (audio.paused) {
                audio.play().then(() => {
                    this.classList.add('active');
                    this.querySelector('img').src = 'assets/images/music_pause_and_play_button.png';
                }).catch(error => {
                    console.error('Error playing audio:', error);
                });
            } else {
                audio.pause();
                this.classList.remove('active');
                this.querySelector('img').src = 'assets/images/music_pause_and_play_button.png';
            }
            updateEqualizerVisibility(); // Call function from the main script
        });
        
        // Repeat button (repeat current song)
        repeatButton.addEventListener('click', function() {
            isRepeatEnabled = !isRepeatEnabled;
            if (isRepeatEnabled) {
                this.classList.add('active');
                // If repeat is enabled, disable loop
                if (isLoopEnabled) {
                    isLoopEnabled = false;
                    loopButton.classList.remove('active');
                }
            } else {
                this.classList.remove('active');
            }
        });
        
        // Loop button (loop through playlist)
        loopButton.addEventListener('click', function() {
            isLoopEnabled = !isLoopEnabled;
            if (isLoopEnabled) {
                this.classList.add('active');
                // If loop is enabled, disable repeat
                if (isRepeatEnabled) {
                    isRepeatEnabled = false;
                    repeatButton.classList.remove('active');
                }
            } else {
                this.classList.remove('active');
            }
        });
        
        // Add hover effects to all buttons
        [playPauseButton, repeatButton, loopButton].forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.classList.add('hover');
            });
            
            button.addEventListener('mouseleave', function() {
                this.classList.remove('hover');
            });
        });
        
        // Handle song end event
        audio.addEventListener('ended', function() {
            // Only handle in home page mode
            if (!document.body.classList.contains('music-mode-active')) {
                if (isRepeatEnabled) {
                    // Repeat the current song
                    audio.currentTime = 0;
                    audio.play().catch(error => {
                        console.error('Error restarting audio:', error);
                    });
                } else if (isLoopEnabled) {
                    // Play next song in playlist
                    playNextInPlaylist(audio);
                } else {
                    // Stop playing after current song
                    playPauseButton.classList.remove('active');
                    playPauseButton.querySelector('img').src = 'assets/images/music_pause_and_play_button.png';
                }
            }
        });
    }
    
    function playNextInPlaylist(audio) {
        // Get all songs from the main script's musicMapping
        const musicMapping = window.musicMapping || {};
        const songs = Object.keys(musicMapping);
        
        if (songs.length > 0) {
            // Find current song in the playlist
            let currentIndex = -1;
            for (let i = 0; i < songs.length; i++) {
                if (audio.src.includes(songs[i])) {
                    currentIndex = i;
                    break;
                }
            }
            
            // Move to the next song or back to the first
            const nextIndex = (currentIndex + 1) % songs.length;
            audio.src = songs[nextIndex];
            audio.play().catch(error => {
                console.error('Error playing next song:', error);
            });
            
            // Update the typing text if needed
            if (window.typeText && musicMapping[songs[nextIndex]]) {
                window.typeText(`Now Playing: ${musicMapping[songs[nextIndex]]}`);
            }
        }
    }
    
    function updateButtonStates(audio) {
        // Update play/pause button state
        if (audio.paused) {
            playPauseButton.classList.remove('active');
            playPauseButton.querySelector('img').src = 'assets/images/music_pause_and_play_button.png';
        } else {
            playPauseButton.classList.add('active');
            playPauseButton.querySelector('img').src = 'assets/images/music_pause_and_play_button.png';
        }
        
        // Listen for external play/pause events
        audio.addEventListener('play', function() {
            playPauseButton.classList.add('active');
            playPauseButton.querySelector('img').src = 'assets/images/music_pause_and_play_button.png';
        });
        
        audio.addEventListener('pause', function() {
            playPauseButton.classList.remove('active');
            playPauseButton.querySelector('img').src = 'assets/images/music_pause_and_play_button.png';
        });
    }
    
    function observeMusicMode() {
        // Hide controls when in music mode
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === 'class') {
                    if (document.body.classList.contains('music-mode-active')) {
                        controlsContainer.style.display = 'none';
                    } else {
                        controlsContainer.style.display = 'flex';
                    }
                }
            });
        });
        
        observer.observe(document.body, { attributes: true });
        
        // Initial check
        if (document.body.classList.contains('music-mode-active')) {
            controlsContainer.style.display = 'none';
        }
    }
    
    function addControlStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .home-music-controls {
                position: fixed;
                bottom: 50px;
                right: 20px;
                display: flex;
                gap: 10px;
                z-index: 99;
                background-color: rgba(0, 0, 0, 0.6);
                border-radius: 20px;
                padding: 8px 12px;
                backdrop-filter: blur(5px);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            }
            
            .home-music-button {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.1);
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            
            .home-music-button img {
                width: 20px;
                height: 50px;
                object-fit: contain;
                filter: brightness(0.9);
                transition: all 0.2s ease;
            }
            
            .home-music-button.active {
                background-color: rgba(0, 123, 255, 0.4);
                box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
            }
            
            .home-music-button.active img {
                filter: brightness(1.2);
            }
            
            .home-music-button.hover {
                background-color: rgba(255, 255, 255, 0.2);
                transform: scale(1.1);
            }
            
            .home-music-button.active.hover {
                background-color: rgba(0, 123, 255, 0.6);
            }
            
            @media screen and (max-width: 780px) {
                .home-music-controls {
                    bottom: 60px;
                    right: 10px;
                    padding: 6px 10px;
                    gap: 8px;
                }
                
                .home-music-button {
                    width: 32px;
                    height: 32px;
                }
                
                .home-music-button img {
                    width: 16px;
                    height: 16px;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Initialize once the DOM is loaded
    document.addEventListener('DOMContentLoaded', initMusicControls);
})();
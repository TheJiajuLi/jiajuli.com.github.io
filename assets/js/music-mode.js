// Add this to your existing music mode code
let nocturnes;

function initMusicMode() {
    // Initialize the nocturnes playlist
    nocturnes = new Nocturnes();
    
    // Add listener for music mode activation
    document.getElementById('music-mode-button').addEventListener('click', function() {
        activateMusicMode();
    });
}

function activateMusicMode() {
    // Your existing code to activate music mode UI
    // ...

    // Start playing the nocturnes
    nocturnes.play();
    
    // You might want to add UI controls for the playlist
    setupMusicControls();
}

function setupMusicControls() {
    // Example controls
    document.getElementById('play-pause-button')?.addEventListener('click', function() {
        const isPlaying = nocturnes.togglePlayPause();
        // Update UI based on isPlaying state
    });
    
    document.getElementById('next-track-button')?.addEventListener('click', function() {
        nocturnes.playNext();
    });
    
    document.getElementById('prev-track-button')?.addEventListener('click', function() {
        nocturnes.playPrevious();
    });
}

// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', initMusicMode);
// DOM Elements
const body = document.querySelector('body');
const backgroundAudio = document.getElementById('backgroundAudio');
const musicModeButton = document.getElementById('MusicModeButton'); // Change from MusicModeButton to musicModeButton
const exitMusicModeButton = document.getElementById('exitMusicModeButton');
const exploreButton = document.getElementById('exploreButton');
const profileImage = document.getElementById('profileImage');
const typingText = document.getElementById('typingText');
const dropdownContent = document.querySelector('.dropdown-content');
const dropbtn = document.querySelector('.dropbtn');
const copyrightContainer = document.querySelector('.copyright-container');
const musicList = document.querySelector('.music-list');

// Add playback control variables
const playPauseBtn = document.querySelector('.play-pause-btn');
const previousBtn = document.querySelector('.previous-btn');
const nextBtn = document.querySelector('.next-btn');
const playbackControls = document.querySelector('.playback-controls');

// Add after other variable declarations
const equalizerAnimation = document.createElement('div');
equalizerAnimation.className = 'equalizer-animation';
equalizerAnimation.innerHTML = `<img src="assets/images/equalizer_animation.gif" alt="Audio Equalizer">`;
document.body.appendChild(equalizerAnimation);

// Add this to your CSS via JavaScript
const equalizerStyle = document.createElement('style');
equalizerStyle.textContent = `
  .equalizer-animation {
    position: fixed;
    bottom: 20px;
    left: 10px;
    width: 120px;
    height: 60px;
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease-in-out;
  }
  
  .equalizer-animation img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .equalizer-animation.active {
    opacity: 1;
    visibility: visible;
  }
`;
document.head.appendChild(equalizerStyle);

// Add CSS for study resources hierarchy
const studyResourcesStyle = document.createElement('style');
studyResourcesStyle.textContent = `
  .resource-category {
    margin-bottom: 10px;
  }
  
  .resource-category-header {
    cursor: pointer;
    padding: 8px;
    background-color:rgb(255, 255, 255);
    color: #007BFF;
    border-radius: 4px;
    font-weight: bold;
    font-color: rgb(255, 255, 255);
    font-size: 0.7em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .resource-category-header:hover {
    background-color: #25d92b;
  }
  
  .resource-category-content {
    display: none;
    padding-left: 15px;
    margin-top: 5px;
  }
  
  .resource-subcategory {
    margin: 5px 0;
  }
  
  .resource-subcategory-header {
    cursor: pointer;
    padding: 6px;
    background-color:rgb(255, 255, 255);
    color: #007BFF;
    border-radius: 4px;
    font-weight: 500;
    font-color: rgb(193, 37, 196);
    font-size: 0.7em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .resource-subcategory-header:hover {
    background-color: #25d92b;
  }
  
  .resource-subcategory-content {
    display: none;
    padding-left: 15px;
    margin-top: 5px;
  }
  
  .resource-link {
    display: block;
    padding: 5px 8px;
    margin: 5px 0;
    color:rgb(255, 255, 255);
    text-decoration: none;
    border-radius: 3px;
    transition: background-color 0.2s;
    font-size: 0.8em;
  }
  
  .resource-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    text-decoration: underline;
  }
  
  .category-expand, .subcategory-expand {
    font-size: 12px;
    transition: transform 0.2s;
  }
`;
document.head.appendChild(studyResourcesStyle);

// First, declare all the music mappings
const musicMapping = {
    'assets/musics/single_tracks/nocturne_8.mp3': 'Nocturne in D-flat Major, Op. 27 No. 2',
    'assets/musics/single_tracks/legend_mode_theme_song.mp3': 'Tourner Dans Le Vide-Indila',
    'assets/musics/single_tracks/bohemian_rhapsody.mp3': 'Bohemian Rhapsody',
    'assets/musics/single_tracks/liebestraume_no_3.mp3': 'Liebestraum No. 3 in A-flat Major',
    'assets/musics/single_tracks/memory_reboot.mp3': 'Memory Reboot',
    'assets/musics/single_tracks/missing_you.mp3': 'Missing You-具島直子',
    'assets/musics/single_tracks/monochrome.mp3': 'Monochrome-具島直子',
    'assets/musics/single_tracks/candy.mp3': 'Candy-具島直子',
    'assets/musics/single_tracks/etudes_no_4.mp3': 'Etude in C-sharp Minor, Op. 10 No. 4',
    'assets/musics/single_tracks/etudes_no_23.mp3': 'Etude in A Minor, Op. 25 No. 11',
    'assets/musics/single_tracks/calm_down.mp3': 'Calm Down-Rema',
    'assets/musics/single_tracks/its_my_life.mp3': 'It\'s My Life-Bon Jovi',
};

const chopin_nocturnes = {
    'assets/musics/single_tracks/nocturne_1.mp3': 'Nocturne in B-minor, Op. 9 No. 1',
    'assets/musics/single_tracks/nocturne_2.mp3': 'Nocturne in E-flat Major, Op. 9 No. 2',
    'assets/musics/single_tracks/nocturne_3.mp3': 'Nocturne in B Major, Op. 9 No. 3',
    'assets/musics/single_tracks/nocturne_4.mp3': 'Nocturne in F Major, Op. 15 No. 1',
    'assets/musics/single_tracks/nocturne_5.mp3': 'Nocturne in F-sharp Major, Op. 15 No. 2',
    'assets/musics/single_tracks/nocturne_6.mp3': 'Nocturne in G Minor, Op. 15 No. 3',
    'assets/musics/single_tracks/nocturne_7.mp3': 'Nocturne in C-sharp Minor, Op. 27 No. 1',
    'assets/musics/single_tracks/nocturne_8.mp3': 'Nocturne in D-flat Major, Op. 27 No. 2',
    'assets/musics/single_tracks/nocturne_9.mp3': 'Nocturne in B Major, Op. 32 No. 1',
    'assets/musics/single_tracks/nocturne_10.mp3': 'Nocturne in A-flat Major, Op. 32 No. 2',
    'assets/musics/single_tracks/nocturne_11.mp3': 'Nocturne in G Minor, Op. 37 No. 1',
    'assets/musics/single_tracks/nocturne_12.mp3': 'Nocturne in G Major, Op. 37 No. 2',
    'assets/musics/single_tracks/nocturne_13.mp3': 'Nocturne in C Minor, Op. 48 No. 1',
    'assets/musics/single_tracks/nocturne_14.mp3': 'Nocturne in F-sharp Minor, Op. 48 No. 2',
    'assets/musics/single_tracks/nocturne_15.mp3': 'Nocturne in F Minor, Op. 55 No. 1',
    'assets/musics/single_tracks/nocturne_17.mp3': 'Nocturne in B Major, Op. 62 No. 1',
    'assets/musics/single_tracks/nocturne_18.mp3': 'Nocturne in E Major, Op. 62 No. 2',
    'assets/musics/single_tracks/nocturne_19.mp3': 'Nocturne in E Minor, Op. 72 No. 1',
    'assets/musics/single_tracks/nocturne_20.mp3': 'Nocturne in C-sharp Minor, Op. posth.',
};

let currentNocturneIndex = 0;
const nocturneEntries = Object.entries(chopin_nocturnes);

// Add new CD-related code after other variable declarations
const musicModeCd = document.createElement('div');
musicModeCd.className = 'music-mode-cd-container';
musicModeCd.innerHTML = `<img src="assets/images/cd_classical.png" alt="Classical CD" class="music-mode-cd">`;
document.body.appendChild(musicModeCd);

// Function to generate the music list
function generateMusicList() {
    for (const [filePath, displayName] of Object.entries(musicMapping)) {
        const musicLink = document.createElement('a');
        musicLink.href = filePath;
        musicLink.className = 'music-link';
        musicLink.textContent = displayName;
        musicLink.addEventListener('click', function(event) {
            event.preventDefault();
            backgroundAudio.src = filePath;
            playAudio();
            typeText(`Now Playing: ${displayName}`);
            console.log('Playing audio:', filePath);
        });
        musicList.appendChild(musicLink);
    }
    setupMusicLinkHoverEffects(); // Add this line
}

// Add error handling for audio playback
function playAudio() {
    backgroundAudio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
    musicModeCd.classList.add('spinning');
    console.log('Playing audio:', backgroundAudio.src);
    updateEqualizerVisibility(); // Add this line
}

function pauseAudio() {
    backgroundAudio.pause();
    musicModeCd.classList.remove('spinning');
    console.log('Pausing audio');
    updateEqualizerVisibility(); // Add this line
}

// Function to show the explore button
function showExploreButton() {
    exploreButton.style.display = 'block';
}

// Function to hide the explore button
function hideExploreButton() {
    exploreButton.style.display = 'none';
}

// First declare the text-related variables
let typingPaused = false;
let typingActive = false;
let currentTextSequence = '';
let currentTextIndex = 0;
let typingTimeout;

// Update Music Mode Button click handler
musicModeButton.addEventListener('click', function() {
    if (!body.classList.contains('music-mode-active')) {
        // Entering Music Mode
        currentNocturneIndex = 0;
        playNextNocturne();
        musicModeCd.classList.add('visible');
        
        console.log('Music mode activated, playing audio:', backgroundAudio.src);
        musicModeButton.textContent = 'Exit Music Mode';
        body.style.backgroundImage = 'url("assets/images/baroque_background_2.jpg")';
        body.classList.add('music-mode-active');
        body.classList.add('hide-dropdown');
        hideExploreButton();
        document.querySelector('h1').style.display = 'none';
        document.querySelectorAll('p').forEach(p => p.style.display = 'none');
        if (profileImage) {
            profileImage.style.display = 'none';
        }
        copyrightContainer.style.display = 'none';
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        updatePlaybackControls();
        
        updateEqualizerVisibility(); // Add this line
        
        // Add debug logging
        console.log('Music mode activated');
    } else {
        // Exiting Music Mode
        currentNocturneIndex = 0;
        body.classList.remove('music-mode-active');
        body.classList.remove('hide-dropdown');
        document.querySelector('h1').style.display = 'block';
        document.querySelectorAll('p').forEach(p => p.style.display = 'block');
        musicModeButton.textContent = 'Music Mode';
        backgroundAudio.src = 'assets/musics/single_tracks/bohemian_rhapsody.mp3';
        pauseAudio();
        
        body.style.backgroundImage = 'url("assets/images/new_york_city.jpg")';
        
        showExploreButton();
        copyrightContainer.style.display = 'block';
        
        resetAnimations();
        updateHomePage();
        displayUKTime();
        setInterval(displayUKTime, 60000);
        
        typeText('You are now back to the home page');
        musicModeCd.classList.remove('visible');
        musicModeCd.classList.remove('spinning');
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        updatePlaybackControls();
        
        updateEqualizerVisibility(); // Add this line
        
        // Add debug logging
        console.log('Music mode deactivated');
    }
});

// Update CD click handler
musicModeCd.addEventListener('click', function() {
    if (backgroundAudio.paused) {
        playAudio();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        pauseAudio();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

// Update CD hover events
musicModeCd.addEventListener('mouseover', function() {
    typeText('You can click the CD to play or pause the music');
});

musicModeCd.addEventListener('mouseout', function() {
    clearTypeText();
});

exploreButton.addEventListener('click', function() {
    if (isDropdownOpen) {
        dropdownContent.style.maxHeight = '0';
        isDropdownOpen = false;
    } else {
        dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
        isDropdownOpen = true;
    }
});

function typeText(text) {
    // Restart the sequence with the new text
    currentTextSequence = text;
    currentTextIndex = 0;
    
    typingText.style.display = 'block';
    typingText.value = ''; // Clear existing content
    clearTimeout(typingTimeout);
    typingActive = true;
    
    function type() {
        if (typingActive && currentTextIndex < currentTextSequence.length) {
            if (!typingPaused) {
                typingText.value += currentTextSequence.charAt(currentTextIndex);
                currentTextIndex++;
                // Automatically scroll the text if it overflows
                typingText.scrollLeft = typingText.scrollWidth;
            }
            typingTimeout = setTimeout(type, 50);
        } else {
            clearTimeout(typingTimeout);
        }
    }
    type();
}

// When clicking outside typingText, ensure typing resumes
document.addEventListener('click', function (event) {
    if (typingActive && event.target !== typingText) {
        typingPaused = false;
    }
});

// When the pointer enters typingText, pause typing and stop propagation
typingText.addEventListener('mouseenter', function (event) {
    event.stopPropagation();
    if (typingActive) {
        typingPaused = true;
    }
});

// When typingText is clicked, pause typing and stop propagation
typingText.addEventListener('click', function (event) {
    event.stopPropagation();
    if (typingActive) {
        typingPaused = true;
    }
});

// When the pointer leaves typingText, resume typing (propagation continues)
typingText.addEventListener('mouseleave', function (event) {
    if (typingActive) {
        typingPaused = false;
    }
});
typingText.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        typingActive = false; // Cancel typing if Enter is pressed
        const inputText = typingText.value.trim().toLowerCase();

        if (inputText === 'quick tour') {
            const tourMessages = [
                'Hello, welcome to my personal website', //1
                'Here are some quick tips to help you play it around and winning your life!', //2
                "So Let's get started.", //3
                'Section 1: Acknowledgement', //4
                'This site is built by Jiaju Li, a math student, an ex-musician and boxing hobbyist who is trying to fight against the matrix..', //5
                "Well, I know we don't care about any of that.. so let's jump into the section 2.", //6
                'Section 2: Functionality', //7
                "First of all, the CD icon controls the music medias of this site.", //8
                "You can play or pause a music media at anytime you want just by clicking it", //9
                "Which means there's no play button at anywhere around.", //10
                "Moreover, if you want to enjoy some classical music at anytime of your day", //11
                "you are most welcomed to go to the music session I uniquely designed for a classical musics-friendly environment.", //12
                "It's called 'Classical Mode.'", //13
                "You can get access to all the repertoires I have collected before and listen to them without a charge.", //14
                "Sounds cool, right?", //15
                "All you need to do is by clicking the 'Enter the Classical Mode' button on the top right of the page and the dreamful musics will come.", //16
                'The "Enter the Legend Mode" button is designed specifically for people like me who wants to fight against the social media, the matrix and keeps getting better.', //17
                "No one on earth has ever achieved real greatness without having a solid brotherhood and a group of knowleges and powers.", //18
                "We can fight together and win together if we have the wining-mindset and wish to become a better.", //19
                "Andrew Tate and his team has achevied something real great.", //20
                "So who's the next Top G gonna be?", //21
                "Guess we' ll find out.", //22
                "Lastly and real quickly", //23
                "if you want to go back to the home page and do whatsoever, all you need to do is clicking the 'Back to the Home Page' at the top center, and you will be redirected to the home page.", //24
                "That's it, I wish you enjoy it!", //25
            ];

            const tourTimeouts = [
                4000, // Timeout for message 1
                5500, // Timeout for message 2
                2500, // Timeout for message 3
                2500, // Timeout for message 4
                9000, // Timeout for message 5
                5500, // Timeout for message 6
                2000, // Timeout for message 7
                6000, // Timeout for message 8
                6500, // Timeout for message 9
                5000, // Timeout for message 10
                5500, // Timeout for message 11
                9000, // Timeout for message 12
                4000, // Timeout for message 13
                7500, // Timeout for message 14
                2000, // Timeout for message 15
                11000, // Timeout for message 16
                10500, // Timeout for message 17
                8500, // Timeout for message 18
                9000, // Timeout for message 19
                5000, // Timeout for message 20
                5000, // Timeout for message 21
                3000, // Timeout for message 22
                1000, // Timeout for message 23
                11500, // Timeout for message 24
                15000, // Timeout for message 25
            ];

            let messageIndex = 0;
            typingText.value = ''; // Clear the input bar

            function showTourMessage() {
                if (messageIndex < tourMessages.length) {
                    typeText(tourMessages[messageIndex]); // Use the typeText function to display the message
                    messageIndex++;
                    setTimeout(showTourMessage, tourTimeouts[messageIndex - 1]); // Display each message with a delay
                } else {
                    typingText.placeholder = "For more information, please types a 'More' here."; // Change the placeholder text
                }
            }

            showTourMessage();
        } else if (inputText === 'clear') {
            typingText.value = ''; // Clear the input bar
        } else {
            // Enhanced song search functionality
            const searchTerm = inputText.toLowerCase().replace(/_/g, '');
            let foundSong = false;
            let bestMatch = null;
            let bestMatchScore = 0;
            
            // Function to score how well a string matches the search term
            function getMatchScore(str, searchTerm) {
                if (str.includes(searchTerm)) {
                    // Full inclusion gets higher score
                    return searchTerm.length + 10;
                }
                
                // Check for partial matches by checking each word
                const words = str.split(/\s+|_|-/);
                for (const word of words) {
                    if (word.startsWith(searchTerm) || searchTerm.startsWith(word)) {
                        // Partial word match gets lower score
                        return Math.min(word.length, searchTerm.length);
                    }
                }
                return 0;
            }
            
            // Search in musicMapping with scoring
            for (const [filePath, displayName] of Object.entries(musicMapping)) {
                const normalizedFilePath = filePath.toLowerCase().replace(/_/g, '');
                const normalizedDisplayName = displayName.toLowerCase().replace(/_/g, '');
                
                // Calculate match scores for both path and name
                const pathScore = getMatchScore(normalizedFilePath, searchTerm);
                const nameScore = getMatchScore(normalizedDisplayName, searchTerm);
                const totalScore = Math.max(pathScore, nameScore);
                
                if (totalScore > bestMatchScore) {
                    bestMatchScore = totalScore;
                    bestMatch = [filePath, displayName];
                }
            }
            
            // Search in chopin_nocturnes with scoring if no high score match yet
            if (bestMatchScore < 10) {
                for (const [filePath, displayName] of Object.entries(chopin_nocturnes)) {
                    const normalizedFilePath = filePath.toLowerCase().replace(/_/g, '');
                    const normalizedDisplayName = displayName.toLowerCase().replace(/_/g, '');
                    
                    // Calculate match scores for both path and name
                    const pathScore = getMatchScore(normalizedFilePath, searchTerm);
                    const nameScore = getMatchScore(normalizedDisplayName, searchTerm);
                    const totalScore = Math.max(pathScore, nameScore);
                    
                    if (totalScore > bestMatchScore) {
                        bestMatchScore = totalScore;
                        bestMatch = [filePath, displayName];
                    }
                }
            }
            
            // Play the best match if we found one
            if (bestMatch && bestMatchScore > 0) {
                backgroundAudio.src = bestMatch[0];
                playAudio();
                typeText(`Now Playing: ${bestMatch[1]}`);
                foundSong = true;
            }
            
            if (!foundSong) {
                typeText(`No song found matching '${inputText}'. Try 'bohemian', 'nocturne', 'liebestraume', etc.`);
            }
        }
    }
});

document.querySelectorAll('.preview-link').forEach(link => {
    link.addEventListener('mouseover', function(event) {
        const previewUrl = event.target.getAttribute('data-preview');
        const previewContainer = document.getElementById('preview-container');
        previewContainer.innerHTML = `<iframe src="${previewUrl}" frameborder="0" style="width: 300px; height: 200px;"></iframe>`;
        previewContainer.style.display = 'block';
        previewContainer.style.top = event.pageY + 'px';
        previewContainer.style.left = event.pageX + 'px';
    });

    link.addEventListener('mouseout', function() {
        const previewContainer = document.getElementById('preview-container');
        previewContainer.style.display = 'none';
        previewContainer.innerHTML = '';
    });
});

document.querySelectorAll('.music-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const musicUrl = event.target.getAttribute('href');
        const displayName = event.target.textContent;
        backgroundAudio.src = musicUrl;
        playAudio();
        typeText(`Now Playing: ${displayName}`);
        console.log('Playing audio:', backgroundAudio.src);
    });
});

dropbtn.addEventListener('click', function() {
    if (isDropdownOpen) {
        dropdownContent.style.maxHeight = '0';
        isDropdownOpen = false;
    } else {
        dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
        isDropdownOpen = true;
    }
});

document.querySelectorAll('.expandable').forEach(section => {
    section.addEventListener('click', function() {
        const musicList = this.nextElementSibling;
        const expandTab = this.querySelector('.expand-tab');
        if (musicList.style.display === 'block') {
            musicList.style.display = 'none';
            expandTab.textContent = '▼';
        } else {
            musicList.style.display = 'block';
            expandTab.textContent = '▲';
        }
    });
});

function resetAnimations() {
    body.classList.add('reset-animations');
    setTimeout(() => {
        body.classList.remove('reset-animations');
    }, 10); // Adjust the delay as needed
}

function updateHomePage() {
    pauseAudio();
    typingText.classList.add('reset-animations'); 
    backgroundAudio.src = '';
    setTimeout(() => {
    typingText.classList.remove('reset-animations');
    }, 60000);
    displayUKTime();
}
// Initialize UK time on page load
window.addEventListener('load', function() {
    backgroundAudio.src = 'assets/musics/single_tracks/bohemian_rhapsody.mp3';
    pauseAudio();
    console.log('Default audio set on load:', backgroundAudio.src);
    generateMusicList();
    displayUKTime(); // Display UK time on load
    setInterval(displayUKTime, 60000); // Update UK time every minute
    
    // Hide playback controls initially
    playbackControls.style.opacity = '0';
    playbackControls.style.visibility = 'hidden';
    
    updateEqualizerVisibility(); // Add this line
});

function getUKTime() {
    const now = new Date();
    const options = {
        timeZone: 'Europe/London',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    };
    const ukTime = now.toLocaleString('en-GB', options);
    return `Current UK Time: ${ukTime}`;
}

function displayUKTime() {
    const now = new Date();
    const timeOptions = {
        timeZone: 'Europe/London',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    };
    const timeFormatter = new Intl.DateTimeFormat('en-GB', timeOptions);
    const time = timeFormatter.format(now);

    const dateOptions = {
        timeZone: 'Europe/London',
        month: 'long',
        year: 'numeric'
    };
    const dateFormatter = new Intl.DateTimeFormat('en-GB', dateOptions);
    const date = dateFormatter.format(now);

    const formattedTime = `Current UK Time: ${time}`;
    const formattedDate = `${date}`;
    typeText(`${formattedTime} ${formattedDate}`); // Call typeText here!
}

function clearTypeText() {
    typingText.value = '';        // Wipe out the current text content
    typingActive = false;         // Reset flags if desired
    typingPaused = false;
}

musicModeButton.addEventListener('mouseover', function() {
    if (!body.classList.contains('music-mode-active')) {
        typeText('Enter the Music Mode');
    } else if (body.classList.contains('music-mode-active')) {
        typeText('You are now in Music Mode');
    }
});

musicModeButton.addEventListener('click', function() {
    if (!body.classList.contains('music-mode-active')) {
        setTimeout(clearTypeText, 1500);
    }
});

function displayCurrentSong() {
    if (body.classList.contains('music-mode-active')) {
        if (backgroundAudio.paused) {
            typeText("Music Paused");
        } else {
            const currentNocturne = nocturneEntries[Math.max(0, currentNocturneIndex - 1)];
            if (currentNocturne) {
                typeText(`Now Playing: ${currentNocturne[1]}`);
            }
        }
        return;
    }
    if (backgroundAudio.paused) {
        typeText("Hi, welcome to my personal website! Type 'quick tour' in here to get started");
    } else {
        let songName = "No Music Playing";
        for (const filePath in musicMapping) {
            if (backgroundAudio.src.includes(filePath)) {
                songName = musicMapping[filePath];
                break;
            }
        }
        typeText(`Now Playing: ${songName}`);
    }
}

backgroundAudio.addEventListener('play', displayCurrentSong);
backgroundAudio.addEventListener('loadeddata', displayCurrentSong);
backgroundAudio.addEventListener('pause', typeText.bind(null, 'Music Paused'));

function playNextNocturne() {
    if (currentNocturneIndex >= nocturneEntries.length) {
        currentNocturneIndex = 0;
    }
    const [filePath, displayName] = nocturneEntries[currentNocturneIndex];
    backgroundAudio.src = filePath;
    playAudio();
    typeText(`Now Playing: ${displayName}`);
    currentNocturneIndex++;
}

backgroundAudio.addEventListener('ended', function() {
    if (body.classList.contains('music-mode-active')) {
        playNextNocturne();
    }
    updateEqualizerVisibility(); // Add this line
});
// Update play/pause button
playPauseBtn.addEventListener('click', () => {
    if (backgroundAudio.paused) {
        playAudio();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        pauseAudio();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

// Previous track button
previousBtn.addEventListener('click', () => {
    currentNocturneIndex = Math.max(0, currentNocturneIndex - 2);
    playNextNocturne();
});

// Next track button
nextBtn.addEventListener('click', () => {
    playNextNocturne();
});

// Update the playback controls visibility
function updatePlaybackControls() {
    const playbackControls = document.querySelector('.playback-controls');
    if (body.classList.contains('music-mode-active')) {
        playbackControls.style.opacity = '1';
        playbackControls.style.visibility = 'visible';
    } else {
        playbackControls.style.opacity = '0';
        playbackControls.style.visibility = 'hidden';
    }
}

// Add space bar control for music playback
document.addEventListener('keydown', function(event) {
    // Check if in music mode and space bar is pressed
    if (event.code === 'Space' && body.classList.contains('music-mode-active')) {
        // Prevent default space bar behavior (page scroll)
        event.preventDefault();
        
        // Toggle play/pause
        if (backgroundAudio.paused) {
            playAudio();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            musicModeCd.classList.add('spinning');
        } else {
            pauseAudio();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            musicModeCd.classList.remove('spinning');
        }
    }
});

// Function to update equalizer visibility based on audio state
function updateEqualizerVisibility() {
    if (body.classList.contains('music-mode-active')) {
        // Hide equalizer in music mode
        equalizerAnimation.classList.remove('active');
    } else if (backgroundAudio.src && !backgroundAudio.paused) {
        // Show equalizer on home page ONLY when music is playing (not paused)
        equalizerAnimation.classList.add('active');
        equalizerAnimation.style.opacity = '1'; // Fully visible when playing
    } else {
        // Hide equalizer when paused or no audio source
        equalizerAnimation.classList.remove('active');
    }
}

// Add these event listeners for audio state changes
backgroundAudio.addEventListener('play', updateEqualizerVisibility);
backgroundAudio.addEventListener('pause', updateEqualizerVisibility);
backgroundAudio.addEventListener('loadeddata', updateEqualizerVisibility);

// Add to the event listener for audio source changes
backgroundAudio.addEventListener('canplay', updateEqualizerVisibility);

// Add this function to generate a hierarchical structure for study resources
function generateStudyResources() {
    // Get the study resources container
    const studyResourcesList = document.querySelector('.dropdown-section:nth-of-type(2) .music-list');
    if (!studyResourcesList) return;
    
    // Clear existing content
    studyResourcesList.innerHTML = '';
    
    // Define the hierarchical structure for math resources
    const resourcesHierarchy = {
        "Calculus": {
            "Differential and Integral Calculus": [
                { name: "DIfferential Equations", file: "files/pdfs/differential_equation.pdf" },
                { name: "Differential and Integral Analysis", file: "files/pdfs/differential_and_integral_analysis.pdf" },
                { name: "Introduction to Differential Geometry", file: "files/pdfs/differential_geometry.pdf" }
            ],
            'Calculus II': [
                { name: "Notes", file: "files/pdfs/calculus_II.pdf" }
            ],
        },
        'Analysis': {
            'Real Analysis': [   
                { name: "Limits and Continuity", file: "files/pdfs/limits_and_continuity.pdf" },
            ],
            'Complex Analysis': [
                { name: "Complex Functions", file: "files/pdfs/complex_analysis.pdf" },
            ]
        },
        "Linear Algebra": {
            "Matrices and Vectors": [
                { name: "Notes", file: "files/pdfs/matrices_and_vector_analysis.pdf" }
            ],
        },
       "Number Theory": [
            { name: "Notes", file: "files/pdfs/number_theory.pdf" },
        ],
        'More': {
            'My Dropbox Folder': [
                { name: "Dropbox", file: "https://www.dropbox.com/scl/fo/06jyhza3n39i29x96tjje/APz1HA98cI4W2NGH3cWJAPQ?rlkey=be3ht2dzgyaj8x2rqq7h4su0r&st=63ndm7do&dl=0" }
            ],
        }
    };
    
    // Create and append the hierarchical structure
    for (const [topCategory, subCategories] of Object.entries(resourcesHierarchy)) {
        // Create top-level category
        const topCategoryDiv = document.createElement('div');
        topCategoryDiv.className = 'resource-category';
        
        const topCategoryHeader = document.createElement('div');
        topCategoryHeader.className = 'resource-category-header';
        topCategoryHeader.innerHTML = `${topCategory} <span class="category-expand">▼</span>`;
        topCategoryDiv.appendChild(topCategoryHeader);
        
        const topCategoryContent = document.createElement('div');
        topCategoryContent.className = 'resource-category-content';
        
        // Handle different structures for categories
        if (Array.isArray(subCategories)) {
            // Simple list of documents
            subCategories.forEach(resource => {
                const resourceLink = document.createElement('a');
                resourceLink.href = resource.file;
                resourceLink.className = 'resource-link';
                resourceLink.textContent = resource.name;
                resourceLink.setAttribute('target', '_blank');
                topCategoryContent.appendChild(resourceLink);
            });
        } else {
            // Subcategories with documents
            for (const [subCategory, documents] of Object.entries(subCategories)) {
                const subCategoryDiv = document.createElement('div');
                subCategoryDiv.className = 'resource-subcategory';
                
                const subCategoryHeader = document.createElement('div');
                subCategoryHeader.className = 'resource-subcategory-header';
                subCategoryHeader.innerHTML = `${subCategory} <span class="subcategory-expand">▼</span>`;
                subCategoryDiv.appendChild(subCategoryHeader);
                
                const subCategoryContent = document.createElement('div');
                subCategoryContent.className = 'resource-subcategory-content';
                
                // Add documents to subcategory
                documents.forEach(resource => {
                    const resourceLink = document.createElement('a');
                    resourceLink.href = resource.file;
                    resourceLink.className = 'resource-link';
                    resourceLink.textContent = resource.name;
                    resourceLink.setAttribute('target', '_blank');
                    subCategoryContent.appendChild(resourceLink);
                });
                
                subCategoryDiv.appendChild(subCategoryContent);
                topCategoryContent.appendChild(subCategoryDiv);
            }
        }
        
        topCategoryDiv.appendChild(topCategoryContent);
        studyResourcesList.appendChild(topCategoryDiv);
    }
    
    // Add click event listeners for expanding/collapsing
    document.querySelectorAll('.resource-category-header').forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const arrow = this.querySelector('.category-expand');
            if (content.style.display === 'block') {
                content.style.display = 'none';
                arrow.textContent = '▼';
            } else {
                content.style.display = 'block';
                arrow.textContent = '▲';
            }
        });
    });
    
    document.querySelectorAll('.resource-subcategory-header').forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const arrow = this.querySelector('.subcategory-expand');
            if (content.style.display === 'block') {
                content.style.display = 'none';
                arrow.textContent = '▼';
            } else {
                content.style.display = 'block';
                arrow.textContent = '▲';
            }
        });
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Existing initialization code
    // ...
    
    // Generate study resources hierarchy
    generateStudyResources();
    
    // Setup hover effects for music links
    setupMusicLinkHoverEffects();
    
    // If you're dynamically generating music links, also call this after generating them
    generateMusicList();
    setupMusicLinkHoverEffects();
});

// Add this function after your existing code
function setupMusicLinkHoverEffects() {
    // Get all music links in the Trending section
    const trendingSectionLinks = document.querySelector('.dropdown-section:nth-of-type(1) .music-list').querySelectorAll('a');
    
    // Add hover effects to all music links
    trendingSectionLinks.forEach(link => {
        // On mouse enter, show the "Click to play" message
        link.addEventListener('mouseenter', function() {
            const songName = this.textContent.trim();
            typeText(`Click to play: ${songName}`);
        });
        
        // On mouse leave, clear the message
        link.addEventListener('mouseleave', function() {
            // Only clear if we're not in music mode (to avoid conflict with other messages)
            if (!body.classList.contains('music-mode-active')) {
                clearTypeText();
                
                // If there's active audio, show the current playing song
                if (backgroundAudio.src && !backgroundAudio.paused) {
                    let songName = "No Music Playing";
                    for (const filePath in musicMapping) {
                        if (backgroundAudio.src.includes(filePath)) {
                            songName = musicMapping[filePath];
                            break;
                        }
                    }
                    typeText(`Now Playing: ${songName}`);
                } else {
                    // If no music is playing, show the default welcome message
                    typeText("Hi, welcome to my personal website! Type 'quick tour' in here to get started");
                }
            }
        });
    });
}

// Make necessary functions and variables accessible to other scripts
window.musicMapping = musicMapping; 
window.typeText = typeText;
window.updateEqualizerVisibility = updateEqualizerVisibility;

// Add this function to populate the trending songs list
function populateTrendingSongs() {
    // Get the trending section from the dropdown
    const trendingSection = document.querySelector('.dropdown-section:nth-of-type(1)');
    const trendingMusicList = trendingSection.querySelector('.music-list');
    
    // Clear existing content
    trendingMusicList.innerHTML = '';
    
    // Top 10 trending songs with play counts
    const trendingSongs = [
        { name: "Bohemian Rhapsody", path: "assets/musics/single_tracks/bohemian_rhapsody.mp3", plays: 1243 },
        { name: "Nocturne in D-flat Major, Op. 27 No. 2", path: "assets/musics/single_tracks/nocturne_8.mp3", plays: 982 },
        { name: "Liebestraum No. 3", path: "assets/musics/single_tracks/liebestraume_no_3.mp3", plays: 876 },
        { name: "Calm Down - Rema", path: "assets/musics/single_tracks/calm_down.mp3", plays: 745 },
        { name: "Nocturne in E-flat Major, Op. 9 No. 2", path: "assets/musics/single_tracks/nocturne_2.mp3", plays: 721 },
        { name: "Tourner Dans Le Vide - Indila", path: "assets/musics/single_tracks/legend_mode_theme_song.mp3", plays: 698 },
        { name: "Etude in C-sharp Minor, Op. 10 No. 4", path: "assets/musics/single_tracks/etudes_4.mp3", plays: 651 },
        { name: "Memory Reboot", path: "assets/musics/single_tracks/memory_reboot.mp3", plays: 589 },
        { name: "Missing You - 具島直子", path: "assets/musics/single_tracks/missing_you.mp3", plays: 534 },
        { name: "Nocturne in C Minor, Op. 48 No. 1", path: "assets/musics/single_tracks/nocturne_13.mp3", plays: 498 }
    ];
    
    // Create the trending songs container with a cleaner design
    const trendingContainer = document.createElement('div');
    trendingContainer.className = 'trending-songs-container';
    
    // Add title
    const trendingTitle = document.createElement('div');
    trendingTitle.className = 'trending-title';
    trendingTitle.textContent = 'Hot in the last 24 hours';
    trendingContainer.appendChild(trendingTitle);
    
    // Add songs
    trendingSongs.forEach((song, index) => {
        const songElement = document.createElement('div');
        songElement.className = 'trending-song-item';
        songElement.innerHTML = `
            <span class="trending-rank">${index + 1}</span>
            <span class="trending-song-name">${song.name}</span>
            <span class="trending-plays">${song.plays}</span>
        `;
        
        // Make the entire row clickable
        songElement.addEventListener('click', function() {
            backgroundAudio.src = song.path;
            playAudio();
            typeText(`Now Playing: ${song.name}`);
        });
        
        trendingContainer.appendChild(songElement);
    });
    
    // Add the container to the trending section
    trendingMusicList.appendChild(trendingContainer);
    
    // Add styles for the trending section
    const trendingStyles = document.createElement('style');
    trendingStyles.textContent = `
        .trending-songs-container {
            padding: 5px 0;
        }
        
        .trending-title {
            font-size: 0.8em;
            color: #ff0000; /* Changed from rgb(0, 0, 0) to red */
            margin-bottom: 8px;
            font-weight: bold;
            text-align: center;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .refresh-time {
            font-size: 0.7em;
            color: #aaa;
            font-weight: normal;
        }
        
        .trending-song-item {
            display: flex;
            align-items: center;
            padding: 6px 8px;
            margin: 3px 0;
            border-radius: 4px;
            background-color: #007BFF;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        
        .trending-song-item:hover {
            background-color: rgba(255, 255, 255, 0.15);
        }
        
        .trending-rank {
            font-weight: bold;
            margin-right: 8px;
            color:rgb(255, 255, 255);
            min-width: 15px;
            text-align: center;
        }
        
        .trending-song-name {
            flex-grow: 1;
            font-size: 0.7em;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .trending-plays {
            font-size: 0.6em;
            color: #aaa;
            margin-left: 8px;
        }
        
        /* Override the display none for trending section */
        .dropdown-section:nth-of-type(1) .music-list {
            display: block;
            max-height: 300px;
            overflow-y: auto;
        }
        
        /* Mobile adjustments */
        @media screen and (max-width: 780px) {
            .trending-song-name {
                font-size: 0.65em;
            }
            
            .trending-plays {
                font-size: 0.55em;
            }
        }
    `;
    document.head.appendChild(trendingStyles);
    
    // Show the trending music list by default
    trendingMusicList.style.display = 'block';
    trendingSection.querySelector('h3 .expand-tab-1').textContent = '▲';
    
    // Set up hover effects for the song items
    setupTrendingSongHoverEffects();
}

// Add hover effects for the trending songs
function setupTrendingSongHoverEffects() {
    const trendingSongItems = document.querySelectorAll('.trending-song-item');
    
    trendingSongItems.forEach(item => {
        // On mouse enter, show the "Click to play" message
        item.addEventListener('mouseenter', function() {
            const songName = this.querySelector('.trending-song-name').textContent.trim();
            typeText(`Click to play: ${songName}`);
        });
        
        // On mouse leave, clear the message
        item.addEventListener('mouseleave', function() {
            // Only clear if we're not in music mode (to avoid conflict with other messages)
            if (!body.classList.contains('music-mode-active')) {
                clearTypeText();
                
                // If there's active audio, show the current playing song
                if (backgroundAudio.src && !backgroundAudio.paused) {
                    let songName = "No Music Playing";
                    for (const filePath in musicMapping) {
                        if (backgroundAudio.src.includes(filePath)) {
                            songName = musicMapping[filePath];
                            break;
                        }
                    }
                    typeText(`Now Playing: ${songName}`);
                } else {
                    // If no music is playing, show the default welcome message
                    typeText("Hi, welcome to my personal website! Type 'quick tour' in here to get started");
                }
            }
        });
    });
}

// Make necessary functions and variables accessible to other scripts
window.musicMapping = musicMapping; 
window.typeText = typeText;
window.updateEqualizerVisibility = updateEqualizerVisibility;

// Add timestamp tracking for trending songs refresh
let lastTrendingRefreshTime = localStorage.getItem('lastTrendingRefreshTime') || 0;

// Enhanced function to populate trending songs with refresh mechanism
function populateTrendingSongs() {
    // Check if 24 hours have passed since last refresh
    const now = Date.now();
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 24 hours
    const shouldRefresh = (now - lastTrendingRefreshTime) > oneDayInMilliseconds;
    
    // Get the trending section from the dropdown
    const trendingSection = document.querySelector('.dropdown-section:nth-of-type(1)');
    const trendingMusicList = trendingSection.querySelector('.music-list');
    
    // Clear existing content
    trendingMusicList.innerHTML = '';
    
    // Base trending songs
    const baseTrendingSongs = [
        { name: "Bohemian Rhapsody", path: "assets/musics/single_tracks/bohemian_rhapsody.mp3", plays: 1243 },
        { name: "Nocturne in D-flat Major, Op. 27 No. 2", path: "assets/musics/single_tracks/nocturne_8.mp3", plays: 982 },
        { name: "Liebestraum No. 3", path: "assets/musics/single_tracks/liebestraume_no_3.mp3", plays: 876 },
        { name: "Calm Down - Rema", path: "assets/musics/single_tracks/calm_down.mp3", plays: 745 },
        { name: "Nocturne in E-flat Major, Op. 9 No. 2", path: "assets/musics/single_tracks/nocturne_2.mp3", plays: 721 },
        { name: "Tourner Dans Le Vide - Indila", path: "assets/musics/single_tracks/legend_mode_theme_song.mp3", plays: 698 },
        { name: "Etude in C-sharp Minor, Op. 10 No. 4", path: "assets/musics/single_tracks/etudes_4.mp3", plays: 651 },
        { name: "Memory Reboot", path: "assets/musics/single_tracks/memory_reboot.mp3", plays: 589 },
        { name: "Missing You - 具島直子", path: "assets/musics/single_tracks/missing_you.mp3", plays: 534 },
        { name: "Nocturne in C Minor, Op. 48 No. 1", path: "assets/musics/single_tracks/nocturne_13.mp3", plays: 498 }
    ];
    
    let trendingSongs = [];
    
    if (shouldRefresh) {
        // If refresh is needed, update play counts and possibly reorder songs
        trendingSongs = refreshTrendingSongs(baseTrendingSongs);
        
        // Save the refresh time
        localStorage.setItem('lastTrendingRefreshTime', now.toString());
        lastTrendingRefreshTime = now;
    } else {
        // Load stored trending songs if available, otherwise use base list
        const storedTrendingSongs = localStorage.getItem('trendingSongs');
        trendingSongs = storedTrendingSongs ? JSON.parse(storedTrendingSongs) : baseTrendingSongs;
    }
    
    // Create the trending songs container with a cleaner design
    const trendingContainer = document.createElement('div');
    trendingContainer.className = 'trending-songs-container';
    
    // Add title with last refresh info
    const trendingTitle = document.createElement('div');
    trendingTitle.className = 'trending-title';
    
    // Format the refresh date
    const refreshDate = new Date(parseInt(lastTrendingRefreshTime));
    const dateOptions = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDate = refreshDate.toLocaleDateString('en-US', dateOptions);
    
    trendingTitle.innerHTML = `Hot Tracks <span class="refresh-time">Updated: ${formattedDate}</span>`;
    trendingContainer.appendChild(trendingTitle);
    
    // Add songs
    trendingSongs.forEach((song, index) => {
        const songElement = document.createElement('div');
        songElement.className = 'trending-song-item';
        songElement.innerHTML = `
            <span class="trending-rank">${index + 1}</span>
            <span class="trending-song-name">${song.name}</span>
            <span class="trending-plays">${song.plays}</span>
        `;
        
        // Make the entire row clickable
        songElement.addEventListener('click', function() {
            backgroundAudio.src = song.path;
            playAudio();
            typeText(`Now Playing: ${song.name}`);
            
            // Increment play count when played
            song.plays++;
            saveTrendingSongs(trendingSongs);
        });
        
        trendingContainer.appendChild(songElement);
    });
    
    // Add the container to the trending section
    trendingMusicList.appendChild(trendingContainer);
    
    // Add styles for the trending section
    const trendingStyles = document.createElement('style');
    trendingStyles.textContent = `
        .trending-songs-container {
            padding: 5px 0;
        }
        
        .trending-title {
            font-size: 0.8em;
            color: #ff0000; /* Changed from rgb(0, 0, 0) to red */
            margin-bottom: 8px;
            font-weight: bold;
            text-align: center;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .refresh-time {
            font-size: 0.7em;
            color: #aaa;
            font-weight: normal;
        }
        
        .trending-song-item {
            display: flex;
            align-items: center;
            padding: 6px 8px;
            margin: 3px 0;
            border-radius: 4px;
            background-color: #007BFF;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        
        .trending-song-item:hover {
            background-color: #25d92b;
        }
        
        .trending-rank {
            font-weight: bold;
            margin-right: 8px;
            color:rgb(255, 255, 255);
            min-width: 15px;
            text-align: center;
        }
        
        .trending-song-name {
            flex-grow: 1;
            font-size: 0.7em;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .trending-plays {
            font-size: 0.6em;
            color: #aaa;
            margin-left: 8px;
        }
        
        /* Override the display none for trending section */
        .dropdown-section:nth-of-type(1) .music-list {
            display: block;
            max-height: 300px;
            overflow-y: auto;
        }
        
        /* Mobile adjustments */
        @media screen and (max-width: 780px) {
            .trending-song-name {
                font-size: 0.65em;
            }
            
            .trending-plays {
                font-size: 0.55em;
            }
            
            .refresh-time {
                font-size: 0.6em;
            }
        }
    `;
    document.head.appendChild(trendingStyles);
    
    // Show the trending music list by default
    trendingMusicList.style.display = 'block';
    trendingSection.querySelector('h3 .expand-tab-1').textContent = '▲';
    
    // Set up hover effects for the song items
    setupTrendingSongHoverEffects();
}

// Function to refresh trending songs list (randomize plays slightly and reorder)
function refreshTrendingSongs(baseSongs) {
    // Create a copy of the base songs
    const refreshedSongs = JSON.parse(JSON.stringify(baseSongs));
    
    // Randomize play counts slightly to simulate activity
    refreshedSongs.forEach(song => {
        // Generate a random change between -15% and +30%
        const changePercent = (Math.random() * 45) - 15; // -15% to +30%
        const changeAmount = Math.floor(song.plays * (changePercent / 100));
        song.plays += changeAmount;
        
        // Ensure play count doesn't go below a minimum threshold
        song.plays = Math.max(song.plays, 100);
    });
    
    // Sort by play count (descending)
    refreshedSongs.sort((a, b) => b.plays - a.plays);
    
    // Save the updated list
    saveTrendingSongs(refreshedSongs);
    
    return refreshedSongs;
}

// Function to save trending songs to localStorage
function saveTrendingSongs(songs) {
    localStorage.setItem('trendingSongs', JSON.stringify(songs));
}

// Check trending songs refresh on page load
document.addEventListener('DOMContentLoaded', function() {
    // Other initialization code...
    
    // Set initial refresh time if not set
    if (!lastTrendingRefreshTime || lastTrendingRefreshTime === 0) {
        lastTrendingRefreshTime = Date.now();
        localStorage.setItem('lastTrendingRefreshTime', lastTrendingRefreshTime.toString());
    }
    
    // Populate trending songs
    populateTrendingSongs();
    
    // Hide other sections in the dropdown initially
    const dropdownSections = document.querySelectorAll('.dropdown-section:not(:first-child)');
    dropdownSections.forEach(section => {
        section.querySelector('.music-list').style.display = 'none';
    });
    
    // Set a daily check for trending refresh
    setInterval(() => {
        const now = Date.now();
        const oneDayInMilliseconds = 24 * 60 * 60 * 1000; 
        if ((now - lastTrendingRefreshTime) > oneDayInMilliseconds) {
            console.log("24 hours passed since last trending refresh, refreshing now...");
            populateTrendingSongs();
        }
    }, 60 * 60 * 1000); // Check every hour
});

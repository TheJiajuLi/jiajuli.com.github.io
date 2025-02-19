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

// First, declare all the music mappings
const musicMapping = {
    'assets/musics/single_tracks/nocturne_8.mp3': 'Nocturne in D-flat Major, Op. 27 No. 2',
    'assets/musics/single_tracks/legend_mode_theme_song.mp3': 'Tourner Dans Le Vide-Indila',
    'assets/musics/single_tracks/bohemian_rhapsody.mp3': 'Bohemian Rhapsody',
};

const chopin_nocturnes = {
    'https://s1.aigei.com/src/aud/mp3/4a/4ae691f3b8974fcfba4715b4e227fa1a.mp3?e=1739932560&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:fFITDgU9yR8HOsPwDZI7fkhPL1M=': 'Nocturne No. 13 in c Minor Op. 48-1',
    'https://s1.aigei.com/src/aud/mp3/12/126cafd69b894aef9683273299a51ae3.mp3?e=1739940540&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:0JFqIsYd77VjkDxqFFZYbysEiYM=': 'Nocturne No. 11 in g Minor Op. 37-1',
    'https://s1.aigei.com/src/aud/mp3/0e/0eead5b24f954f0889f0d30f4faafd50.mp3?e=1739940720&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:qvwqeIMMxt_uFoug776bLXHClKU=': 'Nocturne No. 04 in F Major Op. 15-1',
    'https://s1.aigei.com/src/aud/mp3/21/215ba26474a842ca92031e6fe0ca8e27.mp3?e=1739940840&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:2JQwtE3fJXmOZ3hRkDdRFoyqYxk=': 'Nocturne No. 14 in f Sharp Minor Op. 48-2',
    'https://s1.aigei.com/src/aud/mp3/a1/a1f88e3ae83e45b48c53dc141d14c0da.mp3?e=1739940840&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:ZfT3olZsIXHYUjJysRTxNP1Mm5o=': 'Nocturne No. 09 in B Major Op. 32-1',
    'https://s1.aigei.com/src/aud/mp3/ad/ad3dad5fc88949c7b42c4cccf111be49.mp3?e=1739940900&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:Aq6ILai9DSnxMybL9S4ibJOrVpE=': 'Nocturne No. 19 in e Minor Op. 72-1',
    'https://s1.aigei.com/src/aud/mp3/cf/cfdbd2c559544060aab196012c4d260c.mp3?e=1739940900&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:S7SceIUjPPSLYy4kw0vDGhtv6h0=': 'Nocturne No. 15 in f Minor Op. 55-1',
    'https://s1.aigei.com/src/aud/mp3/fb/fb7fed8dbd504650a50d86caff75e025.mp3?e=1739940900&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:MjL1AThww2uQHrvXKXUJY5rT4dk=': 'Nocturne No. 05 in F Sharp Major Op. 15-2',
    'https://s1.aigei.com/src/aud/mp3/d8/d8de8161b512456d890c6d9a489eba5a.mp3?e=1739940960&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:KfXiJHVtxz3mCXbZitHdONg-b9s=': 'Nocturne No. 06 in g Minor Op. 15-3',
    'https://s1.aigei.com/src/aud/mp3/0b/0bc7cc2b48e44c8b8510485c5660927e.mp3?e=1739940960&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:Q7eiIAoShfsOf8D9gZbNiwpMluE=': 'Nocturne No. 20 in c Sharp Minor Posth',
    'https://s1.aigei.com/src/aud/mp3/2d/2d6b52dcc2d2411f9d61af970a9595f5.mp3?e=1739940960&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:U93fHJoFi9Qhwt_C591HShzSstg=': 'Nocturne No. 18 in E Major Op. 62-2',
    'https://s1.aigei.com/src/aud/mp3/55/55ef0dad15864f62bd7cb5e02193728e.mp3?e=1739941020&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:aoGmNBI6BJlul3Cq8XnzMW2YCVg=': 'Nocturne No. 16 in E Flat Major Op. 55-2',
    'https://s1.aigei.com/src/aud/mp3/71/710454cf9fd44b8abbd43a1f47a80ca4.mp3?e=1739941020&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:cZ6LvQF6G_0NcvsiStupkSAvmlI=': 'Nocturne No. 17 in B Major Op. 62-1',
    'https://s1.aigei.com/src/aud/mp3/04/040985bccd7c48c68848da0b37a81227.mp3?e=1739941080&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:rO4UpNNZH8OggOhNtXIqxPz5s0w=': 'Nocturne No. 10 in A Flat Major Op. 32-2',
    'https://s1.aigei.com/src/aud/mp3/f0/f0ddccc3d8a644e1a9f5d9ad54ce9d76.mp3?e=1739941080&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:wDdgLeXqqmtxxbSmOhYIhsgUGBo=': 'Nocturne No. 12 in G Major Op. 37-2',
    'https://s1.aigei.com/src/aud/mp3/08/083192ff7c3341b5aea65c251d7fd02a.mp3?e=1739941080&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:N3Avu9dw99wcWo5DtU_5qpC3Dqk=': 'Nocturne No. 07 in c Sharp Minor Op. 27-1',
    'https://s1.aigei.com/src/aud/mp3/2c/2c58b944cb304e1da0172af3c6967188.mp3?e=1739941140&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:a7risHZ4izLnUODdKgLfv31fGKo=': 'Nocturne No. 08 in D Flat Major Op. 27-2'

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
}

// Add error handling for audio playback
function playAudio() {
    backgroundAudio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
    musicModeCd.classList.add('spinning');
    console.log('Playing audio:', backgroundAudio.src);
}

function pauseAudio() {
    backgroundAudio.pause();
    musicModeCd.classList.remove('spinning');
    console.log('Pausing audio');
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
            typeText("Command not recognized. Type 'quick tour' for a website tour.");
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

let audio = document.getElementById("audioTrack");
let cd = document.getElementById("cd");
let videoToggleButton = document.getElementById("videoToggleButton"); // Renamed from stopButton
let backgroundAudio = document.getElementById('backgroundAudio');
let messageBox = document.getElementById('music-intro');
let dropdownContent = document.querySelector('.dropdown-content');
let dropbtn = document.querySelector('.dropbtn');
let isDropdownOpen = false;
let legendModeButton = document.getElementById('legendModeButton');
let classicalModeButton = document.getElementById('ClassicalModeButton');
let typingText = document.getElementById('typingText');
let exploreButton = document.getElementById('exploreButton');
let typingTimeout;
let musicListElement = document.querySelector('.music-list'); // Corrected selector
let body = document.querySelector('body');
let videoContainer = document.getElementById('videoContainer');
let legendVideo = document.getElementById('legendVideo');
let videoBackground = document.getElementById('videoBackground'); // Add this line
let exitLegendModeButton = document.getElementById('exitLegendModeButton');
let exitClassicalModeButton = document.getElementById('exitClassicalModeButton');
let cdContainer = document.getElementById('cdContainer');
let copyrightContainer = document.querySelector('.copyright-container');
let jiajuImage = document.getElementById('jiaju_li');
let jiajuMessageBox = document.getElementById('jiaju.jpg');
let isMobileView = false;
const viewSwitchButton = document.getElementById('viewSwitchButton');
const stylesheetLink = document.getElementById('stylesheet');
const profileImage = document.getElementById('profileImage'); // Get the profile image

if (viewSwitchButton) {
    viewSwitchButton.addEventListener('click', () => {
        const img = viewSwitchButton.querySelector('img');
        if (isMobileView) {
            stylesheetLink.href = 'style.css';
            img.src = 'assets/images/mobile_view.png';
            img.alt = 'Mobile View';
        } else {
            stylesheetLink.href = 'style-mobile.css';
            img.src = 'assets/images/desktop_view.png';
            img.alt = 'Desktop View';
        }
        isMobileView = !isMobileView;

        // Add fadeIn animation to the profile image
        profileImage.classList.add('fade-in');
        setTimeout(() => {
            profileImage.classList.remove('fade-in');
        }, 2000); // Remove the class after 2 seconds
    });
} else {
    console.error('viewSwitchButton not found in the document');
}

// Mapping of file paths to display names
const musicMapping = {
    'assets/musics/single_tracks/nocturne_2.wav': 'Nocturne in E-flat Major, Op. 9 No. 2',
    'assets/musics/single_tracks/claire_de_lune.wav': 'Debussy: Suite bergamasque. L. 75/3. Clair de lune',
    'assets/musics/single_tracks/liebestraume.wav': 'Liszt: Liebesträume in A-flat Major, S. 541/3',
    'assets/musics/single_tracks/sonata_no_8.wav': 'Beethoven: Piano Sonata No. 8 in C Minor, Op. 13/2',
    'assets/musics/single_tracks/nocturne_19.wav': 'Chopin: Nocturne No. 19 in E-Minor, Op. 72/1',
    'assets/musics/full_cd/chopin_nocturnes_cd1_pollini/audio.wav': 'Chopin: Nocturnes; CD 1; Op.9, Op. 15, Op. 27, Op. 32; Maurizio Pollini',
    'assets/musics/single_tracks/tourner_dans_le_vide.wav': 'Tourner dans le vide - Indila',
    'assets/musics/single_tracks/legend_mode_theme_song.mp3': 'Video Mode Theme Song',
    'assets/musics/single_tracks/bohemian_rhapsody.wav': 'Bohemian Rhapsody - Queen',
};

// Array of video URLs
const videoUrls = [
    'https://www.youtube.com/watch?v=UfBytG65dow',
    'https://www.youtube.com/embed/lpMGpoxq_9U?si=U1XJ5Aszbe4o9i6_',
    'https://www.youtube.com/embed/BX1WpL2VlhM?si=6m1lGxDCmeBXeOB6',
    'https://www.youtube.com/embed/-kBnCqwSO98?si=9Vd9ML9epOkthQsI'
];

let currentVideoIndex = 0;

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

function playAudio() {
    backgroundAudio.play();
    cd.style.animationPlayState = 'running';
    console.log('Playing audio:', backgroundAudio.src);
}

function pauseAudio() {
    backgroundAudio.pause();
    cd.style.animationPlayState = 'paused';
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

legendModeButton.addEventListener('click', function() {
    backgroundAudio.src = 'assets/musics/single_tracks/legend_mode_theme_song.mp3';
    backgroundAudio.onloadeddata = function() {
        playAudio();
    };
    console.log('Legend mode button clicked, playing audio:', backgroundAudio.src);
    legendModeButton.textContent = 'Video Mode';
    classicalModeButton.textContent = 'Music Mode'; // Reset the other button's text
    cd.src = 'assets/images/cd.png'; // Reset CD image
    body.style.backgroundImage = 'url("assets/images/legend_mode_background.jpg")'; // Change background image
    body.classList.add('legend-mode-active'); // Add class to body for legend mode
    body.classList.add('hide-dropdown'); // Add class to hide dropdown content
    hideExploreButton(); // Hide the explore button
    videoContainer.style.display = 'block';
    legendVideo.src = videoUrls[currentVideoIndex];
    document.querySelector('h1').style.display = 'none';
    document.querySelectorAll('p').forEach(p => p.style.display = 'none');
    // Hide only the profile image (jiaju_li.jpg)
    if (profileImage) {
        profileImage.style.display = 'none';
    }
    videoToggleButton.style.display = 'block'; // Ensure video toggle button is visible
    videoToggleButton.textContent = 'Play the Video'; // Change video toggle button text to control video
    videoToggleButton.onclick = toggleVideo; // Change video toggle button event to control video
    document.getElementById('videoToggleButton').classList.remove('pulse'); // Remove pulse animation
    exitLegendModeButton.style.display = 'block';
    copyrightContainer.style.display = 'none'; // Hide copyright container
});

classicalModeButton.addEventListener('click', function() {
    backgroundAudio.src = 'assets/musics/full_cd/chopin_nocturnes_cd1_pollini/audio.wav';
    backgroundAudio.onloadeddata = function() {
        playAudio();
    };
    console.log('Classical mode button clicked, playing audio:', backgroundAudio.src);
    classicalModeButton.textContent = 'Music Mode';
    legendModeButton.textContent = 'Legend Mode'; // Reset the other button's text
    cd.src = 'assets/images/cd_classical.png'; // Change CD image
    body.style.backgroundImage = 'url("assets/images/baroque_background_2.jpg")'; // Change background image
    body.classList.add('classical-mode-active'); // Add class to body for classical mode
    body.classList.add('hide-dropdown'); // Add class to hide dropdown content
    hideExploreButton(); // Hide the explore button
    videoContainer.style.display = 'none'; // Hide video container
    legendVideo.src = ''; // Clear video source
    document.querySelector('h1').style.display = 'none';
    document.querySelectorAll('p').forEach(p => p.style.display = 'none');
    // Hide only the profile image (jiaju_li.jpg)
    if (profileImage) {
        profileImage.style.display = 'none';
    }
    document.getElementById('videoToggleButton').classList.remove('pulse'); // Remove pulse animation
    videoToggleButton.style.display = 'none'; // Makes video toggle button invisible in Classical Mode
    exitLegendModeButton.style.display = 'block'; // Hide legend mode exit button
    copyrightContainer.style.display = 'none'; // Hide copyright container
});

cd.addEventListener('click', function() {
    if (backgroundAudio.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
});

cd.addEventListener('mouseover', function() {
    cdMessageBox.style.display = 'block';
});

cd.addEventListener('mouseout', function() {
    cdMessageBox.style.display = 'none';
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

let typingPaused = false; // Flag to track if typing is paused
let typingActive = false; // Flag to track if typing is active
let typingTextValue = ''; // Store the current text value
let currentTextSequence = ''; // Global text being typed
let currentTextIndex = 0;     // Global index into the text sequence

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

function toggleVideo() {
    const iframe = videoContainer.querySelector('iframe');
    let src = iframe.src;
    if (videoToggleButton.textContent === 'Play the Video') {
        if (!src.includes('autoplay=1')) {
            src += src.includes('?') ? '&autoplay=1' : '?autoplay=1';
        }
        iframe.src = src;
        videoToggleButton.textContent = 'Play the Next Video';
    } else {
        currentVideoIndex++;
        if (currentVideoIndex < videoUrls.length) {
            legendVideo.src = videoUrls[currentVideoIndex];
            videoToggleButton.textContent = 'Play the Video';
        } else {
            currentVideoIndex = 0;
            exitLegendModeButton.click(); // Exit legend mode when all videos are finished
        }
    }
}

function resetAnimations() {
    body.classList.add('reset-animations');
    setTimeout(() => {
        body.classList.remove('reset-animations');
    }, 10); // Adjust the delay as needed
}

// Function to stop video playback
function stopVideo() {
    const iframe = videoContainer.querySelector('iframe');
    if (iframe) {
        const src = iframe.src;
        iframe.src = ''; // Clear the src to stop the video
        iframe.src = src; // Reset the src to the original value
    }
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
    backgroundAudio.src = 'assets/musics/single_tracks/bohemian_rhapsody.wav';
    pauseAudio();
    console.log('Default audio set on load:', backgroundAudio.src);
    generateMusicList();
    displayUKTime(); // Display UK time on load
    setInterval(displayUKTime, 60000); // Update UK time every minute
});

exitLegendModeButton.addEventListener('click', function() {
    body.classList.remove('legend-mode-active');
    body.classList.remove('hide-dropdown');
    videoContainer.style.display = 'none';
    stopVideo();
    legendVideo.src = '';
    document.querySelector('h1').style.display = 'block';
    document.querySelectorAll('p').forEach(p => p.style.display = 'block');
    // Hide only the profile image (jiaju_li.jpg)
    if (profileImage) {
        profileImage.style.display = 'block';
    }
    exitLegendModeButton.style.display = 'none';
    exitClassicalModeButton.style.display = 'none';
    videoToggleButton.style.display = 'none';
    videoToggleButton.textContent = 'Play the Video'; // Corrected text
    // Restore the video toggle functionality
    videoToggleButton.onclick = toggleVideo;
    backgroundAudio.pause();
    legendModeButton.textContent = 'Enter the Legend Mode';
    classicalModeButton.textContent = 'Classical Mode';
    cd.src = 'assets/images/cd.png';
    cd.style.animationPlayState = 'paused';
    body.style.backgroundImage = 'url("assets/images/new_york_city.jpg")';
    body.classList.remove('classical-mode-active');
    currentVideoIndex = 0;
    resetAnimations();
    showExploreButton();
    copyrightContainer.style.display = 'block';
    updateHomePage(); // Call updateHomePage here!
    setInterval(updateHomePage, 60000); // Update every minute
});

exitClassicalModeButton.addEventListener('click', function() {
    body.classList.remove('legend-mode-active');
    body.classList.remove('hide-dropdown');
    videoContainer.style.display = 'none';
    stopVideo();
    legendVideo.src = '';
    document.querySelector('h1').style.display = 'block';
    document.querySelectorAll('p').forEach(p => p.style.display = 'block');
    // Hide only the profile image (jiaju_li.jpg)
    if (profileImage) {
        profileImage.style.display = 'block';
    }
    exitLegendModeButton.style.display = 'none';
    exitClassicalModeButton.style.display = 'none';
    videoToggleButton.style.display = 'none';
    videoToggleButton.textContent = 'Play the Video'; // Corrected text
    // Restore the video toggle functionality
    videoToggleButton.onclick = toggleVideo;
    backgroundAudio.pause();
    typeText('You are now back to the home page');
    legendModeButton.textContent = 'Enter the Legend Mode';
    classicalModeButton.textContent = 'Classical Mode';
    cd.src = 'assets/images/cd.png';
    cd.style.animationPlayState = 'paused';
    body.style.backgroundImage = 'url("assets/images/new_york_city.jpg")';
    body.classList.remove('classical-mode-active');
    currentVideoIndex = 0;
    resetAnimations();
    showExploreButton();
    copyrightContainer.style.display = 'block';
    updateHomePage(); // Call updateHomePage here!
    setInterval(updateHomePage, 60000); // Update every minute
});

legendVideo.addEventListener('ended', function() {
    currentVideoIndex++;
    if (currentVideoIndex < videoUrls.length) {
        legendVideo.src = videoUrls[currentVideoIndex];
        videoToggleButton.textContent = 'Play the Video';
    } else {
        currentVideoIndex = 0;
        exitLegendModeButton.click(); // Exit legend mode when all videos are finished
    }
});

videoBackground.addEventListener('ended', function() {
    currentVideoIndex++;
    if (currentVideoIndex < videoUrls.length) {
        videoBackground.innerHTML = `
            <iframe id="legendVideo" width="1160" height="630" src="${videoUrls[currentVideoIndex]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
        videoToggleButton.textContent = 'Play the Video';
    } else {
        currentVideoIndex = 0;
        exitLegendModeButton.click(); // Exit legend mode when all videos are finished
    }
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

profileImage.addEventListener('mouseover', function() {
    typeText('Jiaju Li at O2, InterContinental, Canary Wharf, London Feb 2025');
});

profileImage.addEventListener('mouseout', function() {
    clearTypeText();
});

cd.addEventListener('mouseover', function() {
    typeText('You can click the CD to play or pause the music');
});

cd.addEventListener('mouseout', function() {
    clearTypeText();
});

legendModeButton.addEventListener('mouseover', function() {
    if (!body.classList.contains('legend-mode-active') && 
       !body.classList.contains('classical-mode-active')) {
        typeText('Enter the Video Mode');
    } else if (body.classList.contains('legend-mode-active') && 
       !body.classList.contains('classical-mode-active')) {
        typeText('You are now in Video Mode');
    }
});

classicalModeButton.addEventListener('mouseover', function() {
    if (!body.classList.contains('classical-mode-active') && 
       !body.classList.contains('legend-mode-active')) {
        typeText('Enter the Classical Mode');
    } else if (body.classList.contains('classical-mode-active') && 
       !body.classList.contains('legend-mode-active')) {
        typeText('You are now in Classical Mode');
    }
});

legendModeButton.addEventListener('mouseout', function() {
    if (!body.classList.contains('legend-mode-active') && 
    !body.classList.contains('classical-mode-active')) {
        setTimeout(clearTypeText, 1500); // Delay clearTypeText by 1.5 seconds
    }
    if (body.classList.contains('legend-mode-active') && 
       !body.classList.contains('classical-mode-active')) {
        typeText('');
    }
});

classicalModeButton.addEventListener('oneclick', function() {
    if (!body.classList.contains('classical-mode-active') && 
        !body.classList.contains('legend-mode-active')) {
        setTimeout(clearTypeText, 1500);
    }
});

viewSwitchButton.addEventListener('mouseover', function() {
    typeText('Click the button to switch between desktop and mobile view');
});

viewSwitchButton.addEventListener('mouseout', function() {
    clearTypeText();
});

function displayCurrentSong() {
    if (body.classList.contains('legend-mode-active')) {
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

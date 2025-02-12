let audio = document.getElementById("audioTrack");
let cd = document.getElementById("cd");
let stopButton = document.getElementById("stopButton");
let backgroundAudio = document.getElementById('backgroundAudio');
let messageBox = document.getElementById('music-intro');
let messageBoxParagraphs = messageBox.querySelectorAll('p');
let messageBoxTimeout;
let dropdownContent = document.querySelector('.dropdown-content');
let dropbtn = document.querySelector('.dropbtn');
let isDropdownOpen = false;
let legendModeButton = document.getElementById('legendModeButton');
let classicalModeButton = document.getElementById('ClassicalModeButton');
let typingText = document.getElementById('typingText');
let exploreButton = document.getElementById('exploreButton');
let typingTimeout;
let musicList = document.getElementById('musicList');
let body = document.querySelector('body');
let videoContainer = document.getElementById('videoContainer');
let legendVideo = document.getElementById('legendVideo');
let exitLegendModeButton = document.getElementById('exitLegendModeButton');
let exitClassicalModeButton = document.getElementById('exitClassicalModeButton');
let cdContainer = document.getElementById('cdContainer');
let copyrightContainer = document.querySelector('.copyright-container');
let profileImage = document.getElementById('jiaju_li');
let jiajuMessageBox = document.getElementById('jiaju.jpg');

// Mapping of file paths to display names
const musicMapping = {
    'assets/musics/single_tracks/nocturne_2.wav': 'Nocturne in E-flat Major, Op. 9 No. 2',
    'assets/musics/single_tracks/claire_de_lune.wav': 'Debussy: Suite bergamasque. L. 75/3. Clair de lune',
    'assets/musics/single_tracks/liebestraume.wav': 'Liszt: Liebesträume in A-flat Major, S. 541/3',
    'assets/musics/single_tracks/sonata_no_8.wav': 'Beethoven: Piano Sonata No. 8 in C Minor, Op. 13/2',
    'assets/musics/single_tracks/nocturne_19.wav': 'Chopin: Nocturne No. 19 in E-Minor, Op. 72/1'
};

// Array of video URLs
const videoUrls = [
    'https://www.youtube.com/embed/lpMGpoxq_9U?si=U1XJ5Aszbe4o9i6_',
    'https://www.youtube.com/embed/ne8GID6OmaI?si=XqvMiKoct3Jv-fbE',
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

// Generate the music list on page load
window.addEventListener('load', function() {
    backgroundAudio.src = 'assets/musics/single_tracks/tourner_dans_le_vide.wav';
    console.log('Default audio set on load:', backgroundAudio.src);
    generateMusicList();
});

function playAudio() {
    backgroundAudio.play();
    cd.style.animationPlayState = 'running';
    stopButton.textContent = 'Pause';
    console.log('Playing audio:', backgroundAudio.src);
}

function pauseAudio() {
    backgroundAudio.pause();
    cd.style.animationPlayState = 'paused';
    stopButton.textContent = 'Play';
    console.log('Pausing audio');
}

legendModeButton.addEventListener('click', function() {
    const legendModeText = 'The Legend is Now Began...';
    backgroundAudio.src = 'assets/musics/single_tracks/legend_mode_theme_song.mp3';
    playAudio();
    console.log('Legend mode button clicked, playing audio:', backgroundAudio.src);
    typeText(legendModeText);
    legendModeButton.textContent = 'You Are Now in Legend Mode';
    classicalModeButton.textContent = 'Classical Mode'; // Reset the other button's text
    cd.src = 'assets/images/cd.png'; // Reset CD image
    body.classList.add('legend-mode-active'); // Add class to body for legend mode
    videoContainer.style.display = 'block';
    legendVideo.src = videoUrls[currentVideoIndex];
    document.querySelector('h1').style.display = 'none';
    document.querySelectorAll('p').forEach(p => p.style.display = 'none');
    document.querySelector('img').style.display = 'none';
    stopButton.textContent = 'Play the Video'; // Change stop button text to control video
    stopButton.onclick = toggleVideo; // Change stop button event to control video
    exitLegendModeButton.style.display = 'block';
    exitClassicalModeButton.style.display = 'none'; // Hide classical mode exit button
    copyrightContainer.style.display = 'none'; // Hide copyright container
});

classicalModeButton.addEventListener('click', function() {
    const classicalModeText = 'You Are Now Back to the 19th Century';
    backgroundAudio.src = 'assets/musics/single_tracks/sonata_no_8.wav';
    playAudio();
    console.log('Classical mode button clicked, playing audio:', backgroundAudio.src);
    typeText(classicalModeText);
    classicalModeButton.textContent = 'You Are Now in Classical Mode';
    legendModeButton.textContent = 'Enter the Legend Mode'; // Reset the other button's text
    cd.src = 'assets/images/cd_classical.png'; // Change CD image
    body.style.backgroundImage = 'url("assets/images/baroque_background_2.jpg")'; // Change background image
    body.classList.add('classical-mode-active'); // Add class to body for classical mode
    videoContainer.style.display = 'none'; // Hide video container
    legendVideo.src = ''; // Clear video source
    document.querySelector('h1').style.display = 'block';
    document.querySelectorAll('p').forEach(p => p.style.display = 'block');
    document.querySelector('img').style.display = 'block';
    stopButton.textContent = 'Pause'; // Reset stop button text
    stopButton.onclick = function() {
        if (backgroundAudio.paused) {
            playAudio();
        } else {
            pauseAudio();
        }
    };
    exitClassicalModeButton.style.display = 'block';
    exitLegendModeButton.style.display = 'none'; // Hide legend mode exit button
    copyrightContainer.style.display = 'none'; // Hide copyright container
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
    typingText.style.display = 'block';
    typingText.value = ''; // Reset text content before starting the typing animation
    let index = 0;
    clearTimeout(typingTimeout); // Clear existing timeout
    function type() {
        if (index < text.length) {
            typingText.value += text.charAt(index);
            typingText.scrollLeft = typingText.scrollWidth; // Scroll to the end of the text
            index++;
            typingTimeout = setTimeout(type, 50); // Adjust typing speed for smoother animation
        }
    }
    type();
}

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
        console.log('Music link clicked, playing audio:', backgroundAudio.src);
    });
});

stopButton.addEventListener('click', function() {
    if (backgroundAudio.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
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

dropbtn.addEventListener('mouseover', function() {
    clearTimeout(messageBoxTimeout);
    messageBox.style.display = 'block';
    messageBox.classList.remove('fade-out');
    messageBoxParagraphs.forEach((p, index) => {
        setTimeout(() => {
            p.style.display = 'block';
        }, index * 500);
    });
});

dropbtn.addEventListener('mouseout', function() {
    messageBoxTimeout = setTimeout(() => {
        messageBox.classList.add('fade-out');
        setTimeout(() => {
            messageBox.style.display = 'none';
            messageBoxParagraphs.forEach(p => {
                p.style.display = 'none';
            });
        }, 2000);
    }, 500); // Delay before starting to fade out
});

dropdownContent.addEventListener('mouseover', function() {
    clearTimeout(messageBoxTimeout);
    messageBox.style.display = 'none';
    messageBoxParagraphs.forEach(p => {
        p.style.display = 'none';
    });
});

dropdownContent.addEventListener('mouseout', function() {
    messageBoxTimeout = setTimeout(() => {
        messageBox.classList.add('fade-out');
        setTimeout(() => {
            messageBox.style.display = 'none';
            messageBoxParagraphs.forEach(p => {
                p.style.display = 'none';
            });
        }, 2000);
    }, 500); // Delay before starting to fade out
});

messageBox.addEventListener('click', function() {
    messageBox.style.display = 'none';
    messageBoxParagraphs.forEach(p => {
        p.style.display = 'none';
    });
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
    if (stopButton.textContent === 'Play') {
        if (!src.includes('autoplay=1')) {
            src += src.includes('?') ? '&autoplay=1' : '?autoplay=1';
        }
        iframe.src = src;
        stopButton.textContent = 'Pause';
    } else {
        src = src.replace('&autoplay=1', '').replace('?autoplay=1', '');
        iframe.src = src;
        stopButton.textContent = 'Play the Video';
    }
}

exitLegendModeButton.addEventListener('click', function() {
    body.classList.remove('legend-mode-active'); // Remove legend mode class
    videoContainer.style.display = 'none'; // Hide video container
    legendVideo.src = ''; // Clear video source
    document.querySelector('h1').style.display = 'block';
    document.querySelectorAll('p').forEach(p => p.style.display = 'block');
    document.querySelector('img').style.display = 'block';
    exitLegendModeButton.style.display = 'none';
    stopButton.textContent = 'Play'; // Reset stop button text
    stopButton.onclick = function() {
        if (backgroundAudio.paused) {
            playAudio();
        } else {
            pauseAudio();
        }
    };
    backgroundAudio.pause(); // Stop background audio
    backgroundAudio.src = 'assets/musics/single_tracks/tourner_dans_le_vide.wav'; // Reset to default audio
    typeText('You are now back to the home page'); // Change typing text back
    legendModeButton.textContent = 'Enter the Legend Mode'; // Reset legend mode button text
    classicalModeButton.textContent = 'Classical Mode'; // Reset classical mode button text
    cd.src = 'assets/images/cd.png'; // Reset CD image
    cd.style.animationPlayState = 'paused'; // Stop CD animation
    body.style.backgroundImage = 'url("assets/images/baroque_background.jpg")'; // Reset background image
    body.classList.remove('classical-mode-active'); // Remove classical mode class
    currentVideoIndex = 0; // Reset video index
    copyrightContainer.style.display = 'block'; // Show copyright container
});

exitClassicalModeButton.addEventListener('click', function() {
    body.classList.remove('classical-mode-active'); // Remove classical mode class
    videoContainer.style.display = 'none'; // Hide video container
    legendVideo.src = ''; // Clear video source
    document.querySelector('h1').style.display = 'block';
    document.querySelectorAll('p').forEach(p => p.style.display = 'block');
    document.querySelector('img').style.display = 'block';
    exitClassicalModeButton.style.display = 'none';
    stopButton.textContent = 'Play'; // Reset stop button text
    stopButton.onclick = function() {
        if (backgroundAudio.paused) {
            playAudio();
        } else {
            pauseAudio();
        }
    };
    backgroundAudio.pause(); // Stop background audio
    backgroundAudio.src = 'assets/musics/single_tracks/tourner_dans_le_vide.wav'; // Reset to default audio
    typeText('You Are Now Back to the Home Page'); // Change typing text back
    legendModeButton.textContent = 'Enter the Legend Mode'; // Reset legend mode button text
    classicalModeButton.textContent = 'Classical Mode'; // Reset classical mode button text
    cd.src = 'assets/images/cd.png'; // Reset CD image
    cd.style.animationPlayState = 'paused'; // Stop CD animation
    body.style.backgroundImage = 'url("assets/images/baroque_background.jpg")'; // Reset background image
    currentVideoIndex = 0; // Reset video index
    copyrightContainer.style.display = 'block'; // Show copyright container
});

videoBackground.addEventListener('ended', function() {
    currentVideoIndex++;
    if (currentVideoIndex < videoUrls.length) {
        videoBackground.innerHTML = `
            <iframe id="legendVideo" width="1120" height="630" src="${videoUrls[currentVideoIndex]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
        stopButton.textContent = 'Play the Video';
    } else {
        currentVideoIndex = 0;
        exitLegendModeButton.click(); // Exit legend mode when all videos are finished
    }
});

// Add event listeners for profile image hover
profileImage.addEventListener('mouseover', function() {
    jiajuMessageBox.style.display = 'block';
});

profileImage.addEventListener('mouseout', function() {
    jiajuMessageBox.style.display = 'none';
});
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
let LegendModeButton = document.getElementById('LegendModeButton');
let ClassicalModeButton = document.getElementById('ClassicalModeButton');
let typingText = document.getElementById('typingText');

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


LegendModeButton.addEventListener('click', function() {
    backgroundAudio.src = 'assets/musics/legend_mode_theme_song.mp3';
    playAudio();
    console.log('Legend mode button clicked, playing audio:', backgroundAudio.src);
});

ClassicalModeButton.addEventListener('click', function() {
    backgroundAudio.src = 'assets/musics/sonata_no_8.wav';
    playAudio();
    console.log('Classical mode button clicked, playing audio:', backgroundAudio.src);
    typeText('You Are Now Back to the 19th Century');
});

function typeText(text) {
    typingText.style.display = 'block';
    typingText.textContent = '';
    let index = 0;
    function type() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
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
        backgroundAudio.src = musicUrl;
        playAudio();
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

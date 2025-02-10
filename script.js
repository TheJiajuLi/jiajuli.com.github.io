let audio = document.getElementById("audioTrack");
let cd = document.getElementById("cd");
let stopButton = document.getElementById("stopButton");

function playAudio() {
    audio.play();
    cd.style.animationPlayState = 'running';
    stopButton.textContent = 'Pause';
}

function pauseAudio() {
    audio.pause();
    cd.style.animationPlayState = 'paused';
    stopButton.textContent = 'Play';
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
        const backgroundAudio = document.getElementById('backgroundAudio');
        backgroundAudio.src = musicUrl;
        backgroundAudio.play();
        cd.style.animationPlayState = 'running';
        stopButton.textContent = 'Pause';
    });
});

stopButton.addEventListener('click', function() {
    if (audio.paused && document.getElementById('backgroundAudio').paused) {
        playAudio();
        document.getElementById('backgroundAudio').play();
    } else {
        pauseAudio();
        document.getElementById('backgroundAudio').pause();
    }
});
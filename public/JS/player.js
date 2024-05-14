const playerButtons = document.querySelector('.player-buttons');
const play = playerButtons.children[0];
const pause = playerButtons.children[1];
const audio = document.querySelector('audio');
const duration = audio.duration;
const currentTime = audio.currentTime;
const playhead = document.querySelector('.playhead');
const timeline = document.querySelector('.timeline');
const currentTimeDisplay = document.getElementById('current-time');
const totalTimeDisplay = document.getElementById('total-time');
const volumeButtons = document.querySelector('.volume-buttons');
const volume = playerButtons.children[0];
const mute = playerButtons.children[1];

const togglePlayback = () => {
    if (audio.paused) {
        audio.play();
        playerButtons.classList.toggle('player-button-toggle');
    } else {
        audio.pause();
        playerButtons.classList.toggle('player-button-toggle');
    }
};

playerButtons.addEventListener('click', togglePlayback);

const audioEnd = () => {
    playerButtons.classList.toggle('player-button-toggle');
};

audio.onended = audioEnd;

audio.addEventListener('timeupdate', (event) => {
    const duration = audio.duration;
    const currentTime = audio.currentTime;
    const progress = (currentTime / duration) * 100;
    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    const totalMinutes = Math.floor(duration / 60);
    const totalSeconds = Math.floor(duration % 60);

    currentTimeDisplay.textContent = `${currentMinutes}:${
        currentSeconds < 10 ? '0' : ''
    }${currentSeconds}`;
    totalTimeDisplay.textContent = `${totalMinutes}:${
        totalSeconds < 10 ? '0' : ''
    }${totalSeconds}`;

    playhead.style.marginLeft = `${progress}%`;
});

timeline.addEventListener('click', (event) => {
    let offsetPercent = (event.offsetX / 190) * 100;
    let newCurrentTime = (offsetPercent / 100) * audio.duration;
    playhead.style.marginLeft = offsetPercent + '%';
    audio.currentTime = newCurrentTime;
});

let onTarget = false;

const slidePlayhead = (event) => {
    onTarget = true;
    let offsetPercent = `${(event.offsetX / 190) * 100}%`;
    playhead.addEventListener('mousemove', () => {
        playhead.style.marginLeft = offsetPercent;
    });
    playhead.addEventListener('mouseup', () => {
        if (onTarget == true) {
            playhead.style.marginLeft = offsetPercent;
            window.removeEventListener('mousemove', () => {});
        }
        onTarget = false;
    });
};

playhead.addEventListener('mousedown', slidePlayhead, false);

const toggleVolume = () => {
    console.log('clicked');
    if (audio.muted) {
        !audio.muted;
        volumeButtons.classList.toggle('volume-button-toggle');
    } else {
        audio.muted;
        volumeButtons.classList.toggle('volume-button-toggle');
    }
};

volumeButtons.addEventListener('click', toggleVolume);

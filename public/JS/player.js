const playButtons = document.querySelector('.play-buttons');
const play = playButtons.children[0];
const pause = playButtons.children[1];
const audio = document.querySelector('audio');
const duration = audio.duration;
const currentTime = audio.currentTime;
const playhead = document.querySelector('.playhead');
const timeline = document.querySelector('.timeline');
const currentTimeDisplay = document.getElementById('current-time');
const totalTimeDisplay = document.getElementById('total-time');
const volumeButtons = document.querySelector('.volume-buttons');
const volume = volumeButtons.children[0];
const mute = volumeButtons.children[1];
const songArtist = document.querySelectorAll('.song-artist');
const songTitle = document.querySelectorAll('.song-title');
const seekNext = document.querySelector('.next-track');
const songSrc = document.querySelectorAll('.song-source');
const trackListTitle = document.querySelectorAll('.tracklist-title');
const track = document.querySelectorAll('.track');

let trackIndex = 0;
songArtist[trackIndex].style.display = 'block';
songTitle[trackIndex].style.display = 'block';
audio.src = songSrc[trackIndex].innerHTML;
track[trackIndex].style.fontWeight = 'bold';

const currentTrack = () => {
    for (let i = 0; i < songTitle.length; i++) {
        if (
            songTitle[trackIndex].innerText.replace(/\s+/g, '') ==
            trackListTitle[i].innerText.replace(/\s+/g, '')
        ) {
            // console.log('current song = ' + trackListTitle[i].innerText);
            track[i - 1].style.fontWeight = 'normal';
            track[i].style.fontWeight = 'bold';
        }
    }
};

seekNext.addEventListener('click', () => {
    if (trackIndex < songArtist.length - 1) {
        songArtist[trackIndex].style.display = 'none';
        songTitle[trackIndex].style.display = 'none';
        console.log(audio);
        trackIndex += 1;
        songArtist[trackIndex].style.display = 'block';
        songTitle[trackIndex].style.display = 'block';
        audio.src = songSrc[trackIndex].innerHTML;
        currentTrack();
    } else {
        alert('No more songs!');
    }
});

const togglePlayback = () => {
    console.log(audio);
    if (audio.paused) {
        audio.play();
        playButtons.classList.toggle('play-button-toggle');
    } else {
        audio.pause();
        playButtons.classList.toggle('play-button-toggle');
    }
};

playButtons.addEventListener('click', togglePlayback);

const audioEnd = () => {
    playButtons.classList.toggle('play-button-toggle');
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

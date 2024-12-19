let audio;

export function playAudio() {
    if (!audio) {
        audio = new Audio('./assets/sempurna.mp3');
        audio.loop = true;
        audio.autoplay = true;

        const savedTime = sessionStorage.getItem('audioTime');
        if (savedTime) {
            audio.currentTime = parseFloat(savedTime);
        }
    }
    audio.play();
}

export function saveAudioPosition() {
    if (audio) {
        sessionStorage.setItem('audioTime', audio.currentTime);
    }
}

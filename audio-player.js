let audio;

// Fungsi untuk memutar audio
export function playAudio() {
  if (!audio) {
    audio = new Audio('./sempurna.mp3');
    audio.loop = true;

    const savedTime = sessionStorage.getItem('audioTime');
    if (savedTime) {
      audio.currentTime = parseFloat(savedTime);
    }
  }

  audio.play().catch(error => {
    console.error('Gagal memutar audio:', error);
  });
}

// Fungsi untuk menyimpan posisi audio
export function saveAudioPosition() {
  if (audio) {
    sessionStorage.setItem('audioTime', audio.currentTime);
  }
}

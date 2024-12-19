let audio;

// Fungsi untuk memulai pemutaran audio
export function playAudio() {
    if (!audio) {
        audio = new Audio('./sempurna.mp3');
        audio.loop = true; // Membuat audio terus berulang

        const savedTime = sessionStorage.getItem('audioTime');
        if (savedTime) {
            audio.currentTime = parseFloat(savedTime); // Mengatur posisi waktu yang disimpan
        }
    }

    audio.play().catch(error => {
        console.error('Gagal memutar audio:', error);
    });
}

// Fungsi untuk menyimpan posisi audio ketika pengguna meninggalkan halaman
export function saveAudioPosition() {
    if (audio) {
        sessionStorage.setItem('audioTime', audio.currentTime); // Menyimpan posisi waktu
    }
}

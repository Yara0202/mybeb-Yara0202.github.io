let audio;

document.getElementById('startButton').addEventListener('click', () => {
    if (!audio) {
        audio = new Audio('./sempurna.mp3');
        audio.loop = true;

        // Ambil waktu terakhir dari sessionStorage
        const savedTime = sessionStorage.getItem('audioTime');
        if (savedTime) {
            audio.currentTime = parseFloat(savedTime);
        }
    }
    audio.play().catch(error => {
        console.error('Gagal memutar audio:', error);
    });

    // Sembunyikan tombol setelah audio diputar
    document.getElementById('startButton').style.display = 'none';
});

// Simpan waktu audio saat halaman ditutup
window.addEventListener('beforeunload', () => {
    if (audio) {
        sessionStorage.setItem('audioTime', audio.currentTime);
    }
});

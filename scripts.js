document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById('toggle-menu');
    var nav = document.getElementById('mobile-nav');

    if (!toggle || !nav) {
        console.error('Navigation elements are missing on this page.');
        return;
    }

    // Inisialisasi posisi awal navigasi dan tombol
    nav.style.left = '-50%'; // Menyembunyikan navigasi
    toggle.style.left = '10px'; // Menempatkan tombol di posisi awal

    toggle.addEventListener('click', function() {
        // Cek apakah navigasi terbuka dan tutup/gulir sesuai
        if (nav.style.left === '0px') {
            nav.style.left = '-50%'; // Geser navigasi keluar
            toggle.style.left = '10px'; // Kembalikan tombol ke posisi awal
        } else {
            nav.style.left = '0px'; // Geser navigasi masuk
            toggle.style.left = 'calc(50% + 10px)'; // Geser tombol menu ke kanan
        }
    });
});

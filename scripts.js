document.getElementById('toggle-menu').addEventListener('click', function() {
    var nav = document.getElementById('mobile-nav');
    var toggle = document.getElementById('toggle-menu'); // Dapatkan tombol menu
    if (nav.style.left === '0px') {
        nav.style.left = '-50%'; // Geser navigasi keluar
        toggle.style.left = '10px'; // Kembalikan tombol menu ke posisi awal
    } else {
        nav.style.left = '0px'; // Geser navigasi masuk
        toggle.style.left = 'calc(50% + 10px)'; // Geser tombol menu ke kanan
    }
});

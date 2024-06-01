document.addEventListener('DOMContentLoaded', function() {
    var nav = document.getElementById('mobile-nav');
    var toggle = document.getElementById('toggle-menu');
    // Inisialisasi posisi awal jika belum diatur
    nav.style.left = nav.style.left || '-50%'; 
    toggle.style.left = toggle.style.left || '10px';

    toggle.addEventListener('click', function() {
        if (nav.style.left === '0px') {
            nav.style.left = '-50%';
            toggle.style.left = '10px';
        } else {
            nav.style.left = '0px';
            toggle.style.left = 'calc(50% + 10px)';
        }
    });
});

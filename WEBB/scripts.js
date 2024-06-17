document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('nav ul');
    const menuButton = document.createElement('button');
    menuButton.innerText = '☰';
    menuButton.style.fontSize = '24px';
    menuButton.style.background = 'none';
    menuButton.style.color = 'white';
    menuButton.style.border = 'none';
    menuButton.style.padding = '10px';
    menuButton.style.cursor = 'pointer';

    document.querySelector('header').insertBefore(menuButton, menu);
    menuButton.addEventListener('click', function() {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    // Initially hide the menu on mobile view
    menu.style.display = 'none';

    // Add window resize listener to show the menu on desktop view
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('videoPlayer');
    const muteButton = document.getElementById('muteButton');
    const fullscreenButton = document.getElementById('fullscreenButton');

    // Toggle mute and unmute
    muteButton.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            muteButton.innerText = 'Mute';
        } else {
            video.muted = true;
            muteButton.innerText = 'Unmute';
        }
    });

    // Handle fullscreen mode
    fullscreenButton.addEventListener('click', function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { /* Firefox */
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { /* IE/Edge */
            video.msRequestFullscreen();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const pageKey = 'visitCount-' + window.location.pathname; // Membuat key unik berdasarkan pathname
    const countElement = document.createElement('div');
    countElement.id = 'visitorCount';
    countElement.style.position = 'fixed';
    countElement.style.bottom = '10px';
    countElement.style.right = '10px';
    countElement.style.backgroundColor = 'white';
    countElement.style.color = 'black';
    countElement.style.padding = '5px 10px';
    countElement.style.borderRadius = '5px';
    document.body.appendChild(countElement);

    let count = localStorage.getItem(pageKey);
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem(pageKey, count);
    countElement.innerText = `Visit Count: ${count}`;
});


document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
    });
});

document.getElementById('sync-btn').addEventListener('click', function() {
    const syncIcon = document.getElementById('sync-icon');
    const syncIconHover = document.getElementById('sync-icon-hover');
    syncIcon.classList.add('rotate');
    syncIconHover.classList.add('rotate');

    let duration = 1700;

    // Simulate processing with a timeout
    setTimeout(() => {
        // Processing done, remove the rotation class
        syncIcon.classList.remove('rotate');
        syncIconHover.classList.remove('rotate');
        syncIcon.style.transform = 'rotate(0deg)';
        syncIconHover.style.transform = 'rotate(0deg)';
    }, duration);
});

let blinkInterval;
let blinkDuration = 300;

document.getElementById('track-btn').addEventListener('click', function() {
    const button = this;
    const trackIcon = document.getElementById('track-icon');
    const trackIconActive = document.getElementById('track-icon-active');

    // Toggle the title
    if (button.title === "Start Tracking") {
        button.title = "Stop Tracking";

        // Start blinking
        blinkInterval = setInterval(() => {
            if (trackIcon.classList.contains('opacity-0')) {
                trackIcon.classList.remove('opacity-0');
                trackIconActive.classList.add('opacity-0');
            } else {
                trackIcon.classList.add('opacity-0');
                trackIconActive.classList.remove('opacity-0');
            }
        }, blinkDuration);
    } else {
        button.title = "Start Tracking";

        // Stop blinking
        clearInterval(blinkInterval);
        trackIcon.classList.remove('opacity-0');
        trackIconActive.classList.add('opacity-0');
    }
});
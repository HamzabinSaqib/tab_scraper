
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const footer = document.getElementById('footer');
    const header = document.getElementById('header');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');

        const headerBottom = header.getBoundingClientRect().bottom;
        const targetHeight = window.innerHeight - headerBottom - 30; // 30 pixels below the header

        if (footer.classList.contains('h-0.5')) {
            footer.classList.remove('h-0.5');
            footer.style.height = `${targetHeight}px`;
        } else {
            footer.style.height = '';
            footer.classList.add('h-0.5');
        }
    });
});

let isSyncing = false;

document.getElementById('sync-btn').addEventListener('click', function() {
    if (isSyncing) return; // If already syncing, do nothing
    
    const button = this;
    button.title = "Syncing...";
    const syncIcon = document.getElementById('sync-icon');
    const syncIconHover = document.getElementById('sync-icon-hover');
    const syncIconActive = document.getElementById('sync-icon-active');
    
    syncIcon.classList.add('opacity-0');
    syncIcon.classList.add('rotate');
    syncIconHover.classList.add('opacity-0');
    syncIconHover.classList.add('rotate');
    syncIconActive.classList.remove('opacity-0');
    syncIconActive.classList.add('rotate');

    let duration = 3700;
    isSyncing = true;

    // Simulate processing with a timeout
    setTimeout(() => {
        // Processing done, remove the rotation class
        syncIcon.classList.remove('rotate');
        syncIconHover.classList.remove('rotate');
        syncIconActive.classList.remove('rotate');
        syncIcon.style.transform = 'rotate(0deg)';
        syncIconHover.style.transform = 'rotate(0deg)';
        syncIconActive.style.transform = 'rotate(0deg)';
        syncIcon.classList.remove('opacity-0');
        syncIconActive.classList.add('opacity-0');
        button.title = "Global Sync";
        isSyncing = false;
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
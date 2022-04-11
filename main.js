const { BrowserWindow, app } = require('electron');

function createMenu(){
    const Mainmenu = new BrowserWindow({
        width: 600,
        height: 500,
        title: "cric",
    });
    Mainmenu.loadURL('https://www.cricketexchange.in/');
}


app.on('ready', createMenu);
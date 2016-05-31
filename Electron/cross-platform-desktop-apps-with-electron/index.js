const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        height: 500,
        width: 500
    })

    mainWindow.loadURL('file://' + __dirname + '/index.html')
}

app.on('ready', createWindow)
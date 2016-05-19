const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow


let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({ width: 800, height: 600 })

    // and load the index.html of the app.
    mainWindow.loadURL(`file://${__dirname}/index.html`)
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
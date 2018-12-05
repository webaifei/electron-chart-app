
const electron = require('electron');
const path = require('path');
const app = electron.app;
const {cvs2json} = require("./src/utils/xlsx2json.js");
console.log(cvs2json)
// Adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// Prevent window being garbage collected
let mainWindow;

function onClosed() {
	// Dereference the window
	// For multiple windows store them in an array
	mainWindow = null;
}

function createMainWindow() {
	const win = new electron.BrowserWindow({
		width: 1000,
		height: 800
	});

	// win.loadURL(`file://${__dirname}/build/index.html`);
    win.loadURL('http://localhost:3001/')
	win.on('closed', onClosed);

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
electron.ipcMain.on('drop', (event, filePath) => {
    console.log(filePath)
    // parse cvs file to json
    cvs2json(filePath, './data.json', (err, res)=> {
        if(err) {
            throw err;
            // 上报 并且提示 保证程序不能崩溃
        }
        // event.sender.send('update-data');
    })
})
app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
});

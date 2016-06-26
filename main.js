var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var ipc = require('ipc');

// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window(s).
  splashWindow = new BrowserWindow({width: 600, height: 450, frame: false});
  mainWindow = new BrowserWindow({width: 800, height: 600, icon: __dirname + '/images/formatting/e_b_icon.png'});
  mainWindow.minimize()

  // and load the html of the apps.

  splashWindow.loadUrl('file://' + __dirname + '/splash.html');
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.webContents.executeJavaScript("electron=true");
    
  ipc.on('nearly', function(event){mainWindow.webContents.executeJavaScript("audCtrls(startup, 'play');");});
  ipc.on('finished', function(event) {startMain ();});

  function startMain () {
    mainWindow.maximize();
    mainWindow.setMenuBarVisibility(true);
    splashWindow.close()
  }



  // Open the DevTools.
 // mainWindow.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
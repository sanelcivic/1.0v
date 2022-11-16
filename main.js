const { app, BrowserWindow } = require('electron')
const computerName = require('computer-name')
var config = require(app.getPath('desktop') + '\\\JSApp\\config.json');
var monitor = config.MONITOR;
if (monitor == 1){
  monitorsize = 0; }
  else
  {
  monitorsize = -1000; }
const createWindow = () => {
  const onlineStatusWindow = new BrowserWindow({
    width: 400,
    height: 100,
    x: monitorsize,
    y: 0,
    fullscreen: true,
    autoHideMenuBar: true
  })
  require('update-electron-app')()
  const app = require('electron').app;
  var isPackaged = !process.defaultApp;
var internetAvailable = require("internet-available");
// Set a timeout and a limit of attempts to check for connection
const fs = require("fs");
fs.readFile(app.getPath('desktop') + '\\\JSApp\\config.json', "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
    onlineStatusWindow.webContents.on('before-input-event', (event, input) => {
    if (input.control && input.key.toLowerCase() === 'c') {
      console.log('Pressed Control+C')
      onlineStatusWindow.openDevTools();
    }
  })
  var open = 1;
  var config = require(app.getPath('desktop') + '\\\JSApp\\config.json');
  console.log("File data:", config.URL);
  onlineStatusWindow.loadURL(config.URL);
  setInterval(function(){
   internetAvailable({
    timeout: 4000,
    retries: 3,
}).then(function(){
    if (open == 0){
      console.log("Internet available");
    onlineStatusWindow.loadURL(config.URL);
    // onlineStatusWindow.loadURL(config.URL + computerName()) HOSTNAME
    open = 1;
    }
}).catch(function(){
    if (open == 1 && config.CHECK_CONNECTION == 1){
      console.log("No internet");
    onlineStatusWindow.loadFile('index.html')
    open = 0; }
});
}, 100); 
});
setInterval(function(){
app.relaunch()
app.exit()
}, config.RESTART_INTERVAL);

var time;
if (config.CHECK_PAGECRASH == 1){
window.onload = function(){
    time = setTimeout(function(){
        document.location.reload(); 
    }, config.REFRESH_ON_ERROR_INTERVAL);
};

document.onreadystatechange = function() {
    if (document.readyState == "complete") {
        clearTimeout(time);
    }
}
}
}
app.whenReady().then(() => {
  createWindow()
  

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
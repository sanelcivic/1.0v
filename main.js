const { app, BrowserWindow } = require('electron')
const computerName = require('computer-name')
var config = require('C:\\Users\\sanel.civic\\Desktop\\JSApp\\config.json');
const fs = require("fs");
var monitor = config.MONITOR;
var path = require('path');
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

  //onlineStatusWindow.openDevTools();
  
var internetAvailable = require("internet-available");
	 fs.appendFileSync('message.txt', app.getPath('exe'));
// Set a timeout and a limit of attempts to check for connection
fs.readFile(app.getPath('desktop') + '\\\Terminal\\config.json', "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    fs.appendFileSync('message.txt', err);
    return;
  }
    onlineStatusWindow.webContents.on('before-input-event', (event, input) => {
    if (input.control && input.key.toLowerCase() === 'c') {
      console.log('Pressed Control+C')
      onlineStatusWindow.openDevTools();
    }
  })
  //require('update-electron-app')()
  var open = 1;
  var config = require(app.getPath('desktop') + '\\\Terminal\\config.json');
  console.log("File data:", config.URL);
  fs.appendFileSync('message.txt', config.URL);
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
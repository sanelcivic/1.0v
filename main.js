const { app, BrowserWindow } = require('electron')
const computerName = require('computer-name')
var config = require( __dirname + '//config.json');
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
  var currentDate = '[' + new Date().toUTCString() + '] ';
var winston = require('winston');
  require('winston-daily-rotate-file');

  var transport = new winston.transports.DailyRotateFile({
    filename: 'application-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '10d'
  });

  transport.on('rotate', function(oldFilename, newFilename) {
    // do something fun
  });

  var logger = winston.createLogger({
    transports: [
      transport
    ]
  });
var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) {
  logger.info(currentDate + util.format(d)) + '\n';
};
  
  //onlineStatusWindow.openDevTools();
var internetAvailable = require("internet-available");
    var currentDate = '[' + new Date().toUTCString() + '] ';
// Set a timeout and a limit of attempts to check for connection
    onlineStatusWindow.webContents.on('before-input-event', (event, input) => {
    if (input.control && input.key.toLowerCase() === 'c') {
      console.log('Pressed Control+C')
      onlineStatusWindow.openDevTools();
    }
  })
  require('update-electron-app')()
  var open = 1;
  var config = require( __dirname + '//config.json');
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
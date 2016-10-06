const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', function(){
  var mainWindow = new BrowserWindow({
    width: 1000,
    height: 600
  })
  mainWindow.loadURL('https://NOMBRE-DE-LA-APLICACIÓN.herokuapp.com/')
})

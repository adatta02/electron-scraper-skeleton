const {app, BrowserWindow} = require('electron');
const fs = require("fs");

app.on('ready', () => { 
        
    win = new BrowserWindow({width: 800, height: 600, fullscreen: true});
    
    win.toggleDevTools();    
    win.loadURL('file://' + __dirname + '/index.html');
    win.focus();
    
    win.on('closed', function() {
        win = null;
    });        
    
    win.webContents.on('dom-ready', function() {                    
        console.log("dom-ready");                        
    });
    
    win.webContents.on('did-finish-load', function() {        
        console.log("did-finish-load");                        
    });
    
});

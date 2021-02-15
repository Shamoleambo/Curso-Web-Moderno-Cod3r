const { ipcMain } = require("electron");

const pathsToRows = require('./pathsToRows');
const prepareData = require('./prepareData');

ipcMain.on("process-subtitles", (event, paths) => {
  pathsToRows(paths)
    .then(rows => prepareData(rows))
    .then(words => console.log(words))
    .then(() =>{
        event.reply("process-subtitles", [
          { name: "i", amount: 1234 },
          { name: "you", amount: 900 },
          { name: "he", amount: 800 },
          { name: "she", amount: 799 },
          { name: "our", amount: 200 },
          { name: "house", amount: 2 },
          { name: "main", amount: 1300 }
        ]);
    });

});

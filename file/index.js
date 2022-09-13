const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');
const filepath = `${dirPath}/apple.txt`;

//creat file
fs.writeFileSync(filepath, 'THis is a simple text file');


//read file
fs.readFile(filepath, 'utf8', (err, item) => {
    console.log(item);
})


//update content of file
fs.appendFile(filepath, ' and file name is apple.txt', (err) => {
    if (!err) console.log("file is updated successfully");
});


//update file name
fs.rename(filepath, `${dirPath}/fruit.txt`, (err) => {
    if (!err) console.log("file is updated successfully");
})


//delete file
fs.unlinkSync(`${dirPath}/fruit.txt`)




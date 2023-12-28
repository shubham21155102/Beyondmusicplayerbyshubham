const fs = require('fs');
const path = require('path');

const directory = '/workspaces/Beyondmusicplayerbyshubham/';

fs.readdir(directory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const mp3Files = files.filter(file => path.extname(file).toLowerCase() === '.mp3');
//   mp3Files.forEach(mp3File => {
//     console.log(mp3File);
//     fs.unlink(mp3File);
//   });
// });
mp3Files.forEach(mp3File => {
    const filePath = path.join(directory, mp3File);
    fs.unlink(filePath, err => {
      if (err) {
        console.error('Error deleting file:', err);
        return;
      }
      console.log(`Deleted: ${mp3File}`);
    });
  });
});
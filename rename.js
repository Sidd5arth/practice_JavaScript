const fs = require('fs');
const path = require('path');

function renamePngFiles(folderPath) {
    // Read the list of files in the folder
    const files = fs.readdirSync(folderPath);

    // Filter only PNG files
    const pngFiles = files.filter(file => path.extname(file).toLowerCase() === '.png');

    // Sort the PNG files
    pngFiles.sort();

    // Rename the files with sequential numbers
    pngFiles.forEach((oldName, index) => {
        const newName = `${index + 1}.png`;
        const oldPath = path.join(folderPath, oldName);
        const newPath = path.join(folderPath, newName);

        // Rename the file
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed: ${oldPath} to ${newPath}`);
    });
}

const yourFolderPath = __dirname;
renamePngFiles(yourFolderPath);

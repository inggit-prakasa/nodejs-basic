const fs = require('fs');
const path = require('path');

var inputPath = path.resolve(__dirname, 'input.txt');
var outputPath = path.resolve(__dirname, 'output.txt');

const readableStream = fs.createReadStream(inputPath, {
    highWaterMark: 15
});

const writableStream = fs.createWriteStream(outputPath);
 
readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`);
        // console.log(isi);
        // isi = isi + process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
        console.log(error);
    }
});

readableStream.on('end', () => {
    writableStream.end();
});


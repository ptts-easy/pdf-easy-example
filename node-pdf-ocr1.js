const temp = require('temp');
const fs = require('fs');
const { exec: _exec } = require('child_process');
const { promisify } = require('util');

const exec = promisify(_exec);
/*
module.exports = (inputPath, options = { quality: 720, language: 'eng' }) => {
    return new Promise((res, rej) => {
        if (fs.existsSync(inputPath)) {
            const outputPath = temp.path({ prefix: 'node_pdf_ocr_output', suffix: '.txt' });
            const cmd = `${process.env.GHOSTSCRIPT_PATH == null ? 'gs' : `"${process.env.GHOSTSCRIPT_PATH}"`} -sDEVICE=ocr -r${options.quality} -sOCRLanguage="${options.language}" -o "${outputPath}" "${inputPath}"`;

            return exec(cmd).then(() => {
                res(fs.readFileSync(outputPath, 'utf8'));
                fs.unlinkSync(outputPath);
            }).catch(rej);
        } else {
            return rej(`Error, no file exists at the path: ${inputPath}`);
        }
    })
}
*/

module.exports = (inputPath, outputPath, options = { quality: 720, language: 'eng' }) => {
    return new Promise((res, rej) => {
        if (fs.existsSync(inputPath)) {
            const gsPath = "./environment/ghostscript/gswin64.exe";
            const cmd = `"${gsPath}" -sDEVICE=ocr -r${options.quality} -sOCRLanguage="${options.language}" -o "${outputPath}" "${inputPath}"`;
            return exec(cmd).then(() => {
                res("");
//                res(fs.readFileSync(outputPath, 'utf8'));
//                fs.unlinkSync(outputPath);
            }).catch(rej);            
        } else {
            return rej(`Error, no file exists at the path: ${inputPath}`);
        }
    })
}
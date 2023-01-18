require('dotenv').config();                           // To load executable paths from .env file
const PdfOcr = require('./node-pdf-ocr1');

const src_file = "./datasets/pdf/Covid 19 project.pdf";
const dest_file = "./datasets/text/Covid 19 project.txt";

async function main() {
    PdfOcr(src_file, dest_file)
      .then((text) => {
        console.log("complated !!!");
        })
      .catch((err) => console.error(err));
}

main();
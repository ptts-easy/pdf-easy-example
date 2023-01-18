require('dotenv').config();                           // To load executable paths from .env file
var path = require('path');
var fs = require('fs');
const PdfOcr = require('./node-pdf-ocr');

const src_dir = "./pdf_pages/";
const dest_dir = "./texts/";

async function main() {

  let files = fs.readdirSync(src_dir);

  for(let file of files) {
    const file_name = path.basename(file, path.extname(file));
    const src_file = `${src_dir}${file}`;
    const dest_file = `${dest_dir}${file_name}.txt`;

    PdfOcr(src_file, dest_file)
      .then((text) => {
        console.log(file_name, ":: converted");
        })
      .catch((err) => console.error(err));
  }
}

main();
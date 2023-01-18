const fs = require("fs");
const path = require("path");

async function one_pdf2text(pdf_path, text_path) {

  if(fs.existsSync(pdf_path) == false) {
      console.log(pdf_path, " pdf file not found !!!");
      return;
  }

}

async function all_pdf2text(pdf_dir, text_dir) {

  if(fs.existsSync(text_dir) == false) {
    fs.mkdirSync(text_dir, { recursive: true });  
  }

  let files = fs.readdirSync(pdf_dir);

  for(let file of files) {
    let pdf_path = pdf_dir + file;
    let text_path = text_dir + path.basename(file, path.extname(file)) + ".txt";

    await one_pdf2text(pdf_path, text_path);
  }
}

async function main() {

  await all_pdf2text("datasets/pdf/", "datasets/text/");
}

main();

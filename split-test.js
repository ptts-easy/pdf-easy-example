var async = require('async');
var path = require('path');
var fs = require('fs');
var split = require('./lib/split.js');

const src_file = "./datasets/pdf/Covid 19 project.pdf";
const dest_dir = "./datasets/pdf_pages";

async function main() {
  split(src_file, dest_dir, function (err, output) {
    console.log("split-test ::", err, "::", output);
    if(err == 0) {
      var files = output.files;
      // make sure each file entry in files exists
      async.forEach(
        files,
        function (file, cb) {
          fs.exists(file.file_path, function (exists) {
            cb();
          });
        },
        function (err) {
        }
      );
    }
  });
}

main();
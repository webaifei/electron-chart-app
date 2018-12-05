const convertExcel = require('excel-as-json').processFile;
const path = require('path');
const fs = require('fs');
// const csv = require('node-csv').createParser('\t', '"', '\\');
const csv=require('csvtojson')
// convertExcel(path.join(__dirname, '../data-test.xlsx'), './data.json', {
  
// }, (err, data)=> {
//   console.log(err, data);
  
// });
// console.log(csvString);
const writeStream = fs.createWriteStream('./data.json', {encoding: 'utf8'});
require('fs').createReadStream(path.join(__dirname, '../data.csv'), {encoding: 'utf8'}).pipe(csv()).pipe(writeStream);

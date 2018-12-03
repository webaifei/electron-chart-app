const convertExcel = require('excel-as-json').processFile;
const path = require('path');

convertExcel(path.join(__dirname, '../data-test.xlsx'), './data.json', {
  // sheet: '工作表 1'
}, (err, data)=> {
  console.log(err);
  
});
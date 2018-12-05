//
// ─── CONVERT CVS TO JSON DATA ───────────────────────────────────────────────────
//

const convertExcel = require('excel-as-json').processFile;
const path = require('path');


const cvs2json = (filePath, dest, callbank)=> {
    convertExcel(filePath, dest, {
    // sheet: '工作表 1'
    }, callbank);
}

module.exports = {
    cvs2json
}
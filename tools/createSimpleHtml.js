const fs = require('fs');
const {resolve} = require('path')

const bodyHtml = fs.readFileSync(resolve(__dirname,'./lib/view.html')).toString();

module.exports = (outputPath,templateParmas)=>{
    
}

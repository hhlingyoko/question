const fs = require('fs');
const less = require('less');

const lessDir = './less/';
const cssDir = './css/';

fs.readdir(lessDir, function(err, files){
  if(err) {
    console.warn(err)
  } else{ 
    files.forEach(function(item){
      const cssName = item.replace('.less', '.css')
      const file = fs.readFileSync(lessDir+item,'utf-8')
      less.render(file,
      function (e, output) {
        if(err) {
          console.warn(err)
        }else{
          fs.writeFile(cssDir+cssName, output.css)
        }
      });
    })
  }
});

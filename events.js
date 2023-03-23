var fs = require('fs');
var rs = fs.createReadStream('./mytext.txt');
rs.on('open', function () {
  console.log('The file is open');
});

var fs = require('fs');

fs.readFile('./package.json', (err, data) => {
  if (err) throw err;
  console.log(data);
});
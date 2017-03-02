const crypto = require('crypto');
const hash = crypto.createHash('sha256');
const text = `今天天氣真好`;

hash.on('readable', () => {
  const data = hash.read();
  if (data){
    console.log(text, 'sha256');
    console.log(data.toString('hex'));
  }
});

hash.write(text);
hash.end();

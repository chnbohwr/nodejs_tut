const zlib = require('zlib');
const originalText = 'Akismet 已保護你的網誌免於 47 則垃圾迴響的侵擾。現在有 2 則留言在你的垃圾清單中。';
const originalBuffer = new Buffer(originalText);
console.log(`original buffer = ${originalBuffer}`);
const ziped = zlib.gzipSync(originalBuffer);
console.log(`zip buffer = ${ziped}`);
const unzipBuffer = zlib.unzipSync(ziped);
console.log(`unzip string = ${unzipBuffer.toString()}`);


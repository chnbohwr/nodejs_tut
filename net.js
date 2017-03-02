const net = require('net');
const server = net.createServer((c) => {
  // 'connection' listener
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });
  c.on('data', (data) => {
    console.log('get data: ', data.toString());
    c.write(`${data.toString()} 知道了 不要吵`);
  });
  c.write('hello\r\n');
  c.pipe(c);
});
server.on('error', (err) => {
  console.log('server error', err);
});
server.listen(8124, () => {
  console.log('server start');
});


// use telnet localhost 8124 to connect server
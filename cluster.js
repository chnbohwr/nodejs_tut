const http = require('http');
const cluster = require('cluster');
const os = require('os');
const onRequest = require('./emailValidator.js');

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  // Fork workers.
  os.cpus().forEach(()=>{
    cluster.fork();
  });

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
  
} else {
    http.createServer(onRequest).listen(3000);
    console.log(`Worker ${process.pid} started`);
}

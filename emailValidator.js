const validator = require('validator');
const url = require('url');

const onRequest = (request, response) => {
  console.log(`now in worker ${process.pid}`);
  response.writeHead(200, {"Content-Type": "text/plain"});
  var email = url.parse(request.url, true).query.email;
  if (email && validator.isEmail(email)) {
    response.write(`${email} is correct email form.`);
  } else {
    response.write('please input correct email in query string, eg: ?email=cjiaojce@gmail.com');
  }
  response.end();
};

module.exports = onRequest;
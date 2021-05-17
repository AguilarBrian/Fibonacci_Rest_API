const express = require('express');
const router  = require('./router/router.js'); 

const server  = express();

server.use('/', router);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

server.listen(3001, () => {
  console.log('%s listening at 3001');
});

const express       = require('express');
const app           = express();

const router        = require('./router/router');
const common_router = require('./router/common_views');

app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'ejs')

app.use('fiboapp/', router);
app.use('/'       , common_router);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = app;

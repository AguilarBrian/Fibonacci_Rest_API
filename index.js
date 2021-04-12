const express = require('express');
const { Router } = require('express');

const server = express();
const router = Router();

router.get('/', async (req, res) => {
  try {
    res.send('Hi there! Please, enter your number after "/" in the URL');
  } catch (err) {
    console.error(err.message);
  }
});

// Fibonacci function. Receives 'n' by params
router.get('/:n', async (req, res) => {
  try {
    const numParams = req.params.n;
    const nFibonacci = n => {
      if (n <= 1) return n;
      return nFibonacci(n - 1) + nFibonacci(n - 2);
    };
    const answer = nFibonacci(numParams) + '';
    res.send(answer);
  } catch (err) {
    console.error(err.message);
  }
});

server.use('/', router);

// Error catching endware.
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

server.listen(3001, () => {
  console.log('%s listening at 3001');
});

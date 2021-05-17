const { Router }  = require('express');
const router      = Router();

router.get('/', async (req, res) => {
  try {
    res.send('Hi there! Please, enter your number after "/" in the URL');
  } catch (err) {
    console.error(err.message);
  }
});

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

module.exports = router;
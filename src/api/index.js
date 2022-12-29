require('dotenv').config({ path: '../../.env' });
const express = require('express');
const { Employers } = require('./models/models');

const app = express();
const { API_PORT: PORT } = process.env;

app.use(express.json());

const apiRouter = require('./routes/api');

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.use('/api', apiRouter);

app.use('*', (req, res, next) => {
  const errorObj = {
    log: 'Page not found',
    status: 404,
    message: { err: 'Error 404: Page not Found' },
  };
  next(errorObj);
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);

  res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

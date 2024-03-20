require('@babel/register');

const express = require('express');

const indexRouter = require('./routes/index.router');
const serverConfig = require('./config/serverConfig');

const app = express();

const PORT = process.env.PORT ?? 3000;

serverConfig(app);

app.use('/', indexRouter);

function run() {
  try {
    app.listen(PORT, () => console.log(`Server started at ${PORT} port`));
  } catch ({ message }) {
    console.log({ error: message });
  }
}

run();

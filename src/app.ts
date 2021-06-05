import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';

import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';
import fs from 'fs';
import morgan from 'morgan';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use(
  morgan(':date[iso] :method :url :req[body] :status - :response-time ms')
);

app.use(
  morgan(':date[iso] :method :url :req[header] :status - :response-time ms', {
    stream: fs.createWriteStream('access.log', {
      flags: 'a',
    }),
  })
);

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/users', userRouter);
app.use('/boards/:boardId/tasks', taskRouter);
app.use('/boards', boardRouter);

app.use('/', (req, res, _next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
  } else res.status(404).send('Not found');
  return;
});

process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
    process.exit(3);
  })
  .on('uncaughtException', (err) => {
    console.error(err.message, 'Uncaught Exception thrown');
    process.exit(1);
  });

// 3
//throw Error('Oops!');

// 4
//Promise.reject(Error('Oops!'));

export default app;

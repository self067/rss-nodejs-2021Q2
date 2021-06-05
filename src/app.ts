import express, { Request, Response, NextFunction } from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';

import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use((req, res, next) => {
  const { protocol, url, method, body } = req;
  const startTime = Date.now();

  next();
  const reqTime = Date.now() - startTime;
  const { statusCode } = res;
  const bdy = JSON.stringify(body) === JSON.stringify({}) ? '' : body;
  console.log(
    Date().toString(),
    method,
    protocol,
    url,
    bdy,
    statusCode,
    `${reqTime}ms`
  );
});

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/users', userRouter);
app.use('/boards/:boardId/tasks', taskRouter);
app.use('/boards', boardRouter);

app.use('/', (req, res, _next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
  } else res.status(404).send('Not found');
  return;
  // next();
});

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  const { protocol, url, method, params, query, body } = req;
  const { statusCode, statusMessage } = res;
  console.log(
    Date().toString(),
    err,
    protocol,
    url,
    method,
    params,
    query,
    body,
    statusCode,
    statusMessage
  );
});

// 3
// process.on('uncaughtException'...);
// throw Error('Oops!');

// 4
//process.on('unhandledRejection'...);
// Promise.reject(Error('Oops!'));

export default app;

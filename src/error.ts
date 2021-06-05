import { Request, Response } from 'express';
export const handleError = (
  err: Error,
  req: Request,
  res: Response
): string => {
  const { protocol, url, method, params, query, body } = req;
  const { statusCode, statusMessage } = res;

  const { message } = err;

  console.error(
    '-----',
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

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
  return '';
};

import fs from 'fs';

export const handleError = (message: string): void => {
  console.error(Date().toString(), message);

  fs.writeFileSync('logs/errors.log', Date().toString() + ` ${message} \n`, {
    encoding: 'utf8',
    flag: 'a+',
    mode: 0o666,
  });
};

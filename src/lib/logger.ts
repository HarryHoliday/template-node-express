import pino from 'pino';

const logger = pino({
  prettyPrint: { colorize: true, translateTime: 'SYS:standard', ignore: 'pid,hostname' },
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
});

export default logger;

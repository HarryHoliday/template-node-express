import errorHandler from '~lib/errorHandler';
import logger from '~lib/logger';
import api from './api';
import app from './app';

const PORT = process.env.PLANT_GATEWAY_PORT || 3000;

app.use(api);
app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`server listening on port ${PORT}`);
});

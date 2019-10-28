import express from 'express';
import helmet from 'helmet';
import compression from 'compression';

const app = express();

app.use(helmet());
app.use(compression());
// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

export default app;

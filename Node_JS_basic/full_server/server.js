import express from 'express';
import controllerRouting from './routes/index';

const app = express();
const port = 1245;

controllerRouting(app);

export default app;

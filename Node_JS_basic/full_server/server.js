import express from 'express';
import controllerRouting from './routes/index';

const app = express();

controllerRouting(app);

export default app;

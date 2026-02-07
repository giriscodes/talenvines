import express from 'express';
import path from 'path';
import { config } from './config';
import routes from './routes';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/', routes);

// Start server
app.listen(config.port, () => {
  console.log(`💕 ${config.appName} is running at http://localhost:${config.port}`);
  console.log(`🔒 Hidden page: http://localhost:${config.port}/hidden`);
});

export default app;

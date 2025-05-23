import express from 'express';
import routes from './routes/index.routes';
import { AppDataSource } from './data-source';

async function main() {
  try {
    await AppDataSource.initialize();
    console.log('Data Source initialized');

    const app = express();
    app.use(express.json());

    app.use(routes);

    const port = 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error('Error during Data Source initialization', err);
  }
}

main();
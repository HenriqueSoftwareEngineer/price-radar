import express from 'express';
import cors from 'cors';
import cryptoRoutes from './routes/cryptoRoutes.js';
import { PORT } from './config.js';

const app = express();

app.use(cors());
app.use('/crypto', cryptoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

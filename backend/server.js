import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRouter from './routes/authRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.use('/auth', authRouter);

mongoose.connect(process.env.DB)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  const port = process.env.PORT || 7001;

  app.get('/', (req, res) => {
    res.json({ message: "Hello, world from backend!" });
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

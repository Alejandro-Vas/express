/* eslint-disable import/extensions */
import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';

const PORT = 3000;
const DB_URL = 'mongodb+srv://avasindev:hOkrHaRBuhEtxpTY@cluster0.ctdrist.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use(express.json());
app.use('/api', router);

app.post('/');

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Server running on port ${PORT}`);
    });
  } catch (e) {
    //
  }
}

startApp();

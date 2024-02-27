import express from 'express';
import mongoose from 'mongoose';

// eslint-disable-next-line import/extensions
import Post from './Post.js';

const PORT = 3000;
const DB_URL = 'mongodb+srv://avasindev:hOkrHaRBuhEtxpTY@cluster0.ctdrist.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
  const {
    author, title, content,
  } = req.body;

  const post = await Post.create({
    author, title, content,
  });

  res.json(post);
});

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

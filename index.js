import express from 'express';

const PORT = 3000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json('123');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});

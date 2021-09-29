import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Server API: "السلام عليكم Essalam Alekum !"');
});

export default app;

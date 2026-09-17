const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});
app.get('/api/v1/cats', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Kitty'
    },
    {
      id: 2,
      name: 'Mittens'
    }
  ]);
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
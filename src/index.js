require('dotenv').config();
const express = require('express');
const catRouter = require('./api/routes/cat-router');
const userRouter = require('./api/routes/user-router');
const app = express();


const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

app.use('/api/v1/cats', catRouter);
app.use('/api/v1/users', userRouter);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

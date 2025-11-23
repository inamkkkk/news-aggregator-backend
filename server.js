const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const newsRoutes = require('./routes/newsRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/news', newsRoutes);

app.get('/', (req, res) => {
  res.send('News Aggregator Backend');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
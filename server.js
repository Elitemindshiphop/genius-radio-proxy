const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/nowplaying', async (req, res) => {
  try {
    const response = await fetch('https://api.live365.com/station/a81971/now');
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Fetch error:', err);
    res.status(500).json({ error: 'Unable to fetch now playing data' });
  }
});

app.get('/', (req, res) => {
  res.send('Proxy server is live — use /nowplaying');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

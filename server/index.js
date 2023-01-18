const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./db.js');

const npsAPI = require('./routes/nps_api.js');

/* ======== ======== ======== MIDDLEWARE ======== ======== ======== */
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

/* ======== ======== ======== Routers ======== ======== ======== */
app.use('/npsApi', npsAPI);

app.get('/', (req, res) => {
  res.send('yer up \'n runnin\'');
});

/* ======== ======== ======== SET TO LISTEN ======== ======== ======== */

const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});

const axios = require('axios');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./db.js');

const npsAPI = require('./Routes/nps_api.js');

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

/* ======= ======== ======== CATCH ALL ROUTE ======== ======== ====== */

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public'));
});

//   console.log(response.data);
// } catch (err) {
//   console.log(err);
// }

/* ======== ======== ======== SET TO LISTEN ======== ======== ======== */

const PORT = process.env.PORT || 4007;
app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});

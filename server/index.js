const path = require('path');
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

/* ======== ======== ======== MIDDLEWARE ======== ======== ======== */
let app = express()
app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

/* ======== ======== ======== ROUTES ======== ======== ======== */
app.get('/', (req,res) => {
  res.send(`yer up 'n runnin'`)
})


/* ======== ======== ======== SET TO LISTEN ======== ======== ======== */

const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});



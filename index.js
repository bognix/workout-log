const express = require('express')
const config = require('./config');
const router = require('./server/routes');
const app = express()
const port = config.EXPRESS_PORT

app.use(express.static(`${__dirname}/frontend/dist`));
app.use(router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

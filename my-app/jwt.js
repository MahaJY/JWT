const express = require('express');
const bodyParser = require('body-parser');
const authroutes = require('./routes/authroutes');
const port = 3009;
const app = express();
app.use(bodyParser.json());
app.use('/emp', authroutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
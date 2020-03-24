// npm modules
const express = require('express');
require('./services/passport');

var app = express();

require('./routes/authRoutes')(app);

app.listen(3000);
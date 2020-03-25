// npm modules
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

// other files
const keys = require('./OAuth/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

var app = express();

// Cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.coookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.listen(5000);
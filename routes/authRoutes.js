const passport = require('passport');

module.exports = app => {
  // Start OAuth flow
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));
  
  // Pass 'code' to receive profile information
  app.get('/auth/google/callback', passport.authenticate('google'))
};
const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');

const app = express();

app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: 'YOUR_AUTH0_DOMAIN',
    baseURL: 'YOUR_SERVER_BASE_URL',
    clientID: 'YOUR_CLIENT_ID',
    secret: 'YOUR_CLIENT_SECRET',
  })
);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Login route
app.get('/login', (req, res) => {
  res.send('You can log in here.');
});

// Callback route (Auth0 will handle the authentication and redirect to this route)
app.get('/callback', (req, res) => {
  res.redirect('/');
});

// Logout route (requires authentication)
app.get('/logout', requiresAuth(), (req, res) => {
  req.logout();
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

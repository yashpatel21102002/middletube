const express = require('express');
const { google } = require('googleapis');
const { default: User } = require('../models/User');
const router = express.Router();


const CLIENT_ID = '1056405202495-3044o1mkctk2i1inil4fr2q57ohh40iv.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:8080/auth/callback';
const SCOPES = [
  'https://www.googleapis.com/auth/youtube','https://www.googleapis.com/auth/youtube.channel-memberships.creator','https://www.googleapis.com/auth/youtube.force-ssl','https://www.googleapis.com/auth/youtube.readonly','https://www.googleapis.com/auth/youtube.upload','https://www.googleapis.com/auth/youtubepartner','https://www.googleapis.com/auth/youtubepartner-channel-audit'
];

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

router.get('/', (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    approval_prompt:'force',
    access_type: 'offline',
    scope: SCOPES,
  });
  res.send(`<a href="${authUrl}">Authorize YouTube API</a>`);
});

router.get('/callback', async (req, res) => {
  const { code } = req.query;


  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    console.log('Successfully authenticated.');
    res.redirect("http://localhost:3000")

    // // You can now use the authenticated `oauth2Client` to make YouTube API requests
    // const youtube = google.youtube({ version: 'v3', auth: oauth2Client });

    // // Example: Retrieve the user's YouTube channel information
    // const response = await youtube.channels.list({
    //   mine: true,
    //   part: 'snippet,contentDetails,statistics',
    // });

    // console.log('User Channel Data:', response.data.items[0]);

    // res.send('Authentication successful. You can now make YouTube API requests.');
  } catch (error) {
    console.error('Authentication error:', error);
    res.send('Authentication failed.');
  }
});

module.exports = router,oauth2Client;
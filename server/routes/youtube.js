const express = require('express');
const { google } = require('googleapis');
const router = express.Router();
const {oauth2Client} = require('./auth')

function isAccessTokenValid(tokens) {
    if (!tokens) return false;
    const now = Date.now();
    return tokens.expiry_date > now;
}

async function refreshAccessToken(tokens) {
    
    oauth2Client.setCredentials(tokens);
    const { credentials } = await oauth2Client.refreshAccessToken();
    return credentials.access_token;
  }
  
  router.get('/youtube', async (req, res) => {
    const tokens = req.session.tokens;
  
    if (!isAccessTokenValid(tokens)) {
      // If the access token is invalid or has expired, refresh it
      try {
        const newAccessToken = await refreshAccessToken(tokens);
        tokens.access_token = newAccessToken;
      } catch (error) {
        console.error('Error refreshing access token:', error);
        return res.status(500).json({ error: 'Error refreshing access token' });
      }
    }
  
    // Make an API request to get data from the YouTube API
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/some-api-endpoint', {
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
        },
      });
  
      const youtubeData = response.data;
      res.json({ youtubeData });
    } catch (error) {
      console.error('Error fetching data from YouTube API:', error);
      res.status(500).json({ error: 'Error fetching data from YouTube API' });
    }
  });
  

  module.exports = router;
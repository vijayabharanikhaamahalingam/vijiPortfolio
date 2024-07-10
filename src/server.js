// server.js

const express = require('express');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS if your frontend is on a different domain

const CLIENT_ID = "451973533648-2a6n0dbhi8jnuiqcjkalf3ldd0tjsh39.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = "1//047gs1_-D3SN5CgYIARAAGAQSNwF-L9Irs3tY3zeqv3Bj_OlewABkB-zuzxZSPnLQXgZexkWvcsDtt6gPKVpI6dfraQ1Q4lmNUxI";

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(formData) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'vamsipraneeth2004@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: formData.email,
      to: '22cs01031@iitbbs.ac.in', // Replace with your email address
      subject: 'Contact Form Submission',
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    throw new Error('Error sending email:', error);
  }
}

// Route to handle email sending
app.post('/api/send', async (req, res) => {
  try {
    const result = await sendMail(req.body);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

const PORT = process.env.PORT || 3033;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

require('dotenv').config()
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Middleware to parse request body
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Route to handle POST request
router.post('/', async (req, res) => {
  const { email, message } = req.body;
  
  // Create a transporter (email service configuration)
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or other email service provider
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    }
  });
  
  // Define the email options
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Automatic Email Response',
    text: `You sent the message: ${message}`,
  };
  
  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error sending email');
  }
});

module.exports = router;

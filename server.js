// server.js
import { initializeApp } from "firebase/app";
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;
// Import the functions you need from the SDKs you need


const firebaseConfig = {
  apiKey: "AIzaSyDle7XZ7M461572UhqqFJZxkrlki3Q7IOs",
  authDomain: "portfolio-9c894.firebaseapp.com",
  projectId: "portfolio-9c894",
  storageBucket: "portfolio-9c894.appspot.com",
  messagingSenderId: "84498765441",
  appId: "1:84498765441:web:be32c9cf178e5d68701f80"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yashnagupta333@gmail.com',
      pass: 'dEdpek-7jydwi-mijhaf',
    },
  });

  // Set up email options
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@example.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

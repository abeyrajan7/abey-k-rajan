// 1. Import all the packages we installed
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config(); // This loads the variables from our .env file

// 2. Set up the Express application
const app = express();
const PORT = 3001; // The backend will run on this port

// 3. Add middleware to our app
app.use(cors()); // Use CORS to allow cross-origin requests
app.use(express.json()); // Use express.json() to parse JSON bodies

// 4. Create the API endpoint for sending emails
app.post("/api/send-email", (req, res) => {
  const { name, email, message } = req.body;
  console.log("here");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Loaded from .env
      pass: process.env.EMAIL_PASS, // Loaded from .env
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `New Portfolio Message from ${name}`,
    text: `You have a new message.

    Name: ${name}
    Email: ${email}

    Message:
    ${message}`,
  };

  // 5. Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ success: false, message: "Failed to send message." });
    }
    console.log("Email sent successfully! Response:", info.response);
    res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  });
});

// 6. Start the server and make it listen for requests
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});

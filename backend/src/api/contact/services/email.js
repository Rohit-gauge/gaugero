const nodemailer = require('nodemailer');

module.exports = {
  async sendEmail(subject, message, recipientEmail) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: recipientEmail,
      subject: subject,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully + "------------');
    } catch (error) {
      console.error(error);
    }
  },
};

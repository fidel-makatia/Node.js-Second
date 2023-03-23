var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fidelmakatia@gmail.com',
    pass: 'makatia001'
  }
});

var mailOptions = {
  from: 'fidelmakatia@gmail.com',
  to: 'fidelmakatia85@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
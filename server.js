console.log("Hello World")
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('<h1>Hello Node!!!</h1>'); //write a response to the client
  res.end(); //end the response
}).listen(3000); 
const fs = require('node:fs');
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true
});

console.log(password);
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'walidouahrani69@gmail.com',
    pass: 'vfvz uaks qcpv bikg'
  }
});

var mailOptions = {
  from: 'walidouahrani69@gmail.com',
  to: 'rezekwajdi@gmail.com',
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
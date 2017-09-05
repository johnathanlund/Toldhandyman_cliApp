var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
// var mongoose = require('mongoose');
var cors = require('cors');
// var multer = require('multer');
// var fs = require('fs');
var nodemailer = require('nodemailer');
// var jwt = require('jsonwebtoken');
// var expressJwt = require('express-jwt');
// var User = require('./models/UserModel.js');
// var mysql = require('mysql');
var http = require('http');

// CONFIG
var config = require('./config');

// SERVICES
// var passport = require('./services/passport.js');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.nodemailer_user,
    pass: config.nodemailer_pass
  }
});


// EXPRESS
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cors());
// app.use(express.static(__dirname + './../public'));
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));


// mongoose.set('debug', true);

// HEADERS
var permitCrossDomainRequests = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, x-access-token, Accept");
  // res.header('Access-Control-Allow-Credentials', true);
// some browsers send a pre-flight OPTIONS request to check if CORS is enabled so you have to also respond to that
if ('OPTIONS' === req.method) {
  res.sendStatus(200);
}
else {
  next();
}
};
app.use(permitCrossDomainRequests);


// ENDPOINTS

//-----------------User Login Methods------------------


//===========Contact Form Endpoints==============================================
app.post('/contactForm', function (req, res, next) {
  console.log("In Server, Contact Form shows req.body as: " + req.body);
  console.log("In Server, Contact Form shows req.body.contactName as: " + req.body.contactName);
  var mailOptions = {
    from: req.body.contactName + '<' + config.nodemailer_user +'>',
    to: config.nodemailer_recipient,
    subject: req.body.contactName +' - Told Handyman Contact Form from Website',
    text: 'Hello world ?',
    html:   '<div style:"display:inline-block; width:70vw; float:left;">' +
        '<div class="email_header" style="width: 100vw;height: 8vh;background: radial-gradient(rgb(180,21,17), white);color: #fff;text-align:center; ">' +
          '<h3 style="padding:2vh 0 0 0;">NEW CONTACT FORM SENT FROM TOLD HANDYMAN WEBSITE</h3></div>' +
        '<h1  style="color: blue; padding: 0 0 0 10px;margin:0;">Contact Information:</h1><br>' +
        '<div style="margin: 0 0 1vh 0;border-bottom:3px solid blue; display:flex;box-shadow: 0 6px 10px black;"><h3 style="width:150px;color:rgb(180,21,17);font-style: italic;margin:0;padding:30px 0 0 10px;">Name:  </h3><p style="margin:30px 0 0 0;padding:0;">' + req.body.contactName + '</p></div><br>' +
        '<div style="margin: 0 0 1vh 0;border-bottom:3px solid blue; display:flex;box-shadow: 0 6px 10px black;"><h3 style="width:150px;color:rgb(180,21,17);font-style: italic;margin:0;padding:30px 0 0 10px;">Email:  </h3><p style="margin:30px 0 0 0;padding:0;">' + req.body.contactEmail + '</p></div><br>' +
        '<div style="margin: 0 0 1vh 0;border-bottom:3px solid blue; display:flex;box-shadow: 0 6px 10px black;"><h3 style="width:150px;color:rgb(180,21,17);font-style: italic;margin:0;padding:30px 0 0 10px;">Phone #:  </h3><p style="margin:30px 0 0 0;padding:0;"> (' + req.body.contactPhone1of3 + ')' + req.body.contactPhone2of3 + '-' + req.body.contactPhone3of3 + '</p></div><br>' +
        '<div style="margin: 0 0 2vh 0;border-bottom:3px solid blue; display:flex;box-shadow: 0 6px 10px black;"><h3 style="width:150px;color:rgb(180,21,17);font-style: italic;margin:0;padding:30px 0 0 10px;">Message:  </h3><br><p style="margin:30px 0 0 30px;padding:0;">' + req.body.contactMessage + '</p></div><br>'
        + '</div>'
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('An error occured sending contact form email.');
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
});



// Setup express
// app.use(parse.json());
// app.use(parse.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 5000);

// Set default route
app.get('/', function (req, res) {
	res.send('<html><body><p>Welcome to the Told Handyman App</p></body></html>');
});

// Create server
http.createServer(app).listen(app.get('port'), function(){
	console.log('Server listening on port ' + app.get('port'));
});

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const Gmail = require('../config.js');

const app = express();

// Allow CORS
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/contacted', (req,res) =>{
    // SMTP Server
    const smtp = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: Gmail.User,
            pass: Gmail.Pass
        }
    })

    // Email template
    const email = {
        from: req.body.email,
        to: Gmail.User,
        subject: req.body.name + ' wants to connect at ' + req.body.email,
        text: req.body.message
    }

    smtp.sendMail(email, (err) =>{
       if(err) {
           res.sendStatus(500);
           console.log(err.message)
       }
       else res.sendStatus(200);
    });
});

app.listen(3001, () => {
    console.log('Listening');
});
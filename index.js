const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const app = express()
const SMS = require('simplefreesms');
const translate = require('translate-google')
const fs = require('fs');
const nodemailer = require("nodemailer")

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gdlyeabkov@gmail.com',
        pass: 'reversepassword'
    }
})

app.use('/', serveStatic(path.join(__dirname, '/dist')))

app.get('/sms', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
   
    SMS.sendStatic('XXXXXXXX', 'XXXXXXXXXXXXXX', 'message').then(function() {
        console.log('sended');
        return res.json({ status: 'OK' })
    }).catch(function(err) {
        console.log(`not sended: ${err}`);
        return res.json({ status: 'Error' })
    });
    
})

app.get('/api/translate', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    translate(req.query.words, { to: req.query.outputlanguage }).then(result => {
        return res.json({ status: 'OK', result: result })
    }).catch(err => {
        return res.json({ status: 'Error', error: err })
    })
})

app.get('/api/send', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    let mailOptions = {
        from: `"${'gdlyeabkov'}" <${"gdlyeabkov"}>`,
        to: `${req.query.email}`,
        subject: `Перевод от transland`,
        html: `<h3>Transland прислал вам перевод</h3><p>${req.query.translate}</p>`,
    }
    transporter.sendMail(mailOptions, function (err, info) {
        return res.json({ status: 'OK' })
    })

})

app.get('**', (req, res) => { 
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    return res.redirect(`https://transland.herokuapp.com/?redirectroute=${req.path}`)
    // return res.redirect(`http://localhost:4000/?redirectroute=${req.path}`)
})

const port = process.env.PORT || 8080
// const port = 4000  
app.listen(port)
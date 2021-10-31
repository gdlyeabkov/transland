const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const app = express()

const SMS = require('simplefreesms');

const translate = require('translate-google')

const tts = require('google-translate-tts');
const fs = require('fs');

const googleTTS = require('google-tts-api'); // CommonJS

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

app.get('/api/speak', async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    let speakText = req.query.words
    let speakLanguage = req.query.language
    
    // const buffer = await tts.synthesize({
    //     text: 'speakText',
    //     voice: 'en-US',
    //     slow: false // optional
    // }).catch(e => {
    //     console.log(`error: ${e}`)
    // });
    // fs.writeFileSync('./audios/hello-world.mp3', buffer);

    const url = googleTTS.getAudioUrl('speakText', {
        lang: 'en',
        slow: false,
        host: 'https://translate.google.com',
    });
    return res.json({ status: 'OK', url: url })
      
})

app.get('**', (req, res) => { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    return res.redirect(`http://localhost:4000/?redirectroute=${req.path}`)
})

// const port = process.env.PORT || 8080
const port = 4000  
app.listen(port)
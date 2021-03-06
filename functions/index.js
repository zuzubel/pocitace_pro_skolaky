const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
admin.initializeApp();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pocitaceproskolaky@gmail.com',
    pass: 'czechitas2020',
  },
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', '*');

    if (req.method === 'OPTIONS') {
      res.end();
    } else {
      cors(req, res, () => {
        if (req.method !== 'POST') {
          return;
        }

        const mailOptions = {
          from: 'Počítače pro školáky <pocitaceproskolaky@gmail.com>',
          to: req.body.emailRecipient,
          subject: 'Nabídka počítačů',
          text: req.body.message,
          html: `<div><p>Dobrý den, máme pro Vás skvělou zprávu! Obdrželi jsme reakci na Váš inzerát: </p>
          <p><span style="font-weight: bold">Vzkaz od dárce: </span>${req.body.message}</p>
          <p><span style="font-weight: bold">Jméno dárce: </span>${req.body.name}</p>
          <p><span style="font-weight: bold">Kontaktní údaje: </span>${req.body.emailSender}</p>
<p>Teď už je to na Vás! Ozvěte se dárci a domluvte se na předání. 
<p>pocitaceproskolaky.netlify.app</p></div>`,
        };

        // returning result
        return transporter.sendMail(mailOptions, (erro) => {
          if (erro) {
            return res.send(erro.toString());
          }
          return res.send('Sended');
        });
      });
    }
  });
});

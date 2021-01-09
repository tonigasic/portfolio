const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({credential: admin.credential.cert(serviceAccount)});
const db = admin.firestore();

async function getUser () {
    return await db.collection('users').get()
        .then((res)=>{
            if (res.empty) {
                console.log('No matching documents.');
                return null;
            }
            return res.docs[0].data();
        })
}

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        getUser().then((user) => {
                if (!user) {
                    return res.send('Failed Authentication');
                }

                /**
                 * Here we're using Gmail to send
                 */
                let transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: user
                });

                //getting dest email by query string
                const dest = user.user;
                const name = req.query.name;
                const email = req.query.email;
                const message = req.query.message;

                const mailOptions = {
                    from: email, // Something like: Jane Doe <janedoe@gmail.com>
                    to: dest,
                    subject: 'PORTFOLIO EMAIL', // email subject
                    html: `
                    <p style="font-size: 16px;">Name:${name}</p>
                    <p style="font-size: 16px;">Email:${email}</p>
                    <p style="font-size: 16px;">Message:${message}</p>
                  ` // email content in HTML
                };

                // returning result
                return transporter.sendMail(mailOptions, (erro, info) => {
                    if(erro){
                        return res.send(erro.toString());
                    }
                    return res.send('Sended');
                });
            })
    });
});

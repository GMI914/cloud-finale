const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const gmail = functions.config().gmail.email;
const password = functions.config().gmail.password;

function snedMail(authEmail, password, sentTo) {
    const mailTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: authEmail,
            pass: password,
        },
    });

    const mailOptions = {
        from: '"me" <noreply@firebase.com>',
        to: sentTo,
    };

    mailOptions.subject = 'no subject';
    mailOptions.text = 'davaleba 7';

    return mailTransport.sendMail(mailOptions)
}

module.exports = functions.pubsub.schedule('every 1 hour').onRun(async () => {
    const sendTo = 'gmifroever914@gmail.com';
    functions.logger.log(sendTo);
    await sendMail(gmail, password, sentTo);
})
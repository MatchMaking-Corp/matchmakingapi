const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'matchmaking.sas@gmail.com',
        pass: '735129Mm'
    }
});

// Fonction pour envoyer l'email
const sendEmail = (req, res) => {
    const { email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'matchmaking.sas@gmail.com',
        subject: 'Nouveau message de contact',
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Erreur lors de l\'envoi du message');
        } else {
            console.log('Email envoyé: ' + info.response);
            res.status(200).send('Message bien envoyé');
        }
    });
};

module.exports = sendEmail;

const express = require('express');
const sendEmail = require('../config/mail');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/send-email', sendEmail);

app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});

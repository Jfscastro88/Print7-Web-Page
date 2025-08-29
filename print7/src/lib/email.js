import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    process.env.GMAIL_REDIRECT_URI,
);

// Set the refresh token you generated
oauth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN,
});

// Returns an authenticated Gmail service instance
function getGmailService() {
    return google.gmail({ version: 'v1', auth: oauth2Client });
}

// Create an RFC 2822 message, base64-url encoded
function makeBody({ to, from, subject, message }) {
    const str = [
    `From: ${from}`,
    `To: ${to}`,
    `Subject: ${subject}`,
    'Content-Type: text/html; charset=UTF-8',
    '',
    message,
    ].join('\n');

    return Buffer.from(str)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export async function sendContactMail({ nome, sobrenome, email, telefone, mensagem }) {
    const gmail = getGmailService();

    const html = `
    <h2>Nuovo messaggio da Print7 Contact Form</h2>
    <p><strong>Nome:</strong> ${nome} ${sobrenome}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefono:</strong> ${telefone}</p>
    <p><strong>Messaggio:</strong><br/>${mensagem.replace(/\n/g,'<br/>')}</p>
    `;

    const raw = makeBody({
    to: 'geral@print7.pt',               // your inbox
    from: process.env.GMAIL_FROM,
    subject: `Contatto da ${nome} ${sobrenome}`,
    message: html,
    });

    await gmail.users.messages.send({  
    userId: 'me',
    requestBody: {
        raw,
    },
    });
}

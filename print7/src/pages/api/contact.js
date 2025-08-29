import { sendContactMail } from '../../lib/email';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end('Only POST allowed');
    }
    const { nome, sobrenome, email, telefone, mensagem } = req.body;
    if (!nome || !email || !mensagem) {
        return res.status(400).json({ error: 'Campi mancanti' });
    }
    try {
        await sendContactMail({ nome, sobrenome, email, telefone, mensagem });
        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error('Mail error:', err);
        return res.status(500).json({ error: 'Errore invio mail' });
    }
}

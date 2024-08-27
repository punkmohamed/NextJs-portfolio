import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, message } = req.body;

        // Configure the transporter (Use your email provider's settings)
        const transporter = nodemailer.createTransport({
            service: 'gmail', // e.g., 'gmail', 'yahoo', etc.
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password
            },
        });

        try {
            // Send the email
            await transporter.sendMail({
                from: email, // Sender email address
                to: process.env.RECEIVER_EMAIL, // Your email address where you'll receive the message
                subject: 'New Contact Form Message',
                text: message,
            });

            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }
}

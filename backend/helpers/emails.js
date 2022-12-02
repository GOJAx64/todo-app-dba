import nodemailer from 'nodemailer';

export const emailRegistration = async(data) => {
    const { email, name, token } = data;
    
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "7a228926896d97",
          pass: "db13421e3dfa0b"
        }
    });

    const info = await transport.sendMail({
        from: '"ToDo-App DBA" <cuentas@todoapp.com>',
        to: email,
        subject: 'ToDo-App Comprueba tu cuenta',
        text: 'Comprueba tu cuenta en ToDo-App',
        html: `<p>Hola: ${name}, comprueba tu cuenta en ToDo-App</p>
               <p>Tu cuenta ya está casi lista, solo accede al siguiente enlace:
                    <a href="${process.env.FRONTEND_URL}/auth/confirm/${token}">Comprobar Cuenta</a>
               </p>
               <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>`
    });
};
import nodemailer from 'nodemailer';

export const emailRegistration = async(data) => {
    const { email, name, token } = data;
    
    //TODO: move to env variables
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


export const emailForgotPassword = async(data) => {
    const { email, name, token } = data;
    
    //TODO: move to env variables
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
        subject: 'ToDo-App Reestablece tu contraseña',
        text: 'Reestablece tu contraseña',
        html: `<p>Hola: ${name}, has solicitado reestablecer tu contraseña</p>
               <p>accede al siguiente enlace para reestablecer tu contraseña:
                    <a href="${process.env.FRONTEND_URL}/auth/forgot_password/${token}">Reestablecer contraseña</a>
               </p>
               <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>`
    });
};

import nodemailer from 'nodemailer';

export const emailRegistration = async(data) => {
    const { email, name, token } = data;
    
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
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
    
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
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

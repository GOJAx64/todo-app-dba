import User from '../models/User.js';
import generateId from '../helpers/generateId.js';
import generateJWT from '../helpers/generateJWT.js';
import { emailRegistration } from '../helpers/emails.js';

export const register = async (req, res) => {
    const { email } = req.body;
    const userExists = await User.findOne({ email });
    
    if(userExists) {
        const error = new Error("Ya existe un usuario registrado con ese email");
        return res.status(400).json({ msg: error.message });
    }

    try {
        const user = new User(req.body);
        user.token = generateId();
        await user.save();

        emailRegistration({
            email: user.email,
            name: user.name,
            token: user.token,
        })

        res.json({ msg: 'Usuario creado correctamente, Revisa tu correo para confirmar tu cuenta'});
    } catch (error) {
        return res.status(500).json({ msg: error.message + " - Contacte al administrador" });
    }
};


export const authenticate = async(req, res) => {
    const {email, password} = req.body;

    //User exists
    const user = await User.findOne({email});
    if(!user) {
        const error = new Error('No existe el usuario');
        return res.status(404).json({ msg: error.message });
    }

    //User confirmed
    if(!user.confirmed) {
        const error = new Error('La cuenta de usuario no ha sido confirmada');
        return res.status(403).json({ msg: error.message });
    }

    //verify password
    if(await user.checkPassword(password)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateJWT(user._id),
        })
    } else {
        const error = new Error('Incorrect Password');
        return res.status(403).json({ msg: error.message });
    }
};

export const confirm = async(req, res) => {
    const { token } = req.params;
    const userForConfirm = await User.findOne({token});

    if(!userForConfirm) {
        const error = new Error('Token no válido');
        return res.status(403).json({ msg: error.message });
    }

    try {
        userForConfirm.confirmed = true;
        userForConfirm.token= "";
        await userForConfirm.save();
        res.json({ msg: 'Usuario cofirmado exitosamente' });
    } catch (error) {
        return res.status(500).json({ msg: error.message + " Contacte al administrador" });
    }
};

export const forgotPassword = async(req, res) => {
    const { email } = req.body;
    
    const user = await User.findOne({email});
    if(!user) {
        const error = new Error('No existe el usuario');
        return res.status(404).json({ msg: error.message });
    }

    try {
        user.token = generateId();
        await user.save();
        res.json( {msg: "Enviamos un correo con instrucciones"} );
    } catch (error) {
        return res.status(500).json({ msg: error.message + " Contacte al administrador" });
    }
}

export const checkToken = async(req, res) => {
    const { token } = req.params;

    const validToken = await User.findOne({ token });
    if(validToken) {
        res.json({ msg: 'El usuario existe y el token es válido' });
    } else {
        const error = new Error('Token no válido');
        return res.status(404).json({ msg: error.message });
    }
}

export const newPassword = async(req, res) => {
    const { token } = req.params;
    const { password } = req.body;
    
    const user = await User.findOne({ token });
    if(user) {
        user.password = password;
        user.token = '';
        await user.save();
        res.json({ msg: "Contraseña modificada correctamente"});
    } else {
        const error = new Error('Token no válido');
        return res.status(404).json({ msg: error.message });
    }
};

export const profile = async(req, res) => {
    const { user } = req;
    res.json(user);
};
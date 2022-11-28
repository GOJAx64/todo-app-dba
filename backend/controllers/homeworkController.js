import Homework from "../models/Homework.js";

export const getHomeworks = async(req, res) => {
    const homeworks = await Homework.find().where('creator').equals(req.user);
    res.json(homeworks);
};

export const newHomework = async(req, res) => {
    const homework = new Homework(req.body);
    homework.creator = req.user._id;

    try {
        const storedHomework = await homework.save();
        res.json(storedHomework);
    } catch (error) {
        return res.status(500).json({ msg: error.message + " - Contacte al administrador" });
    }
};

export const getHomework = async(req, res) => {
    const { id } = req.params;
    const homework = await Homework.findById(id); 

    if(!homework) {
        const error = new Error('Tarea no encontrada');
        return res.status(404).json({ msg: error.message });
    }

    if(!homework.creator.toString() ===  req.user._id.toString()) {
        const error = new Error('No cuenta con permisos para realizar esta acción');
        return res.status(403).json({ msg: error.message });
    }

    res.json(homework);
};

export const editHomework = async(req, res) => {
    const { id } = req.params;
    const homework = await Homework.findById(id); 

    if(!homework) {
        const error = new Error('Tarea no encontrada');
        return res.status(404).json({ msg: error.message });
    }

    if(!homework.creator.toString() ===  req.user._id.toString()) {
        const error = new Error('No cuenta con permisos para realizar esta acción');
        return res.status(401).json({ msg: error.message });
    }

    homework.title =       req.body.name        || homework.name;
    homework.description = req.body.description || homework.description;
    homework.dueDate =     req.body.dueDate     || homework.dueDate;
    homework.favorite =    req.body.favorite    || homework.favorite;
    
    try {
        const storedHomework = await homework.save();
        res.json(storedHomework);
    } catch (error) {
        return res.status(500).json({ msg: error.message + " - Contacte al administrador" });
    }
};

export const deleteHomework = async(req, res) => {
    const { id } = req.params;
    const homework = await Homework.findById(id); 

    if(!homework) {
        const error = new Error('Tarea no encontrada');
        return res.status(404).json({ msg: error.message });
    }

    if(!homework.creator.toString() ===  req.user._id.toString()) {
        const error = new Error('No cuenta con permisos para realizar esta acción');
        return res.status(401).json({ msg: error.message });
    }

    try {
        await homework.deleteOne();
        res.json({ msg: "Tarea eliminada"});
    } catch (error) {
        return res.status(500).json({ msg: error.message + " - Contacte al administrador" });
    }
};

export const changeFavorite = async(req, res) => {

};
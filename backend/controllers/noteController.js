import Note from "../models/Note.js";

export const getNotes = async(req, res) => {
    const notes = await Note.find().where('creator').equals(req.user);
    res.json(notes);
};

export const newNote = async(req, res) => {
    const note = new Note(req.body);
    note.creator = req.user._id;

    try {
        const storedNote = await note.save();
        res.json(storedNote);
    } catch (error) {
        return res.status(500).json({ msg: error.message + " - Contacte al administrador" });
    }
};

export const getNote = async(req, res) => {
    const { id } = req.params;
    const note = await Note.findById(id); 

    if(!note) {
        const error = new Error('Nota no encontrada');
        return res.status(404).json({ msg: error.message });
    }

    if(!note.creator.toString() ===  req.user._id.toString()) {
        const error = new Error('No cuenta con permisos para realizar esta acción');
        return res.status(403).json({ msg: error.message });
    }

    res.json(note);
};

export const editNote = async(req, res) => {
    const { id } = req.params;
    const note = await Note.findById(id); 

    if(!note) {
        const error = new Error('Nota no encontrada');
        return res.status(404).json({ msg: error.message });
    }

    if(!note.creator.toString() ===  req.user._id.toString()) {
        const error = new Error('No cuenta con permisos para realizar esta acción');
        return res.status(401).json({ msg: error.message });
    }

    note.title =       req.body.name        || note.name;
    note.description = req.body.description || note.description;
    note.favorite =    req.body.favorite    || note.favorite;
    
    try {
        const storedNote = await note.save();
        res.json(storedNote);
    } catch (error) {
        return res.status(500).json({ msg: error.message + " - Contacte al administrador" });
    }
};

export const deleteNote = async(req, res) => {
    const { id } = req.params;
    const note = await Note.findById(id); 

    if(!note) {
        const error = new Error('Nota no encontrada');
        return res.status(404).json({ msg: error.message });
    }

    if(!note.creator.toString() ===  req.user._id.toString()) {
        const error = new Error('No cuenta con permisos para realizar esta acción');
        return res.status(401).json({ msg: error.message });
    }

    try {
        await note.deleteOne();
        res.json({ msg: "Nota eliminada"});
    } catch (error) {
        return res.status(500).json({ msg: error.message + " - Contacte al administrador" });
    }
};

export const changeFavorite = async(req, res) => {

};
import { createSlice } from '@reduxjs/toolkit';

// import { addHours } from 'date-fns';
// const tempEvent =   {
//     _id: new Date().getTime(),
//     title: 'Tarea Nueva',
//     start: new Date(),
//     due: addHours( new Date(), 2),
//     description: 'Esta es una nueva ',
//     user: {
//         _id: '123',
//         name: 'Alberto'
//     }
// };

export const homeworkSlice = createSlice({
    name: 'homework',
    initialState: {
        isSaving: true,
        messageSaved: '',
        homeworks: [],
        activeHomework: null
    },
    reducers: {
        addNewEmptyHomework: ( state, action ) => {
            state.homeworks.push( action.payload );
            state.isSaving = false;
        },
        setActiveHomework: ( state, action ) => {

        },
        setHomeworks: ( state, action ) => {

        },
        setSaving: ( state ) => {

        },
        updateHomework: ( state, action ) => {

        },
        deleteHomeworkById: ( state, action ) => {

        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    addNewEmptyHomework, 
    setActiveHomework, 
    setHomeworks, 
    setSaving,
    updateHomework,
    deleteHomeworkById,
} = homeworkSlice.actions;
import { useDispatch } from 'react-redux';
import { onSetActiveEvent } from '../store';

 export const useTodoAppStore = () => {
    const dispatch = useDispatch();
    
    const createNewForm = () => {
        dispatch( onSetActiveEvent( event ) )
    }

    return {
        //* Propiedades

        //* Métodos
        createNewForm,
    }
 }
 
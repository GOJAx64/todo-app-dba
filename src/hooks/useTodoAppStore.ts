import { useDispatch } from 'react-redux';
import { addNewEmptyHomework } from '../store';

 export const useTodoAppStore = () => {
    const dispatch = useDispatch();
    
    const createNewHomework = () => {
        dispatch( addNewEmptyHomework( event ) )
    }

    return {
        //* Propiedades
        
        //* Métodos
        createNewHomework,
    }
 }
 
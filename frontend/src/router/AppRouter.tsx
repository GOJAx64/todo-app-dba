import { Route, Routes } from 'react-router-dom';

import useAuth from '../hooks/useAuth';
import { AuthApp } from '../auth';
import { TodoApp } from '../todo-app';

export const AppRouter = () => {
    
    const { auth }:any = useAuth();

    return (
        <Routes>
            {
                auth._id  
                    ? <Route path="/*"      element={ <TodoApp/> } />
                    : <Route path="/auth/*" element={ <AuthApp/> } />
            }        
        </Routes>
    )
}

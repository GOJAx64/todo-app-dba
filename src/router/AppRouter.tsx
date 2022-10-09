import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthApp } from '../auth';
import { TodoApp } from '../todo-app';

export const AppRouter = () => {
    const authStatus = 'not-authenticated';

    return (
        <Routes>
            {
                (authStatus === 'authenticated')  
                    ? <Route path="/auth/*" element={ <AuthApp/> } />
                    : <Route path="/*"      element={ <TodoApp/> } />
            }        
            <Route path="/*"        element={ <Navigate to="/auth/login"/> } />
        </Routes>
    )
}

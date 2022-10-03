import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../auth';
import { ProfilePage } from '../todo-app';

export const AppRouter = () => {
    const authStatus = 'not-authenticated';

    return (
        <Routes>
                {
                    (authStatus === 'not-authenticated')  
                        ? <Route path="/auth/*" element={ <LoginPage  /> } />
                        : <Route path="/*"      element={ <ProfilePage/> } />
                }
                <Route path="/*"        element={ <Navigate to="/auth/login"/> } />
                <Route path="/register" element={ <RegisterPage /> } />
        </Routes>
    )
}

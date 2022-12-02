import { Navigate, Route, Routes } from 'react-router-dom';
import { Confirm, ForgotMyPassword, LoginPage, NewPassword, RegisterPage } from './pages';


export const AuthApp = () => {
  return (
    <Routes>
        <Route path="/login"                  element={ <LoginPage/>         } />
        <Route path="/register"               element={ <RegisterPage />     } />
        <Route path="/forgot_password"        element={ <ForgotMyPassword /> } />
        <Route path="/forgot_password/:token" element={ <NewPassword />      } />
        <Route path="/confirm/:token"         element={ <Confirm />          } />
        <Route path="/*"                      element={ <Navigate to="/auth/login"/> } />
    </Routes>
  )
}

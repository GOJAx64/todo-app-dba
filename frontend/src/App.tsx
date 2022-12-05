import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { AppProvider } from './context/AppProvider';
import { AppRouter } from './router/AppRouter';


export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <AppRouter/>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

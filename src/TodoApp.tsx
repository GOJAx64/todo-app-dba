import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'

export const TodoApp = () => {
  return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
  )
}

import { Route, Routes } from 'react-router-dom'

import { Navbar, SideBar } from './layout'
import { CalendarPage, HomeworksPage, NotesPage } from '../todo-app/pages';

export const TodoApp = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex'>
        <SideBar/>
        <Routes>
          <Route path="/homeworks" element={ <HomeworksPage/> } />
          <Route path="/notes"     element={ <NotesPage/> } />
          <Route path="/calendar"  element={ <CalendarPage/> } />
        </Routes>
      </div>
    </div>
  )
}

import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { SideBar } from './layout';
import { CalendarPage, HomeworksPage, NotesPage } from '../todo-app/pages';

export const TodoApp = () => {
  const [homeworks, setHomeworks] = useState([]);
  const [homework, setHomework] = useState({});

  return (
    <div>
      <div className='flex'>
        <SideBar/>
        <Routes>
          <Route path="/homeworks" element={ <HomeworksPage homeworks={homeworks} setHomeworks={setHomeworks} homework={homework} setHomework={setHomework}/> } />
          <Route path="/notes"     element={ <NotesPage/> } />
          <Route path="/calendar"  element={ <CalendarPage/> } />
          <Route path="/*"         element={ <Navigate to="/homeworks"/> } />
        </Routes>
      </div>
    </div>
  )
}

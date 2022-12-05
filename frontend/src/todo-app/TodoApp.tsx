import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { SideBar } from './layout';
import { CalendarPage, HomeworksPage, NotesPage } from '../todo-app/pages';
import axiosClient from '../config/axiosClient';

export const TodoApp = () => {
  const [homeworks, setHomeworks] = useState([]);
  const [homework, setHomework] = useState({});

  useEffect(() => {
    const getHomeworks = async() => {
      const token = localStorage.getItem('token');
      if(!token) return;

      const config = {
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
          }
      };

      const { data } = await axiosClient('/homeworks', config);
      await setHomeworks(data);
    }
    
    getHomeworks();
  }, [])
  
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

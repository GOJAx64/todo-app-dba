import { NavLink } from 'react-router-dom';
import todo from '../../assets/todo.svg';
import note from '../../assets/note.svg';
import calendar from '../../assets/calendar.svg';
import logo from '../../assets/logo-1.svg';
import useAuth from '../../hooks/useAuth';

export const SideBar = () => {
  
  const { auth }:any = useAuth();
  
  return (
    <aside className="w-64 h-screen flex-none bg-slate-200 lg:visible" aria-label="Sidebar">
      <div className="py-4 px-3 ">
        <ul className="space-y-2">
            <li>
              <NavLink to="/" className="bg-slate-800 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-slate-700">
                  <img src={logo} className="h-8 mr-2" alt="logo" />
                  <span className="ml-3 font-bold text-lg text-slate-100">{ auth.username }</span>
              </NavLink>
            </li>
             
            <li>
              <NavLink to="/homeworks" className={ ({ isActive }) => `${ isActive ? 'bg-gray-100 border-slate-500 ' : ''} flex items-center p-2 text-base font-normal border text-gray-900 rounded-lg hover:bg-gray-100`}>
                  <img src={ todo } alt="todo" className='h-5'/>
                  <span className="flex-1 ml-3 whitespace-nowrap">Deberes</span>
                  <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full">3</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/notes" className={ ({ isActive }) => `${ isActive ? 'bg-gray-100 border-slate-500 ' : ''} flex items-center p-2 text-base font-normal border text-gray-900 rounded-lg hover:bg-gray-100`}>
                  <img src={ note } alt="todo" className='h-5'/>
                  <span className="flex-1 ml-3 whitespace-nowrap">Notas</span>
                  <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full">3</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/calendar" className={ ({ isActive }) => `${ isActive ? 'bg-gray-100 border-slate-500 ' : ''} flex items-center p-2 text-base font-normal border text-gray-900 rounded-lg hover:bg-gray-100`}>
                  <img src={ calendar } alt="todo" className='h-5'/>
                  <span className="flex-1 ml-3 whitespace-nowrap">Calendario</span>
              </NavLink>
            </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2 border-t border-slate-300">
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-red-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
                  <span className="flex-1 ml-3 whitespace-nowrap text-red-500">Cerrar sesión</span>
              </a>
            </li>
        </ul>
      </div>
    </aside>
  )
}

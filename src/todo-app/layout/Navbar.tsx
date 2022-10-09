import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  const onClickButton = () => {
      setToggleMenu(!toggleMenu);
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-900 p-6 w-full">
        <div className="flex items-center flex-shrink-0 mr-6">
            {/* <img src={logo} className=" h-8 w-8 mr-2" alt="logo" /> */}
            <span className="text-2xl tracking-tight font-extrabold text-slate-200">José Alberto García Ochoa</span>
        </div>
        <div className="block lg:hidden">
            <button onClick={ onClickButton } className="flex items-center px-3 py-2 border border-slate-300 rounded text-white hover:text-white hover:border-red-500">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>

        <div id='menuNavbar' className={ `w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center lg:text-right ${ toggleMenu ? 'hidden' : '' }`}>
            <div className="text-base lg:flex-grow">
                {/* <NavLink onClick={ onClickButton } 
                    to="/home" 
                    className={ ({ isActive }) => `${ isActive ? 'text-red-500' : 'text-slate-100 hover:text-red-200'} block mt-4 lg:inline-block lg:mt-0 font-bold mr-4`}>
                    Home
                </NavLink>*/}
                {/* <NavLink onClick={ onClickButton } to="#" className={ ({ isActive }) => `${ isActive ? 'text-red-500' : 'text-slate-100 hover:text-red-200'}  mt-4 flex lg:inline-block lg:mt-0 font-bold mr-4`}>
                    <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-red-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
                    <span className="flex-1 ml-3 whitespace-nowrap text-red-500">Cerrar sesión</span>
                </NavLink> */}
                {/* <NavLink onClick={ onClickButton } to="#" className="flex items-center w-1/6 p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-red-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap text-red-500">Cerrar sesión</span>
                    
                </NavLink> */}
            </div>
        </div>
    </nav>
  )
}

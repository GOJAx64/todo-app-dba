import logo from '../../assets/logo-1.svg';

export const Navbar = () => {
  return (
    <nav className="h-1/6 flex items-center justify-between flex-wrap bg-slate-900 p-6 w-full">
        <div className="flex items-center flex-shrink-0 mr-6">
            <img src={logo} className="h-8 mr-2" alt="logo" />
            <span className="text-2xl tracking-tight ml-2 font-extrabold text-slate-200">José Alberto García Ochoa</span>
        </div>
    </nav>
  )
}
import { Card } from '../../components'

export const HomeworksPage = () => {
  return (
    <div className='flex-1 h-[89.8vh]'>
      
      <div className='flex '>
          <div className='w-1/2 px-5 py-5  h-[89.8vh] overflow-y-auto overflow-hidden bg-slate-100'>
              Tareas 
              <Card/>
              <Card/>
              <Card/>
          
          </div>
          <div className='w-1/2  bg-slate-200'>
            <div className="p-6 md:px-8 md:py-8">
                {/*  Top Content  */}
                <h2 className="text-4xl font-bold">Tarea 1</h2>
                <span className='mb-5 block font-thin text-sm text-slate-700'>Agregada: 12/10/2022</span>
                <br />
                <label className='ml-1 text-sm text-slate-700'>Fecha de vencimiento</label>
                <input type="date" className="block w-full mb-2 p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light text-slate-500"/>
                <label className='ml-1 text-sm text-slate-700'>Título</label>
                <input type="text" className="block w-full mb-2 p-3 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light "/>
                <label className='ml-1 text-sm text-slate-700'>Descripción</label>
                <input type="password" className="block w-full mb-2 p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"/>
                {/* Border */}
                <div className="mt-5 border-b border-b-gray-300"></div>
                <div className="flex flex-col items-center justify-around mt-6 space-y-6 md:flex-row md:space-y-0">
                    <button className="w-full md:w-auto flex justify-center items-center px-8 py-2 space-x-0 font-sans font-bold text-white rounded-md bg-orange-400  hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                        <span>Editar</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <line x1="13" y1="18" x2="19" y2="12" />
                            <line x1="13" y1="6" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button className="w-full md:w-auto flex justify-center items-center px-8 py-2 space-x-0 font-sans font-bold text-white rounded-md bg-yellow-400  hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                        <span>Favoritos</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <line x1="13" y1="18" x2="19" y2="12" />
                            <line x1="13" y1="6" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button className="w-full md:w-auto flex justify-center items-center px-8 py-2 space-x-0 font-sans font-bold text-white rounded-md bg-red-500  hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                        <span>Eliminar</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <line x1="13" y1="18" x2="19" y2="12" />
                            <line x1="13" y1="6" x2="19" y2="12" />
                        </svg>
                    </button>
                </div>
                
                
            </div>
          </div>
      </div>
    </div>
  )
}

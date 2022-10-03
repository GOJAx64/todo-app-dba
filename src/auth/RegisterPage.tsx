import React from 'react'

export const RegisterPage = () => {
  return (
<form>
      <div className="flex items-center justify-center min-h-screen bg-slate-300">
          {/* Card Container */}
          <div className=" flex flex-col m-6 space-y-10 bg-slate-100 shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
            
              <div className="p-6 md:px-8 md:py-8">      
                  <h2 className="mb-5 text-4xl font-bold text-center">Registro de Usuario</h2>
                  <p className="max-w-sm mb-4 font-sans font-light text-center text-gray-600">
                      Llena los campos con los datos requeridos
                  </p>
                  <hr className='pt-2 border-slate-400 mb-6'/>

                  <label className='text-gray-600'>Nombre</label>
                  <input type="text" className="block w-full py-4 px-3 mb-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" placeholder="Ingresa tu nombre"/>
                  <label className='text-gray-600'>Correo electrónico</label>
                  <input type="text" className="block w-full py-4 px-3 mb-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" placeholder="Ingresa tu correo eléctronico"/>
                  <label className='text-gray-600'>Contraseña</label>
                  <input type="password" className="block w-full mb-2 py-4 px-3 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" placeholder="Ingresa tu contraseña"/>
                  
                 
                  <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                      <button className="w-full md:w-auto flex justify-center items-center px-8 py-3 space-x-0 font-sans font-bold text-white rounded-md bg-blue-700 shadow-blue-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                          <span>Continuar</span>
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
    </form>
  )
}

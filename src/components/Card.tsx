
export const Card = (  ) => {
    return (
      <div className="flex items-center mx-4 mt-2 bg-slate-100 rounded-lg border border-slate-400 shadow-md md:mx-0 md:flex-row md:w-full hover:bg-slate-100 hover:border-slate-500">
          {/* <img className="ml-2" src='' alt='PRUEBA' /> */}
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className='text-left mb-1 text-lg font-bold tracking-tight text-slate-900 capitalize'>Tarea de ABD</h5>
              <span>Cumplir con los requerimientos</span>
          </div>
      </div>
    )
  }
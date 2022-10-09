
export const Card = (  ) => {
    return (
      <div className="flex items-center my-2 bg-slate-100 rounded-lg border border-slate-300 shadow-md md:mx-0 md:flex-row md:w-full hover:bg-slate-200 hover:border-slate-400">
          {/* <img className="ml-2" src='' alt='PRUEBA' /> */}
          <div className="flex flex-col justify-between py-2 px-3 leading-normal">
              <h5 className='text-left mb-1  font-bold tracking-tight text-slate-900 capitalize'>Tarea de ABD</h5>
              <span className='text-xs text-slate-500'>Cumplir con los requerimientos</span>
          </div>
      </div>
    )
  }
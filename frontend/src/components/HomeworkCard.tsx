
export const HomeworkCard = ({ homework, setHomework}:any ) => {
  return (
      <button onClick={ () => setHomework(homework) } className="flex items-center my-2 bg-slate-100 rounded-lg border border-slate-300 shadow-md md:mx-0 md:flex-row md:w-full hover:bg-slate-200 hover:border-slate-400">
          <div className="flex flex-col justify-between py-2 px-3 leading-normal">
              <h5 className='text-left mb-1  font-bold tracking-tight text-slate-900 capitalize'>{ homework.title }</h5>
              {/* <span className='text-xs text-slate-500'>{ homework.dueDate.toLocaleString() }</span> */}
          </div>
      </button>
    )
  }
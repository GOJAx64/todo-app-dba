import fav  from '../assets/fav.svg';
import del from '../assets/delete-1.svg';

export const HeaderHomework = ({ homework }:any) => {
    return (
        <div className='flex mb-6'>
            <div>
                <h2 className="text-4xl font-bold">{ homework.title }</h2>
            </div>
            <div className="flex flex-1 items-center justify-end mb-4 space-y-6 md:flex-row md:space-y-0">
                <button className="w-full md:w-auto flex justify-center items-center mx-1 px-4 py-2 space-x-0 rounded-md bg-slate-300 hover:bg-opacity-90  hover:shadow-md border hover:border-slate-300">
                    <img src={ fav } className='h-5'/>
                </button>
                <button className="w-full md:w-auto flex justify-center items-center mx-1 px-4 py-2 space-x-0 rounded-md bg-red-600   hover:bg-opacity-90  hover:shadow-md border hover:border-red-600">
                    <img src={ del } alt="delete" className='h-5' />
                </button>
            </div>
        </div>
    )
}

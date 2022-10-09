import { Card, TitleHeader } from '../../components';
import fav  from '../../assets/fav.svg';
import edit  from '../../assets/edit-1.svg';
import del from '../../assets/delete-1.svg';

export const HomeworksPage = () => {
    return (
        <div className='flex-1'>
            <div className='flex '>
                <div className='w-1/2 h-screen border-x border-slate-300 px-5 py-5  bg-slate-100'>
                        <TitleHeader title={ 'Deberes' }/>
                        <div className='h-5/6 overflow-y-auto scrollbar-hide'>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                </div>
                <div className='w-1/2 h-screen bg-slate-200'>
                    <div className="p-7 ">
                        {/*  Top Content  */}
                        <div className='flex'>
                            <div>
                                <h2 className="text-4xl font-bold ">Tarea 1</h2>
                                <span className='mb-5 block font-thin text-sm text-slate-700'>Agregada: 12/10/2022</span>
                            </div>
                            <div className="flex flex-1 items-center justify-end mb-4 space-y-6 md:flex-row md:space-y-0">
                                <button className="w-full md:w-auto flex justify-center items-center mx-1 px-4 py-2 space-x-0 rounded-md bg-slate-400 hover:bg-opacity-90  hover:shadow-md border hover:border-slate-300">
                                    <img src={ fav } className='h-5'/>
                                </button>
                                <button className="w-full md:w-auto flex justify-center items-center mx-1 px-4 py-2 space-x-0 rounded-md bg-blue-700  hover:bg-opacity-90  hover:shadow-md border hover:border-blue-500">
                                    <img src={ edit } alt="editar" className='h-5'/>
                                </button>
                                <button className="w-full md:w-auto flex justify-center items-center mx-1 px-4 py-2 space-x-0 rounded-md bg-red-600   hover:bg-opacity-90  hover:shadow-md border hover:border-red-600">
                                    <img src={ del } alt="delete" className='h-5' />
                                </button>
                            </div>
                        </div>
                        <div className="mb-5 border-b border-b-gray-300"></div>
                        <div className='border border-slate-300 bg-slate-100 p-3 rounded-md'>
                            <label className='ml-1 text-sm text-slate-700'>Fecha de vencimiento</label>
                            <input type="date" className="block w-full mb-2 p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light text-slate-500"/>
                            <label className='ml-1 text-sm text-slate-700'>Título</label>
                            <input type="text" className="block w-full mb-2 p-3 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light "/>
                            <label className='ml-1 text-sm text-slate-700'>Descripción</label>
                            <input type="password" className="block w-full mb-2 p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"/>
                        </div>
                        {/* Border */}
                        <div className="mt-5 border-b border-b-gray-300"></div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

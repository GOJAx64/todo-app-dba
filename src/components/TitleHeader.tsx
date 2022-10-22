import { useTodoAppStore } from '../hooks';

interface TitleHeaderProps{
    title: string;
}

export const TitleHeader = ({ title }:TitleHeaderProps) => {
    
    const { createNewForm } = useTodoAppStore();

    const handleNewEvent = () => {
        console.log('aqui si entra')
        createNewForm();
    }

    return (
        <>
            <div className='flex mb-3 border border-slate-400 py-5 px-4 rounded  bg-slate-300'>
                <div className='flex'>
                    <span className='text-2xl font-extrabold'>{ title }</span>
                </div>
                <div className='flex-1 flex justify-end'>
                    <button onClick={ handleNewEvent } className="text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 hover:shadow-md hover:bg-opacity-90   font-medium rounded-lg text-sm px-4 py-1.5 text-center">
                        +
                    </button>
                </div>
            </div>
            <div className="mb-4 border-b border-b-slate-300"></div>
        </>
    )
}

import { useEffect } from 'react';
import { FormHomeworks, HomeworkCard } from '../../components';
import axiosClient from '../../config/axiosClient';

export const HomeworksPage = ({homeworks, setHomeworks, homework, setHomework}:any ) => {
    
    const handleNewEvent = () => {
        setHomework({});
    }

    useEffect(() => {
        const getHomeworks = async() => {
          const token = localStorage.getItem('token');
          if(!token) return;
    
          const config = {
              headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`
              }
          };
    
          const { data } = await axiosClient('/homeworks', config);
          await setHomeworks(data);
        }
        
        getHomeworks();
    }, [])
      
    return (
        <div className='flex-1'>
            <div className='flex '>
                <div className='w-1/2 h-screen border-x border-slate-300 px-5 py-5  bg-slate-100'>
                    <div className='flex mb-3 border border-slate-400 py-5 px-4 rounded  bg-slate-300'>
                        <div className='flex'>
                            <span className='text-2xl font-extrabold'>Deberes</span>
                        </div>
                        <div className='flex-1 flex justify-end'>
                            <button onClick={ handleNewEvent } className="text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 hover:shadow-md hover:bg-opacity-90   font-medium rounded-lg text-sm px-4 py-1.5 text-center">
                                +
                            </button>
                        </div>
                    </div>
                    <div className="mb-4 border-b border-b-slate-300"></div>
                    <div className='h-5/6 overflow-y-auto scrollbar-hide'>
                        {
                            homeworks.length ? homeworks.map( (homework:any) => (
                                // console.log(homework)
                                <HomeworkCard key={ homework._id } homework={ homework } setHomework={ setHomework }/>
                            )) : <p> No Hay Deberes registrados</p>
                        }
                    </div>
                </div>
                <FormHomeworks homeworks={ homeworks } setHomeworks={ setHomeworks } homework={ homework } setHomework={ setHomework }/>
            </div>
        </div>
    )
}

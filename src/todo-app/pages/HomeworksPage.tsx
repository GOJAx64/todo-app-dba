import { useState } from 'react';
import { Card, FormHomeworks, TitleHeader } from '../../components';

export const HomeworksPage = () => {
    const [homeworks, setHomeworks] = useState([]);
    const [homework, setHomework] = useState({});

    return (
        <div className='flex-1'>
            <div className='flex '>
                <div className='w-1/2 h-screen border-x border-slate-300 px-5 py-5  bg-slate-100'>
                    <TitleHeader title={ 'Deberes' }/>
                    <div className='h-5/6 overflow-y-auto scrollbar-hide'>
                        { homeworks.map( (homework, index) => (
                            <Card key={ index } homework={ homework } setHomework={ setHomework }/>
                        ))}
                    </div>
                </div>
                <FormHomeworks homeworks={ homeworks } setHomeworks={ setHomeworks } homework={ homework } setHomework={ setHomework }/>
            </div>
        </div>
    )
}

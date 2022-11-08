import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';

import { useForm } from '../hooks';

import fav  from '../assets/fav.svg';
import edit  from '../assets/edit-1.svg';
import del from '../assets/delete-1.svg';
import { useEffect } from "react";

registerLocale('es', es)

export const FormHomeworks = ({ homeworks, setHomeworks, homework, setHomework }:any ) => {
    
    const {setFormValues, formValues, onSubmit, onInputChange, onDateChange }:any = useForm({
        due: undefined,
        title: '',
        description: '',   
    }, setHomeworks, homeworks);

    useEffect(() => {
      if( Object.keys(homework).length > 0 ) {
        setFormValues({
            due: homework.due,
            title: homework.title,
            description: homework.description, 
        })
      }
    }, [homework])
    

    return (
        <div className='w-1/2 h-screen bg-slate-200'>
            <div className="p-7 ">
                <div className='flex'>
                    <div>
                        <h2 className="text-4xl font-bold ">Tarea 1</h2>
                        <span className='mb-5 block font-thin text-sm text-slate-700'>Agregada: 12/10/2022</span>
                    </div>
                    <div className="flex flex-1 items-center justify-end mb-4 space-y-6 md:flex-row md:space-y-0">
                        <button className="w-full md:w-auto flex justify-center items-center mx-1 px-4 py-2 space-x-0 rounded-md bg-slate-300 hover:bg-opacity-90  hover:shadow-md border hover:border-slate-300">
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
                <form onSubmit={ onSubmit } className='border border-slate-300 bg-slate-100 p-3 rounded-md'>
                    <label htmlFor='due'className='ml-1 text-sm text-slate-700'>Fecha de vencimiento</label>
                    <DatePicker 
                        id='due' 
                        name='due' 
                        selected={ formValues.due }
                        onChange={ (event:any) => onDateChange(event, 'due') } 
                        dateFormat='Pp'
                        showTimeSelect
                        locale='es'
                        timeCaption='Hora'
                        className="block w-full mb-2 p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light text-slate-500"
                    />
                    
                    <label htmlFor='title'className='ml-1 text-sm text-slate-700'>Título</label>
                    <input id='title' name='title' type="text" onChange={ onInputChange } value={ formValues.title } className={ `block w-full mb-2 p-3 border ds rounded-md placeholder:font-sans placeholder:font-light`}/>
                    
                    <label htmlFor='description' className='ml-1 text-sm text-slate-700'>Descripción</label>
                    <input id='description' name='description' type="text" onChange={ onInputChange } value={ formValues.description } className={ `block w-full mb-2 p-6 border rounded-md placeholder:font-sans placeholder:font-light`}/>
                    
                    <button type="submit" className="bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer uppercase border border-slate-300 font-bold w-1/3 p-3 text-slate-500 rounded-lg">
                        <span> Guardar</span>
                    </button>
                </form>
                <div className="mt-5 border-b border-b-gray-300"></div>
            </div>
        </div>
    )
}

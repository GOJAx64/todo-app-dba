import { useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';

import { useForm } from '../hooks';
import { HeaderHomework } from "./";

registerLocale('es', es) 

const initialForm = {
    due: undefined,
    title: '',
    description: '',
    favorite: false,
    id: undefined,
}

export const FormHomeworks = ({ homeworks, setHomeworks, homework, setHomework }:any ) => {
    
    const {setFormValues, formValues, onSubmit, onInputChange, onDateChange }:any = useForm(initialForm, setHomeworks, homeworks);

    useEffect(() => {
      if( Object.keys(homework).length > 0 ) {
        setFormValues({
            due: homework.due,
            title: homework.title,
            description: homework.description,
            favorite: homework.favorite,
            id: homework.id,
        })
      } else {
        setFormValues(initialForm);
      }
    }, [homework])
    

    return (
        <div className='w-1/2 h-screen bg-slate-200'>
            <div className="p-7 ">
                {
                   (Object.keys(homework).length > 0 ? <HeaderHomework homework={ homework }/> : <h2 className="text-4xl font-bold mb-9">Agregar Nueva Tarea</h2>)
                }
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
                        required
                        className="block w-full mb-2 p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light text-slate-500"
                    />
                    
                    <label htmlFor='title'className='ml-1 text-sm text-slate-700'>Título</label>
                    <input id='title' required name='title' type="text" onChange={ onInputChange } value={ formValues.title } className={ `block w-full mb-2 p-3 border ds rounded-md placeholder:font-sans placeholder:font-light`}/>
                    
                    <label htmlFor='description' className='ml-1 text-sm text-slate-700'>Descripción</label>
                    <input id='description' required name='description' type="text" onChange={ onInputChange } value={ formValues.description } className={ `block w-full mb-2 p-6 border rounded-md placeholder:font-sans placeholder:font-light`}/>
                    
                    <button type="submit" className="bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer uppercase border border-slate-300 font-bold w-1/3 p-3 text-slate-500 rounded-lg">
                        <span> Guardar</span>
                    </button>
                </form>
                <div className="mt-5 border-b border-b-gray-300"></div>
            </div>
        </div>
    )
}

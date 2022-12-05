import { useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';

import { useForm } from '../hooks';
import { HeaderHomework } from "./";
import axiosClient from "../config/axiosClient";

registerLocale('es', es) 

const initialForm = {
    dueDate: undefined,
    title: '',
    description: '',
    favorite: false,
    id: undefined,
}

export const FormHomeworks = ({ homeworks, setHomeworks, homework, setHomework }:any ) => {
    
    const {setFormValues, formValues, onInputChange, onDateChange }:any = useForm(initialForm, setHomeworks, homeworks);

    useEffect(() => {
      if( Object.keys(homework).length > 0 ) {
        setFormValues({
            dueDate: new Date(),//homework.dueDate,
            title: homework.title,
            description: homework.description,
            favorite: homework.favorite,
            id: homework.id,
        })
      } else {
        setFormValues(initialForm);
      }
    }, [homework])

    const createId = () => {
        const random = Math.random().toString(36).substr(2);
        const date = Date.now().toString(36);
        return random + date;
    };
    
    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if( formValues.id ) { //edit
            const updatedItems = homeworks.map( ( itemState:any ) => itemState.id === formValues.id ? formValues : itemState )
            setHomeworks(updatedItems);
        } 
        else { //add
            formValues.id = createId();
            setHomeworks([...homeworks, formValues]);

            try {
                const token = localStorage.getItem('token');
                if(!token) return;
    
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                };

                const { data } = await axiosClient.post('/homeworks', formValues, config);
                console.log(data);
                setFormValues( initialForm );
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className='w-1/2 h-screen bg-slate-200'>
            <div className="p-7 ">
                {
                   (Object.keys(homework).length > 0 ? <HeaderHomework homework={ homework }/> : <h2 className="text-4xl font-bold mb-9">Agregar Nueva Tarea</h2>)
                }
                <div className="mb-5 border-b border-b-gray-300"></div>
                <form onSubmit={ handleSubmit } className='border border-slate-300 bg-slate-100 p-3 rounded-md'>
                    <label htmlFor='dueDate'className='ml-1 text-sm text-slate-700'>Fecha de vencimiento</label>
                    <DatePicker 
                        id='dueDate' 
                        name='dueDate' 
                        selected={ formValues.dueDate }
                        onChange={ (event:any) => onDateChange(event, 'dueDate') } 
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

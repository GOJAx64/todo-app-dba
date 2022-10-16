import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
    const [formValues, setFormValues] = useState( initialForm );
    const [formSubmitted, setFormSubmitted] = useState(false);

    const onInputChange = ({ target }:any) => { //Don't do this
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onSubmit = ( event:React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        setFormSubmitted(true);
        console.log({formValues});
        //TODO: proceso de registro de form
        onResetForm();
    }

    const onResetForm = () => {
        setFormSubmitted(false);
        setFormValues( initialForm );
    }

    const onDateChange = ( event:any, changing:string ) => {
        setFormValues({
            ...formValues,
            [changing]: event
        })
    }

    return {
        ...formValues,
        formValues,
        formSubmitted,
        onInputChange,
        onSubmit,
        onResetForm,
        onDateChange,
    }
}


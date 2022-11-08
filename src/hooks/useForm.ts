import { useState } from 'react';

export const useForm = ( initialForm = {}, setHomeworks:any, homeworks:any ) => {
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
        setHomeworks([...homeworks, formValues])
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
        setFormValues,
    }
}


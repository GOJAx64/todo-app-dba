import { useState } from 'react';

export const useForm = ( initialForm = {}, setItems:any, items:any ) => {
    const [formValues, setFormValues] = useState( initialForm );

    const createId = () => {
        const random = Math.random().toString(36).substr(2);
        const date = Date.now().toString(36);
        return random + date;
    };

    const onInputChange = ({ target }:any) => { //Don't do this
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onSubmit = ( event:React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        
        if( formValues.id ) { //edit
            const updatedItems = items.map( ( itemState:any ) => itemState.id === formValues.id ? formValues : itemState )
            setItems(updatedItems);
        } 
        else { //add
            formValues.id = createId();
            setItems([...items, formValues]);
            setFormValues( initialForm );
        }
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
        onInputChange,
        onSubmit,
        onDateChange,
        setFormValues,
    }
}


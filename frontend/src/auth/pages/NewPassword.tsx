import { useState } from "react";
import axios from 'axios';
import { Alert } from "../../components"

export const NewPassword = () => {
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({});

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if([password].includes('')) {
            setAlert({
                msg: 'Ingresa tu nueva contraseña',
                error: true
            })
            return
        }

        if(password.length < 6 ) {
            setAlert({
                msg: 'La contraseña debe tener mínimo 6 carácteres',
                error: true
            })
            return
        }
        
        setAlert({});
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/`,
                                                { password });
            setAlert({
                msg: data.msg,
                error: false           
            });
            setPassword('');
        } catch (error:any) {
            setAlert({
                msg: error.response.data.msg,
                error: true           
            });
        }
    };

    const { msg }:any = alert; 
    return (
        <>
            { msg && <Alert alert={ alert }/>}
        
            <div className="flex items-center justify-center min-h-screen bg-slate-300">
                {/* Card Container */}
                <div className=" flex flex-col m-6 space-y-10 bg-slate-200 shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
                    
                    <form className="p-6 md:px-8 md:py-8" onSubmit={ handleSubmit }>      
                        <h2 className="mb-5 text-4xl font-bold text-center">Nueva contraseña</h2>
                        <p className="max-w-sm mb-4 font-sans font-light text-center text-gray-600">
                            Llena el campo de tu contraseña
                        </p>
                        <hr className='pt-2 border-slate-400'/>
                        
                        <label htmlFor='password' className='text-gray-600'>Contraseña</label>
                        <input 
                            type="password"
                            id='password'
                            className="block w-full mb-2 py-4 px-3 border bg-slate-100 border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" 
                            placeholder="Ingresa tu nueva contraseña"
                            value={ password }
                            onChange={ e => setPassword(e.target.value) }
                        />
                        <div className="flex flex-col items-center justify-center mt-6 space-y-6 md:flex-row md:space-y-0">
                            <button type="submit" className="w-full md:w-auto flex justify-center items-center px-8 py-3 space-x-0 font-sans font-bold text-white rounded-md bg-blue-700 shadow-blue-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                                <span>Continuar</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-7" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <line x1="13" y1="18" x2="19" y2="12" />
                                    <line x1="13" y1="6" x2="19" y2="12" />
                                </svg>
                            </button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </>
  )
}

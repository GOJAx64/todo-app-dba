import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import { Alert } from "../../components";

export const Confirm = () => {
  const params = useParams();
  const { token }  = params;
  const [alert, setAlert] = useState({});
  const [confirmedAccount, setConfirmedAccount] = useState(false);

  useEffect(() => {
    const confirmAccount = async() => {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/api/auth/confirm/${token}`;
        const { data } = await axios(url);
        
        setAlert({
          msg: data.msg,
          error: false
        })
        setConfirmedAccount(true);

      } catch (error:any) {
        setAlert({
          msg: error.response.data.msg,
          error: true
        })
      }
    }
    confirmAccount();
  }, [])
  
  const { msg }:any = alert;
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-slate-300">
          <div className=" flex flex-col m-6 space-y-10 bg-slate-200 shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
              
            <div className="p-6 md:px-8 md:py-8">      
              <h2 className="mb-5 text-4xl font-bold text-center">Se ha confirmado tu cuenta</h2>
              <p className="max-w-sm mb-4 font-sans font-light text-center text-gray-600">
                  Ahora puedes iniciar sesión y comenzar a trabajar!
              </p>
              <hr className='pt-2 border-slate-400'/>
              <div>
                { msg && <Alert alert={ alert }/>}
              </div>
              <div>
                {
                  confirmedAccount && 
                  ( 
                    <div className="flex flex-col items-center justify-center mt-6 mb-4 space-y-6 md:flex-row md:space-y-0">
                        <NavLink to='/auth/login' className="w-full md:w-auto flex justify-center items-center px-8 py-3 space-x-0 font-sans font-bold text-white rounded-md bg-blue-700 shadow-blue-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                            <span>Iniciar Sesión</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <line x1="13" y1="18" x2="19" y2="12" />
                                <line x1="13" y1="6" x2="19" y2="12" />
                            </svg>
                        </NavLink>
                    </div>
                  )
                }
              </div>
            </div>
            
          </div>
      </div>
    </>
  )
}

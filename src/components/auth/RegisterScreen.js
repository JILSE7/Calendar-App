import { TextField } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        
    <div className="container login-container">
        <div className="contenedor">
            <div className="login-form-1">
                <h3>Registro</h3>
               <div className="contenedor-imagen">
               <img src="https://img.icons8.com/nolan/452/calendar-app.png" alt="calendar-imagen" className="imagen"/>
               </div>
                <form>
                    <div className="formgroup">
                    <TextField id="standard-basic" label="Nombre" className="_login-textfield"/>
                    </div>
                    <div className="formgroup">
                    <TextField id="standard-basic" label="correo" className="mt-2 mb-2 _login-textfield"/>
                    </div>
                    <div className="formgroup">
                        <TextField
                            type="password"
                            label="Repita la contraseña"
                            className="mt-2 mb-2 _login-textfield"
                        />
                    </div>
                    <div className="formgroup">
                        <TextField
                            type="password"
                            label="Contraseña"
                            className="mt-2 mb-2 _login-textfield"
                        />
                    </div>
                    <div className="formgroup">
                        <input 
                            type="submit"
                            className="btnSubmit"
                            value="Registrate" 
                        />
                      
                    </div>
                    <Link to="/login"/><button>Ya tienes cuenta</button><Link/>
                </form>
            </div>
        </div>
    </div>

    
    )
}

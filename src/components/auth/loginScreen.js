import { TextField } from '@material-ui/core'
import React from 'react'

export const loginScreen = () => {
    return (
        <div className="container login-container">
        <div className="contenedor">
            <div className="login-form-1">
                <h3>Iniciar Sesion</h3>
               <div className="contenedor-imagen">
               <img src="https://img.icons8.com/nolan/452/calendar-app.png" alt="calendar-imagen" className="imagen"/>
               </div>
                <form>
                    <div className="formgroup">
                    <TextField id="standard-basic" label="Usuario" className="_login-textfield"/>
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
                            value="Login" 
                        />
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

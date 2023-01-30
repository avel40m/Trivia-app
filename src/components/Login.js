import React, { useContext } from 'react'
import{ useForm } from 'react-hook-form';
import { UserContext } from '../context/UserContext';

const Login = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const { setCurrentUser } = useContext(UserContext);
    
    const onSubmit = (data) => {
        localStorage.setItem('usuario', JSON.stringify(data));
        setCurrentUser(data);
    }

  return (
    <div className='container'>
      <div className="text-center mt10">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
            <label htmlFor="usuario" className='form-label mt10 mb10'>Usuario</label>
            <input type="text" className='form-input' placeholder='Ingresar tu usuario' id='usuario'
            {
                ...register('username',{
                    required:'El campo es requerido'
                })
            } />
            <p className='input-error'>{errors.username?.message}</p>
        </div>
        <div className="form-group">
            <label htmlFor="password" className='form-label mt10 mb10'>Contraseña</label>
            <input type="password" className='form-input' placeholder='Ingresar tu contraseña' id='password'
             {
                ...register('password',{
                    required:'El campo es requerido'
                })
            } />
            <p className='input-error'>{errors.password?.message}</p>
        </div>
        <div className="form-group mt10">
            <button className='button-primary'>Ingresar</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login

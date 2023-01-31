import React from 'react'
import { useForm } from 'react-hook-form';
import { dificultad } from '../array/dificultad';
import { categoria } from '../array/categoria';
import { numero } from '../array/numero';
import { useNavigate } from 'react-router-dom';

const Jugar = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const navigate = useNavigate();

    const onSubmit = async data => {
         localStorage.setItem('question', JSON.stringify(data));       
         navigate('/question')
    }
  return (
    <div className='container mt10'>
      <h1 className='text-center'>Iniciar Juego</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
            <label htmlFor="dificultad" className='form-label mt10 mb10'>Seleccionar dificultad</label>
            <select name="dificultad" id="dificultad" className='form-input'
            { ...register('dificultad') } >
            {
                dificultad.map((d,index) => (
                    <option key={index} value={d}>{d}</option>
                ))
            }
            </select>
            <p>{errors.dificultad?.message}</p>
        </div>
        <div className="form-group">
            <label htmlFor="categoria" className='form-label mt10 mb10'>Seleccionar categoria</label>
            <select name="categoria" id="categoria" className='form-input'
            { ...register('categoria') } >
            {
                categoria.map((c,index) => (
                    <option key={index} value={c}>{c}</option>
                ))
            }
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="numero" className='form-label mt10 mb10'>Seleccionar número</label>
            <select name="numero" id="numero" className='form-input'
            { ...register('numero') } >
            {
                numero.map((n,index) => (
                    <option key={index} value={n}>{n}</option>
                ))
            }
            </select>
        </div>
        <div className="form-group mt10">
            <button className='button-primary'>Iniciar juego</button>
        </div>
      </form>
    </div>
  )
}

export default Jugar

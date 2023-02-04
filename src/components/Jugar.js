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
    <div className='container mx-auto mt-5'>
      <h1 className='text-3xl font-bold text-center underline'>Iniciar Juego</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-rows-3 grid-flow-col w-72 m-auto mt-5">
      <label htmlFor="dificultad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seleccionar dificultad</label>
        <select id="dificultad" name='dificultad' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            { ...register('dificultad',{
                required: 'Seleccionar una opcion'
            }) } >
            {
                dificultad.map((d,index) => (
                    <option key={index} value={d}>{d}</option>
                ))
            }
        </select>
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.dificultad?.message}</p>
      </div>
      <div className="grid grid-rows-3 grid-flow-col w-72 m-auto mt-5">
      <label htmlFor="categoria" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seleccionar categoria</label>
        <select id="categoria" name='categoria' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            { ...register('categoria',{
                required:'Seleccionar una opcion'
            }) } >
            {
                categoria.map((c,index) => (
                    <option key={index} value={c}>{c}</option>
                ))
            }
        </select>
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.categoria?.message}</p>
      </div>
      <div className="grid grid-rows-3 grid-flow-col w-72 m-auto mt-5">
      <label htmlFor="numero" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seleccionar número</label>
        <select id="numero" name='numero' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            { ...register('numero',{
                required: 'Seleccion opcion'
            }) } >
            {
                numero.map((n,index) => (
                    <option key={index} value={n}>{n}</option>
                ))
            }
        </select>
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.numero?.message}</p>
      </div>
      <div className="container m-auto text-center">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Ingresar
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Jugar

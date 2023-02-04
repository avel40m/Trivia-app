import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../style/loader.css";

const ResultsFinal = () => {
  const [userName,setUserName] = useState([]);
  useEffect(()=>{
    setUserName(JSON.parse(localStorage.getItem("jugadores")));
  },[])
  
  console.log(userName);

  if (userName === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto text-center">
      <h1 className='text-3xl underline my-5'>Results Finals</h1>
      <p className='text-gray-600 mt-5 mb-5'>Nombre del jugador: {userName.nombre}</p>
      <p className='text-gray-600 mt-5 mb-5'>Dificultad: {userName.dificultad}</p>
      <p className='text-gray-600 mt-5 mb-5'>Categoria: {userName.categoria}</p>
      <p className='text-gray-600 mt-5 mb-5'>Respuesta correctas: {userName.correctas}</p>
      <p className='text-gray-600 mt-5 mb-5'>Respuesta incorrectas: {userName.incorrectas}</p>
      <div className='flex justify-center mx-auto mt-5 mb-5'>
        <Link to='/jugar' className='text-white bg-green-600 font-bold p-2 rounded-md'>Volver a jugar</Link>
      </div>
    </div>
  )
}

export default ResultsFinal

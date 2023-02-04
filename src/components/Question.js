import React, {  useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { gameLink } from "../function/gameLink";
import { useNavigate } from "react-router-dom";
import "../style/loader.css";

const Question = () => {
  const [array, setArray] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const [question, setQuestion] = useState([]);
  const [contador, setContador] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [cantidadPregunta, setCantidadPregunta] = useState(0);
  const {register,handleSubmit,reset,formState:{errors}} = useForm();

  const navigation = useNavigate();

  useEffect(() => {
    let ques = JSON.parse(localStorage.getItem("question"));
    setUsuario(JSON.parse(localStorage.getItem("usuario")));
    async function fetchData() {
      const res = await gameLink(ques);
      setArray(res[0]);
      setQuestion(res[0].incorrectAnswers.concat(res[0].correctAnswer));
      setCantidadPregunta(ques.numero);
    }
    fetchData();
  }, []);
  if (array.length === 0) {
    return <div className="lds-dual-ring margin-loader"></div>;
  }

  const onSubmit = async data => {
      await quizz(data.response);
      let ques = JSON.parse(localStorage.getItem("question"));
      const res = await gameLink(ques);

      setContador(contador + 1);
      setArray(res[contador])
      setQuestion(res[contador].incorrectAnswers.concat(res[contador].correctAnswer));
      
     reset(data);
  }

  const quizz = (data) => {
    if (data === array.correctAnswer) {
      setIncorrect( incorrect + 1);
    }
    if (cantidadPregunta > (contador + 1)){
      console.log("Siguiente");
    } else {
     finishGame();
    }
  }

  const finishGame =  () => {
    const gaming = {
      nombre: usuario.username,
      dificultad: array.difficulty,
      categoria: array.category,
      correctas: cantidadPregunta - incorrect,
      incorrectas: incorrect
    }
    localStorage.setItem('jugadores',JSON.stringify(gaming));
    navigation('/results-final')
  }

  return (
     <div className="container grid grid-cols-2">
        <div className="grid grid-cols-1 mt-5 text-center">
          <h1 className="text-3xl font-bold underline mb-5">Question: {contador + 1}</h1>
            <p className="underline text-2xl mb-5">Jugador: {usuario.username}</p>
            <p className="underline text-2xl mb-5">
              Categoria: {array.category}
            </p>
            <p className="underline text-2xl mb-5">
              Dificultad: {array.difficulty}
            </p>
          </div>
          <div className="grid grid-cols-1 mt-5 text-center">
            <p className="text-2xl lg:text-4xl md:text-3xl mt-5">{array.question}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-rows-3 grid-flow-col w-72 m-auto mt-5">
                <select name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {
                  ...register('response',{
                    required:'Seleccionar opción'
                  })
                }>
                  {
                    question.map((q,i) => (

                      <option key={i} value={q}>{q}</option>
                    ))
                  }
                </select>
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.response?.message}</p>
              </div>
              <div className="container m-auto text-center">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Continuar
            </span>
          </button>
        </div>
            </form>
          </div>
        </div>
  );
};

export default Question;

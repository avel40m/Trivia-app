import React, { useContext, useEffect, useState } from "react";
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
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1>Question: {contador + 1}</h1>
        </div>
        <div className="card-container">
          <div className="card-col">
            <h1 className="title">{usuario.username}</h1>
            <p className="card-button m20 bc-orange">
              Categoria: {array.category}
            </p>
            <p className="card-button m20 bc-orange">
              Dificultad: {array.difficulty}
            </p>
            <p className="card-button m20 bc-orange">Tiempo: 10:02:17</p>
          </div>
          <div className="card-col p-question">
            <p className="title-question">{array.question}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group pt10">
                <select name="" id="" className="form-input"
                {
                  ...register('response',{
                    required:'El campo es requerido'
                  })
                }>
                  {
                    question.map((q,i) => (

                      <option key={i} value={q}>{q}</option>
                    ))
                  }
                </select>
                <p className="input-error">{errors.response?.message}</p>
              </div>
              <div className="form-group pt10">
                <button className="button-question">Continuar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;

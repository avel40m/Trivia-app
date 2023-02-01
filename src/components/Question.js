import React, { useEffect, useState } from "react";
import { gameLink } from "../function/gameLink";
import '../style/loader.css';

const Question = () => {
    const [array, setArray] = useState([]);
    const [usuario,setUsuario] = useState([]);

        useEffect(() => {
          let ques = JSON.parse(localStorage.getItem('question'));
          setUsuario(JSON.parse(localStorage.getItem('usuario')));

            async function fetchData(){
              const res = await gameLink(ques);
              setArray(res);
            }
            fetchData();
        }, []);
// console.log(array);
     if (array.length === 0) {
      return <div className="lds-dual-ring margin-loader"></div>
     }

    return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1>Question: {array.length}</h1>
        </div>
        <div className="card-container">
          <div className="card-col">
            <h1 className="title">{usuario.username}</h1>
            <p className="card-button m20 bc-orange">Categoria: {array[0].category}</p>
            <p className="card-button m20 bc-orange">Dificultad: {array[0].difficulty}</p>
            <p className="card-button m20 bc-orange">Tiempo: 10:02:17</p>
          </div>
          <div className="card-col p-question">
            <p className="title-question">{array[0].question}</p>
            <form>
                <div className="form-group pt10" >
                    <select name="" id="" className="form-input">
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                    </select>
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

import React, { useEffect, useState } from "react";
import { gameLink } from "../function/gameLink";

const Question = () => {
    const [array, setArray] = useState([]);

    const getData = async () => {
        let ques = [];
        ques = await await JSON.parse(localStorage.getItem('question'));
        console.log(ques);
        const res = await gameLink(ques);
        console.log(res[0].category);
        setArray(res);
    }
    
    useEffect( () => {
        getData(); 
    },[])



    return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1>Question: 1</h1>
        </div>
        <div className="card-container">
          <div className="card-col">
            <h1 className="title">Avelino Hector Mendez</h1>
            <p className="card-button m20 bc-orange">Categoria: history</p>
            <p className="card-button m20 bc-orange">Dificultad: Easy</p>
            <p className="card-button m20 bc-orange">Tiempo: 10:02:17</p>
          </div>
          <div className="card-col p-question">
            <p className="title-question">Which film won the Academy Award for Best Picture in 1962?"</p>
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

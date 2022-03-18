import React from "react";
import ContainerFlashs from "./ContainerFlashs";
//import AnsweringFlashCards from "./AnsweringFlashCards";

export default function QuestionPage() {
    //const questions = [{ p: "Pergunta 1" }, { p: "Pergunta 2" }, { p: "Pergunta 3" }, { p: "Pergunta 4" }, { p: "Pergunta 5" },
    //{ p: "Pergunta 6" }, { p: "Pergunta 7" }, { p: "Pergunta 8" }];

    const questions = [{ p: "Pergunta 1", Q: "O que é JSX?", R: "Uma extensão de linguagem do JavaScript" },
    { p: "Pergunta 2", Q: "O React é __", R: "uma biblioteca JavaScript para construção de interfaces" },
    { p: "Pergunta 3", Q: "Componentes devem iniciar com __ ", R: "letra maiúscula" },
    { p: "Pergunta 4", Q: "Podemos colocar __ dentro do JSX", R: "expressões" },
    { p: "Pergunta 5", Q: "O ReactDOM nos ajuda __", R: "interagindo com a DOM para colocar componentes React na mesma" },
    { p: "Pergunta 6", Q: "Usamos o npm para __", R: "gerenciar os pacotes necessários e suas dependências" },
    { p: "Pergunta 7", Q: "Usamos props para __", R: "passar diferentes informações para componentes" },
    { p: "Pergunta 8", Q: "Usamos estado (state) para __", R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }];



        return (
            <div className={`secondPage`}>
                <div className="subsecondPage">
                    <img src="assets/img/logo-pequeno.png" alt="" />
                    <p>ZapRecall</p>
                </div>
                {
                    questions.map(question => <ContainerFlashs  key={question.p} query={question.p} quest={question.Q} answer={question.R} />)
                }
            </div>
        )
} 


/* function QuestionContainer(props) {
    return (
        <ul className="questionsPageTwo">
            <button>
                <li key={props.query}>{props.query} <ion-icon name="play-outline"></ion-icon></li>
            </button>
        </ul>
    ) 
} */


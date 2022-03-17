import React from "react";

export default function QuestionPage() {
    const questions = [{ p: "Pergunta 1" }, { p: "Pergunta 2" }, { p: "Pergunta 3" }, { p: "Pergunta 4" }, { p: "Pergunta 5" },
    { p: "Pergunta 6" }, { p: "Pergunta 7" }, { p: "Pergunta 8" }];

    return (
        <div className={`secondPage`}>
            <div className="subsecondPage">
                <img src="assets/img/logo-pequeno.png" alt="" />
                <p>ZapRecall</p>
            </div>
            {
                questions.map(question => <QuestionContainer query={question.p} />)
            }
        </div>
    )
}

function QuestionContainer(props) {
    return (
        <ul className="questionsPageTwo">
            <button >
                <li key={props.query}>{props.query} <ion-icon name="play-outline"></ion-icon></li>
            </button>
        </ul>
    )
}
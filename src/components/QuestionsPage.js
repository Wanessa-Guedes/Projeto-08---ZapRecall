// Função da tela das questões -- renderiza as questões aleatoriamente na tela e chama o footer da tela
// O array de objeto das questões e a função que insere a aleatoriedade está depois de QuestionPage

import React from "react";
import ContainerFlashs from "./ContainerFlashs";
import Footer from "./Footer";
import LogoPequeno from "../assets/img/logopequeno.png";

export default function QuestionPage() {

    let [cardsAnswer, setCardsAnswer] = React.useState(0);
    const [answersIcons, setStatusFooter] = React.useState([]);
    const [statusAnswers, setStatusAnswers] = React.useState(false);
    const [answerIconsStatus, setanswerIconsStatus] = React.useState(false);

    return (
        <>
            <div className={`secondPage`}>
                <div className="subsecondPage">
                    <img src={LogoPequeno} alt="Logo-Tela-FlashCard" />
                    <p>ZapRecall</p>
                </div>
                <div className="questionsSecondPage">
                    {
                        questions.map((question, index) => <ContainerFlashs key={index} quest={question.Q} answer={question.R} len={questions.length}
                            index={index} cardsAnswer={cardsAnswer}
                            updateAnswerCont={updateAnswerCont => {
                                setCardsAnswer(updateAnswerCont + cardsAnswer)
                            }}
                            updateIconsFooter={updateIconsFooter => setStatusFooter([...answersIcons, updateIconsFooter])}
                            updateFinishAnswer={statusAnswers => setStatusAnswers(statusAnswers)}
                            updateanswerIconsStatus={answerIconsStatus => setanswerIconsStatus(answerIconsStatus)} />)
                    }
                </div>
            </div>
            <Footer cardsAnswer={cardsAnswer} len={questions.length} answersIcons={answersIcons} statusAnswers={statusAnswers} answerIconsStatus={answerIconsStatus} />
        </>
    )
}

let questions = [{ Q: "O que é JSX?", R: "Uma extensão de linguagem do JavaScript" },
{ Q: "O React é __", R: "uma biblioteca JavaScript para construção de interfaces" },
{ Q: "Componentes devem iniciar com __ ", R: "letra maiúscula" },
{ Q: "Podemos colocar __ dentro do JSX", R: "expressões" },
{ Q: "O ReactDOM nos ajuda __", R: "interagindo com a DOM para colocar componentes React na mesma" },
{ Q: "Usamos o npm para __", R: "gerenciar os pacotes necessários e suas dependências" },
{ Q: "Usamos props para __", R: "passar diferentes informações para componentes" },
{ Q: "Usamos estado (state) para __", R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }];

questions.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

function comparador() {
    return Math.random() - 0.5;
}




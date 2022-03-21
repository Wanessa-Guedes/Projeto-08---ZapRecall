// Função que renderiza o footer

import Sad from "../assets/img/sad.png";
import Party from "../assets/img/party.png";
import AnswersIcons from "./AnswersIcons"

export default function Footer(props) {

    // recarregar a página - botão Reiniciar Recall
    function reloadPage(){
        window.location.reload()
    }

    // Footer sem finalizar os flashcards
    if (props.statusAnswers === false) {
        return (
            <>
                {
                    < footer className="footerStyle"> {props.cardsAnswer} / {props.len} CONCLUÍDOS
                        <div>
                            {
                                props.answersIcons.map((answerIcon, index) => <AnswersIcons key={index} answerIcon={answerIcon} />)
                            }
                        </div>
                    </footer >

                }
            </>
        )
    } else {
            // Opções de Footer depois de finalizar os flashcards
        if (props.answerIconsStatus === false) {
            return (


                <div className="footerCSS">
                    <footer> 
                        <div> <img src={Party} alt="" /> <span>PARABÉNS!</span></div>
                        <div>Você não esqueceu de nenhum flashcard!</div>
                        <div>
                            {
                                props.answersIcons.map((answerIcon, index) => <AnswersIcons key={index} answerIcon={answerIcon} />)
                            }
                        </div>
                        <button onClick={() => reloadPage()}>REINICIAR RECALL</button>
                    </footer >
                </div>


            )
        } else {
            return (
                <div className="footerCSS">
                    <footer> 
                        <div> <img src={Sad} alt="" /> <span>PUTZ!</span></div>
                        <div>Ainda faltaram alguns...Mas não desanime!</div>
                        <div>
                            {
                                props.answersIcons.map((answerIcon, index) => <AnswersIcons key={index} answerIcon={answerIcon} />)
                            }
                        </div>
                        <button onClick={() => reloadPage()}>REINICIAR RECALL</button>
                    </footer >
                </div>
            )
        }
    }

} 
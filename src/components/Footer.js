import QuestionPage from "./QuestionsPage"
import {AnswersIcons} from "./AnswersIcons"

export default function Footer(props) {

    function reloadPage(){
        window.location.reload()
    }

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

        if (props.answerIconsStatus === false && props.screen === true) {
            return (


                <div className="footerCSS">
                    <footer> 
                        <div> <img src="assets/img/party.png" alt="" /> <span>PARABÉNS!</span></div>
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
        } else if (props.answerIconsStatus === true && props.screen === true){
            return (
                <div className="footerCSS">
                    <footer> 
                        <div> <img src="assets/img/sad.png" alt="" /> <span>PUTZ!</span></div>
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
import QuestionPage from "./QuestionsPage"
import { AnswersIcons } from "./AnswersIcons"

export default function Footer(props) {

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

        if (props.answerIconsStatus === false) {
            return (


                <div className="footerCSS">
                    <footer> 
                        <div> <img src="assets/img/party.png" alt="" /> PARABÉNS!</div>
                        <div>Você não esqueceu de nenhum flashcard!</div>
                        <div>
                            {
                                props.answersIcons.map((answerIcon, index) => <AnswersIcons key={index} answerIcon={answerIcon} />)
                            }
                        </div>
                    </footer >
                </div>


            )
        } else {
            return (
                <div className="footerCSS">
                    <footer> 
                        <div> <img src="assets/img/sad.png" alt="" /> PUTZ!</div>
                        <div>Ainda faltaram alguns...Mas não desanime!</div>
                        <div>
                            {
                                props.answersIcons.map((answerIcon, index) => <AnswersIcons key={index} answerIcon={answerIcon} />)
                            }
                        </div>
                    </footer >
                </div>
            )
        }
    }
} 
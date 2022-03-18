import QuestionPage from "./QuestionsPage"
import { AnswersIcons } from "./AnswersIcons"

export default function Footer(props) {
    
    return (
        <>
            {
                < footer > {props.cardsAnswer} / {props.len} CONCLUÍDOS
                    {
                        props.answersIcons.map((answerIcon) => <AnswersIcons answersIcon={answerIcon}/>)
                    }
                </footer >

            }
        </>
    )
} 
import React from "react";
import NotRemember from "../assets/img/notremember.png";
import AlmostRemember from "../assets/img/almostremember.png";
import Zap from "../assets/img/zap.png";
import TurnAround from "../assets/img/back.png";

export default function ContainerFlashs(props) {

    const options = [{ op: "Não lembrei" }, { op: "Quase não lembrei" }, { op: "Zap!" }];

    const [collapsed, setCollapsed] = React.useState(true)
    const [answer, setAnswer] = React.useState(false)
    const [answerOptions, setAnswerOptions] = React.useState(false)
    let [indexOptions, setindexOptions] = React.useState(0)
    
    console.log(props.quest);
    
    function answersOptions(propsChoices,iconsFooter) {
        setAnswerOptions(true);
        setindexOptions(indexOptions = propsChoices);

        if(iconsFooter === "Não lembrei"){
            props.updateIconsFooter(NotRemember)
            props.updateanswerIconsStatus(true)
        } else if(iconsFooter === "Quase não lembrei"){
            props.updateIconsFooter(AlmostRemember)
        } else {
            props.updateIconsFooter(Zap)
        }
    }

    if(props.cardsAnswer === props.len){
        props.updateFinishAnswer(true);
    }

    if (collapsed === true) {
        return (
            <>
            <ul className="questionsPageTwo">
                <button onClick={() => setCollapsed(false)}>
                    <li key={props.query}> Pergunta {props.index+1} <ion-icon name="play-outline"></ion-icon></li>
                </button>
            </ul>
            </>
        )
    } else {

        if (answer === true && answerOptions === false) {
            return (
                <div className="questionBlock">
                    <ul className="questionsPageTwo">
                        <li key={props.answer}>{props.answer}</li>
                    </ul>
                    <div className="rememberOptions">
                        {options.map((option, index) => <button key={index} onClick={() => {answersOptions(index,option.op)
                                                                                            props.updateAnswerCont(1)}}>{option.op}</button>)}
                    </div>
                </div>
                
            )

        } else if (answer === true && answerOptions === true) {
            let classCss = `questionsPageTwo`;

            if (indexOptions === 0) {
                classCss = `questionsPageTwo red`;
                return (
                    <ul className={classCss}>
                        <button>
                            <li key={props.query}>Pergunta {props.index+1} <img src={NotRemember} alt="" /></li>
                        </button>
                    </ul>
                )
            } else if(indexOptions === 1){
                classCss = `questionsPageTwo yellow`;
                return (
                    <ul className={classCss}>
                        <button>
                            <li key={props.query}>Pergunta {props.index+1}<img src={AlmostRemember} alt="" /></li>
                        </button>
                    </ul>
                )
            } else {
                classCss = `questionsPageTwo green`;
                return (
                    <ul className={classCss}>
                        <button>
                            <li key={props.query}>Pergunta {props.index+1} <img src={Zap} alt="" /></li>
                        </button>
                    </ul>
                )
            }
            
        }
        return (
            <div className="questionBlock">
                <ul className="questionsPageTwo">
                    <li key={props.quest}>{props.quest}</li>
                </ul>
                <button onClick={() => setAnswer(true)}><img src={TurnAround} alt="" /></button>
            </div>
        )
    }
}

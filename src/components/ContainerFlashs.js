import React from "react";

export default function ContainerFlashs(props) {

    const options = [{ op: "Não lembrei" }, { op: "Quase não lembrei" }, { op: "Zap!" }];

    const [collapsed, setCollapsed] = React.useState(true)
    const [answer, setAnswer] = React.useState(false)
    const [answerOptions, setAnswerOptions] = React.useState(false)
    let [indexOptions, setindexOptions] = React.useState(0)

    function answersOptions(props) {
        setAnswerOptions(true);
        setindexOptions(indexOptions = props);
    }

    if (collapsed === true) {
        return (
            <ul className="questionsPageTwo">
                <button onClick={() => setCollapsed(false)}>
                    <li key={props.query}>{props.query} <ion-icon name="play-outline"></ion-icon></li>
                </button>
            </ul>
        )
    } else {

        if (answer === true && answerOptions === false) {
            return (
                <div className="questionBlock">
                    <ul className="questionsPageTwo">
                        <li key={props.answer}>{props.answer}</li>
                    </ul>
                    <div className="rememberOptions">
                        {options.map((option, index) => <button key={index} onClick={() => answersOptions(index)}>{option.op}</button>)}
                    </div>
                </div>
            )

        } else if (answer === true && answerOptions === true) {
            let classCss = `questionsPageTwo`;

            if (indexOptions === 0) {
                classCss = `questionsPageTwo red`;
                return (
                    <ul className={classCss}>
                        <button onClick={() => setCollapsed(false)}>
                            <li key={props.query}>{props.query} <img src="assets/img/notremember.png" alt="" /></li>
                        </button>
                    </ul>
                )
            } else if(indexOptions === 1){
                classCss = `questionsPageTwo yellow`;
                return (
                    <ul className={classCss}>
                        <button onClick={() => setCollapsed(false)}>
                            <li key={props.query}>{props.query} <img src="assets/img/almostremember.png" alt="" /></li>
                        </button>
                    </ul>
                )
            } else {
                classCss = `questionsPageTwo green`;
                return (
                    <ul className={classCss}>
                        <button onClick={() => setCollapsed(false)}>
                            <li key={props.query}>{props.query} <img src="assets/img/zap.png" alt="" /></li>
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
                <button onClick={() => setAnswer(true)}><img src="assets/img/back.png" alt="" /></button>
            </div>
        )
    }
}

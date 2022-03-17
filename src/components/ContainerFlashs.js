import React from "react";

export default function ContainerFlashs(props) {

    const options = [{ op: "Não lembrei" }, { op: "Quase não lembrei" }, { op: "Zap!" }];

    const [collapsed, setCollapsed] = React.useState(true)
    const [answer, setAnswer] = React.useState(false)

    if (collapsed === true) {
        return (
                <ul className="questionsPageTwo">
                    <button onClick={() => setCollapsed(false)}>
                        <li key={props.query}>{props.query} <ion-icon name="play-outline"></ion-icon></li>
                    </button>
                </ul>
        )
    } else {

        if (answer === true) {
            return (
                <div className="questionBlock">
                    <ul className="questionsPageTwo">
                        <li key={props.answer}>{props.answer}</li>
                    </ul>
                    <div className="rememberOptions">
                        {options.map(option => <button>{option.op}</button>)}
                    </div>
                </div>
            )

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

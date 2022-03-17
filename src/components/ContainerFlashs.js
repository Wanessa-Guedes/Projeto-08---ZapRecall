import React from "react";

export default function ContainerFlashs(props) {


    const [collapsed, setCollapsed] = React.useState(true)

    if (collapsed === true) {
        return (
            <ul className="questionsPageTwo">
                <button onClick={() => setCollapsed(false)}>
                    <li key={props.query}>{props.query} <ion-icon name="play-outline"></ion-icon></li>
                </button>
            </ul>
        )
    } 

    return (
        <div className="questionBlock">
            <ul className="questionsPageTwo">
                <li key={props.quest}>{props.quest}</li>
            </ul>
            <button onClick={() => setCollapsed(true)}><img src="assets/img/back.png" alt="" /></button>
        </div>
    )
}

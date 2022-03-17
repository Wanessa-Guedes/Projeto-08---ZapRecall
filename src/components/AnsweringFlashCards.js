import ContainerFlashs from "./ContainerFlashs";
import React from "react";


export default function AnsweringFlashCards(props){

    return (
        <ul className="questionsPageTwo">
            <button>
                <li key={props.query}>{props.query} <ion-icon name="play-outline"></ion-icon></li>
            </button>
        </ul>
)

}
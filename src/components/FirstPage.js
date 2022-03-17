import React from "react";

export default function FirstPage(props) {

    return (
        <div className={'firstPage'}>
            <div className="subFirstPage">
                <img src="assets/img/logo.png" alt="" />
                <p>ZapRecall</p>
            </div>
            <button onClick={()=>props.func()}>Iniciar Recall!</button>
        </div>
    )
}
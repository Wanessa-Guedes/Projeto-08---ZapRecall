// Função da tela de início -- botão muda o estado de screen no App para renderizar as questões

import React from "react";
import Logo from "../assets/img/logo.png";

export default function FirstPage(props) {

    return (
        <div className={'firstPage'}>
            <div className="subFirstPage">
                <img src={Logo} alt="" />
                <p>ZapRecall</p>
            </div>
            <button onClick={()=>props.func()}>Iniciar Recall!</button>
        </div>
    )
}
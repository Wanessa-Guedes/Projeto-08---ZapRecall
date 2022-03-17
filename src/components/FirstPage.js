import React from "react";

export default function FirstPage() {
    
    const [isHiddenPg1, setIshiddenPg1] = React.useState("");

    return (
        <div className={`firstPage ${isHiddenPg1}`}>
            <div className="subFirstPage">
                <img src="assets/img/logo.png" alt="" />
                <p>ZapRecall</p>
            </div>
            <button onClick={()=>setIshiddenPg1("hide")}>Iniciar Recall!</button>
        </div>
    )
}
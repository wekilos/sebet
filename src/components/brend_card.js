import React from "react";

import "./brend_card.css";
const BrendCard =(props)=>{
    return (
        <div className="brend_card" onClick={props.onclick}>
            <img alt="img" src={props.src} />
            <h3>{props.name}</h3>
        </div>
    );
};

export default BrendCard ;
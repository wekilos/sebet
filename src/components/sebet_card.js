import React, { useContext } from "react";

import {SebedimContext} from "../context/Sebedim";

import "antd/dist/antd.css";
import {MinusCircleOutlined} from '@ant-design/icons';
import "./sebet_card.css";
const SebetCard =(props)=>{
    const {Increment,Decrement,Remove} = useContext(SebedimContext);
    return (
        <div className="sebet_card" onClick={props.onclick}>
            <img alt="" src={props.src} />
            <div className="all">
                <div className="details">
                    <h3>{props.name}</h3>
                    <h2>{props.description}</h2>
                </div>
                <div className="buttons" id="buttons">
                        <div className="inc_dec_button">
                            <button onClick={props.sany>1 ? ()=>Decrement(props.id) :(null)}> - </button>
                            <h2>{props.sany}</h2>
                            <button onClick={()=>Increment(props.id)} > + </button>
                        </div>
                        <h1>{`${props.price*props.sany} manat`}</h1>
                        <button onClick={()=>Remove(props.id)}><MinusCircleOutlined /></button>
                </div>
            </div>



            <div className="mobile-all" id="mobile-all">
               <img alt="" src={props.src} />
               <div className="details">
                    <h3>{props.name}</h3>
                    <h2>{props.description}</h2>
                </div>
            </div>
            <div className="mobile-buttons" id="mobile-buttons">
                        <div className="inc_dec_button">
                            <button onClick={props.sany>1 ? ()=>Decrement(props.id) :(null)}> - </button>
                            <h2>{props.sany}</h2>
                            <button onClick={()=>Increment(props.id)} > + </button>
                        </div>
                        <h1>{`${props.price*props.sany} manat`}</h1>
                        <button onClick={()=>Remove(props.id)}><MinusCircleOutlined /></button>
                </div>
        </div>
    );
};

export default SebetCard ;
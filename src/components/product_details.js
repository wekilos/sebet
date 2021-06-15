import React, { useState, useContext } from "react";
import {SebedimContext} from "../context/Sebedim";
import "./product_details.css";
import sebet_icon from "../img/sebet_icon_white.svg";
const Details =(props)=>{
    const {AddToMany} = useContext(SebedimContext);

    const [num,setNum]=useState(0);
    const SebedeGosh= async()=>{
        AddToMany(props.id,props.name,props.description,props.new_price,num);
        console.log(num,"ine numm")
    }
    return (
        <div className="product">
            <img alt="" src={props.src} />
            <div className="details">
                {/* {props.skitga &&<div className="skitga">{ props.skitga+'%'}</div>} */}
                <h5>{props.name}</h5>
                <h3>{props.description}</h3>
                <h4>{props.new_price ? props.new_price+' manat' : props.old_price+' manat'} 
                    <span id="old-price" >
                        {props.new_price && (props.old_price+' manat')}
                    </span>
                </h4>
                <div className="buttons">
                    <div className="inc_dec_button">
                        <button onClick={num>0 ? ()=>setNum(num-1) :(null)}> - </button>
                        <h2>{num}</h2>
                        <button onClick={()=>setNum(num+1)} > + </button>
                    </div>
                    <button onClick={()=>SebedeGosh()} className="product-sebet-button"><img alt="" src={sebet_icon}/> Sebete goş</button>
                </div>
                
                
                
            </div>
            

        </div>
    );
};

export default Details;
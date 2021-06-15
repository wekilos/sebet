import React from "react";
import {Link} from "react-router-dom";


import "./hasabym.css";
import  Location from "../../components/location";
const Hasabym =(props)=>{
    return (
        <div className="login">
            <div className="location">
              <Location name="Hasabym"/>
            </div>
            
            <div className="form">
                <h1>Hasabym</h1>
                <h3 style={{fontSize:"18px",
                                textAlign:"left",
                                lineHeight:"22.05px",
                                color:"rgb(64, 55, 55)",
                                fontWeight:"450",
                                marginTop:"30px",
                                marginBottom:"-10px"}}
                                htmlFor="number">Doly Adyňyz</h3> <br/>

                <input name="hasabym" id="hasabym" />

                <h3 style={{fontSize:"18px",
                                textAlign:"left",
                                lineHeight:"22.05px",
                                color:"rgb(64, 55, 55)",
                                fontWeight:"450",
                                marginTop:"30px",
                                marginBottom:"-10px"}}
                        htmlFor="number">Telefon</h3> <br/>

                <input name="telefon" id="telofon" />

                <h3 style={{fontSize:"18px",
                                textAlign:"left",
                                lineHeight:"22.05px",
                                color:"rgb(64, 55, 55)",
                                fontWeight:"450",
                                marginTop:"30px",
                                marginBottom:"-10px"}}
                        htmlFor="number">Salgym</h3> <br/>

                <input name="salgym" id="salgym" />
                <Link to="/profile"><button>Içeri gir</button></Link>
                <h2><Link to="/hasabym">Açar sözini unutdym</Link></h2>
            </div>

        </div>
    );
};

export default Hasabym;
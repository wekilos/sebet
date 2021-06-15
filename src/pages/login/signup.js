import React from "react";
import {Link} from "react-router-dom";

import "./signup.css";
import  Location from "../../components/location";
const Signup =(props)=>{
    return (
        <div className="login">
            <div className="location">
              <Location name="Ýazylmak"/>
            </div>
            
            <div className="form">
                <h1>Agza bolmak</h1>
                <h3 style={{fontSize:"18px",
                                textAlign:"left",
                                lineHeight:"22.05px",
                                color:"rgb(64, 55, 55)",
                                fontWeight:"450",
                                marginTop:"30px",
                                marginBottom:"-10px"}}
                        >Doly adyňyz</h3> <br/>

                <input name="name" />

                <h3 style={{fontSize:"18px",
                                textAlign:"left",
                                lineHeight:"22.05px",
                                color:"rgb(64, 55, 55)",
                                fontWeight:"450",
                                marginTop:"30px",
                                marginBottom:"-10px"}}
                        >Telefon</h3> <br/>

                <input name="number"  />

                <h3 style={{fontSize:"18px",
                                textAlign:"left",
                                lineHeight:"22.05px",
                                color:"rgb(64, 55, 55)",
                                fontWeight:"450",
                                marginTop:"30px",
                                marginBottom:"-10px"}}
                                htmlFor="number">Açar söz</h3> <br/>

                <input name="password" id="password" />

                <h3 style={{fontSize:"18px",
                                textAlign:"left",
                                lineHeight:"22.05px",
                                color:"rgb(64, 55, 55)",
                                fontWeight:"450",
                                marginTop:"30px",
                                marginBottom:"-10px"}}
                                htmlFor="number">Açar söz tassykla</h3> <br/>

                <input name="password2" id="password2" />

                <input className="checkbox" id="checkbox" name="checkbox" type="checkbox"/>
                <label htmlFor="checkbox"
                    style={{fontSize:"16px",lineHeight:"19.6px",color:"rgba(55, 58, 64, 1)",margin:"-15px 0 0 5px"}}
                > Ulanyş Düzgünlerini we Gizlinlik Şertnamasyny okadym we kabul edýärin</label>

                <button>Içeri gir</button>
                <h2><Link to="/login">Içeri girmek</Link></h2>
            </div>

        </div>
    );
};

export default Signup;
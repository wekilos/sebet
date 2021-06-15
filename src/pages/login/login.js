import React from "react";
import {Link} from "react-router-dom";


import "./login.css";
import  Location from "../../components/location";
const Login =(props)=>{
    return (
        <div className="login">
            <div className="location">
              <Location name="Ýazylmak"/>
            </div>
            
            <div className="form">
                <h1>Içeri gir</h1>
                <h3 style={{fontSize:"18px",
                                textAlign:"left",
                                lineHeight:"22.05px",
                                color:"rgb(64, 55, 55)",
                                fontWeight:"450",
                                marginTop:"30px",
                                marginBottom:"-10px"}}
                                htmlFor="number">Telefon</h3> <br/>

                <input name="number" id="nuber" />

                <h3 style={{fontSize:"18px",
                                textAlign:"left",
                                lineHeight:"22.05px",
                                color:"rgb(64, 55, 55)",
                                fontWeight:"450",
                                marginTop:"30px",
                                marginBottom:"-10px"}}
                        htmlFor="number">Açar söz</h3> <br/>

                <input name="password" id="password" />
                <h2>Açar sözini unutdym</h2>
                <Link to="/hasabym"><button>Içeri gir</button></Link>
                <h2><Link to="/signup">Agza bolmak</Link></h2>
            </div>

        </div>
    );
};

export default Login;
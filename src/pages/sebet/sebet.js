import React, { useContext } from "react";
import {Link} from "react-router-dom";

import {SebedimContext} from "../../context/Sebedim";

import "./sebet.css";
import Location from "../../components/location";
import SebetCard from '../../components/sebet_card';

import img from "../../img/1.png";

const Sebet =(props)=>{
    let hasap=0;
    const {sebedim} = useContext(SebedimContext);
    sebedim.map((haryt)=>{
        hasap = hasap+(haryt.baha*haryt.sany);
        
        return null;
    })
    return(
        <React.Fragment>
            <div className="sebet_location">
                <Location name="Sebedim" />
            </div>
        <div className="sebet_page">
            
            <div className="sebet_cards">
                {
                    sebedim.map((haryt)=>{
                        return(
                            <SebetCard id={haryt.id} sany={haryt.sany}  src={img} name={haryt.name} description={haryt.description} price={haryt.baha} />
               
                        )
                    })
                }
            </div>
            <div className="sebet_hasap">
                    <h2>Sebedim</h2>
                    <h5>Jemi</h5>
                    <h3>{`${hasap} manat`}</h3>
                    <Link to="/sargyt">
                    <button > Sargyt et</button>
                    </Link>
                    {/* onClick={()=>window.location.assign("/sargyt")} */}
            </div>
        </div>
        </React.Fragment>
    );
};

export default Sebet;
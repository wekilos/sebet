import React, { useState,useContext } from "react";
import {SebedimContext} from "../../context/Sebedim";
 
import "./sargyt.css";
import Location from "../../components/location";
// import SebetCard from '../../components/sebet_card';

// import img from "../../img/1.png";

const Sargyt =(props)=>{let hasap=0;
    const {sebedim} = useContext(SebedimContext);
    sebedim.map((haryt)=>{
        hasap = hasap+(haryt.baha*haryt.sany);
        
        return null;
    })
    const [wagty,setWagty]=useState("today");
    return(
        <React.Fragment>
            <div className="sargyt_location">
                <Location name="Sargydym" />
            </div>
        <div className="sargyt_page">
            
            <div className="sargyt_shekili">
                <div className="toleg_shekili">
                    <h2>Töleg şekili</h2>
                    <div>
                        <input type="radio" name="toleg_gornush" id="nagt" />
                        <label for="nagt" >Nagt</label>
                    </div>
                    <div>
                        <input type="radio" name="toleg_gornush" id="terminal" />
                        <label for="terminal" >Töleg terminaly</label>
                    </div>
                    <div>
                        <input type="radio" name="toleg_gornush" id="online" />
                        <label for="online" >Onlaýn Töleg (ýakynda)</label>
                    </div>
                </div>

                <div className="alynmasy">
                <input type="checkbox" name="baryp_aljak" id="baryp_aljak"/>
                <label for="baryp_aljak">Özüm baryp aljak</label>
                </div>

                <div className="wagty">
                    <h1>Eltip berme wagtyny saýlaň:</h1>
                    <div className="wagty_buttons">
                        {
                            wagty==="today" ? <button onClick={()=>setWagty("today")} className="saylanan_wagt" >Şu gün</button> :
                            <button onClick={()=>setWagty("today")}>Şu gün</button>
                        }
                        {
                           wagty==="tomorow" ? <button onClick={()=>setWagty("tomorow")}  className="saylanan_wagt" >Ertir</button> :
                           <button onClick={()=>setWagty("tomorow")} >Ertir</button>
                        }
                        
                    </div>
                   <div className="sagat">
                        <input type="radio" name="sagat" id="sagat" />
                        <label for="sagat">18:00 - 21:00</label>
                   </div>

                </div>

                <div className="maglumat">
                    <div>
                        <div>
                            <p for="name">Doly adyňyz</p>
                            <input type="text" name="name" id="name"/>
                        </div>
                        <div>
                            <p for="address">Salgyňyz</p>
                            <input type="text" name="address" id="address"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p for="telefon">Telefon</p>
                            <input type="text" name="telefon" id="telefon"/>
                        </div>
                        <div>
                            <p for="bellik">Bellik</p>
                            <input type="text" name="bellik" id="bellik"/>
                        </div>
                    </div>
                </div>

                <div className="text">
                    <p>
                    -  Sargydy barlap alanyňyzdan soňra töleg amala aşyrylýar. 
                    Eltip berijiniň size gowşurýan töleg resminamasynda siziň 
                    tölemeli puluňyz bellenendir. Töleg nagt we nagt däl görnüşde
                     milli manatda amala aşyrylýar. Kabul edip tölegini geçiren harydyňyz yzyna alynmaýar;
                    </p>
                    <p>
                    -  Sargydy barlap alanyňyzdan soňra töleg amala aşyrylýar. 
                    Eltip berijiniň size gowşurýan töleg resminamasynda siziň tölemeli puluňyz bellenendir.
                    </p>
                </div>



            </div>






            <div className="sargyt_hasap">
                    <h2>Sebedim</h2>
                    <h5>Jemi</h5>
                    <h3>{`${hasap} manat`}</h3>
                    <button> Sargyt et</button>
            </div>
        </div>
        </React.Fragment>
    );
};

export default Sargyt;
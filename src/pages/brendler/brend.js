import React from "react";

import "./brend.css";
import BrendCard from "../../components/brend_card";
import Location from "../../components/location";

import elin from "../../img/brends/elin.svg";
import nescafe from "../../img/brends/nescafe.svg";
import hergun from "../../img/brends/hergun.svg";
import sawat from "../../img/brends/sawat.svg";
import balgaymak from "../../img/brends/balgaymak.svg";
import zamana from "../../img/brends/zamana.svg";
const Brend =(props)=>{
    return (
        <div className="brends_page">
            <div className="brend_location">
                <Location name="Brendler" />
            </div>
            <div className="brend_section" id="exclusive">
                <h2>Exclusive! (Diňe Sebetde) :</h2>
                <div className="brend-cards-container">
                    <div className="card_item">
                         <BrendCard name="Nescafe" src={elin} />
                    </div>
                    <div className="card_item">
                         <BrendCard name="Nescafe" src={sawat} />
                    </div>
                    <div className="card_item">
                         <BrendCard name="Nescafe" src={hergun} />
                    </div>
                    <div className="card_item">
                         <BrendCard name="Nescafe" src={nescafe} />
                    </div>
                    <div className="card_item">
                         <BrendCard name="Nescafe" src={balgaymak} />
                    </div>
                    <div className="card_item">
                         <BrendCard name="Nescafe" src={hergun} />
                    </div>
                    <div className="card_item">
                         <BrendCard name="Nescafe" src={zamana} />
                    </div>
                    
                </div>
            </div>

            <div className="brend_section" id="bakja">
                <h2>Gök we bakja önümleri :</h2>
                <div className="brend-cards-container">
                    <div className="card_item">
                         <BrendCard name="Nescafe" src={hergun} />
                    </div>
                    <div className="card_item">
                         <BrendCard name="Nescafe" src={balgaymak} />
                    </div>
                    <div className="card_item">
                         <BrendCard name="Nescafe" src={sawat} />
                    </div>
                    <div className="card_item">
                         <BrendCard name="Nescafe" src={zamana} />
                    </div>
                    <div className="card_item">
                         <BrendCard name="Nescafe" src={hergun} />
                    </div>
                    <div className="card_item">
                         <BrendCard name="Nescafe" src={elin} />
                    </div>
                    <div className="card_item">
                         <BrendCard name="Nescafe" src={nescafe} />
                    </div>
                    
                </div>
            </div>

            <div className="brend_section" id="iymit">
                <h2>Iýmit önümleri :</h2>
                <div className="brend-cards-container">
                    <div className="card_item">
                         <BrendCard name="Nescafe" src={nescafe} />
                    </div>
                    <div className="card_item">
                         <BrendCard name="Nescafe" src={zamana} />
                    </div>
                    <div className="card_item">
                         <BrendCard name="Nescafe" src={hergun} />
                    </div>
                    <div className="card_item">
                         <BrendCard name="Nescafe" src={elin} />
                    </div>
                    <div className="card_item">
                         <BrendCard name="Nescafe" src={sawat} />
                    </div>
                    <div className="card_item">
                         <BrendCard name="Nescafe" src={hergun} />
                    </div>
                    <div className="card_item">
                         <BrendCard name="Nescafe" src={balgaymak} />
                    </div>
                    
                </div>
            </div>

            <div className="brend_section" id="hojalyk">
                <h2>Arassaçylyk we Hojalyk :</h2>
                <div className="brends">

                </div>
            </div>

            <div className="brend_section" id="sagsy">
                <h2>Şahsy gözellik we ideg :</h2>
                <div className="brends">

                </div>
            </div>

            <div className="brend_section" id="cagalar">
                <h2>Çagalar üçin serişdeler :</h2>
                <div className="brends">

                </div>
            </div>

            <div className="brend_section" id="tekstil">
                <h2>Tekstil önümleri :</h2>
                <div className="brends">

                </div>
            </div>

            <div className="brend_section" id="haywanlar">
                <h2>Öý haýwanlarynyň idegi :</h2>
                <div className="brends">

                </div>
            </div>

        </div>
    );
};

export default Brend;
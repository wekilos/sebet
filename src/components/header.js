import React, { useState,useContext } from 'react';
import {Link} from "react-router-dom";
import {SebedimContext} from "../context/Sebedim";

import { Select, Drawer } from "antd";
import "antd/dist/antd.css";
import {GlobalOutlined,UsergroupAddOutlined,LoginOutlined} from '@ant-design/icons';
import "./header.css";
import logo from "../img/logo.png";
import logo_litle from "../img/logo_icon_header_litle.svg";
import sebet_icon from "../img/sebet_icon.svg";

// import search from "../img/header/search.svg";
const {Option} = Select;
const Header = (props)=>{
    const {sebedim} = useContext(SebedimContext);
    let sany=0;
    sebedim.map((haryt)=>{
            sany=sany+haryt.sany;
            return null;
    });
    
    
    const [menu,setMenu]=useState(false);
    
    return (
        <div className="header">
            {menu && <Drawer title="Kategoriýalar"placement="left" width="80%" visible={menu} onClose={()=>setMenu(false)} > 
                <h2 className="menu_nav"> <Link to="/">Şöhlatlar</Link> </h2>
                <h2 className="menu_nav"> <Link to="/">Büzmeçler</Link> </h2>
                <h2 className="menu_nav"> <Link to="/">Şöhlatlar</Link> </h2> 
                <h2 className="menu_nav"> <Link to="/">Büzmeçler</Link> </h2>

                <h1 id="menu_brend">Brendler</h1>
                 <h2 className="menu_nav"> <Link to="/">Şöhlatlar</Link> </h2>
                 <h2 className="menu_nav"> <Link to="/">Büzmeçler</Link> </h2>
                 <h2 className="menu_nav"> <Link to="/">Şöhlatlar</Link> </h2> 
                 <h2 className="menu_nav"> <Link to="/">Büzmeçler</Link> </h2>

            </Drawer>}
            <div className="top-section">
            <button onClick={()=>setMenu(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <Link to="/">
                <img id="bigLogo" alt="img" src={logo}  /></Link>
                
                <ul>
                    <li><Link to="/login"><LoginOutlined className="nav_icons" />Içeri gir</Link></li>
                    <li> <Link to="/signup"><UsergroupAddOutlined  className="nav_icons" />Agza bol</Link></li>
                    <li>
                        <GlobalOutlined className="nav_icons"  />
                        <Select className="dil" defaultValue="1"  bordered={false}>
                            <Option value="1">Türkmençe</Option>
                            <Option value="2">Rusça</Option>
                        </Select>
                    </li>
                </ul>
            </div>
            <div className="middle-section">
                <Link to="/">
                <img id="smollLogo" alt="" src={logo_litle} />
                </Link>
                <Link to="/sebet">
                <button className="nav-sebet" > 
                 {/* onClick={()=>window.location.assign("/sebet")} */}
                {sany===0 ? (null):(<span className="sebet-batch">{sany}</span>)}
                  <img alt="img" src={sebet_icon} style={{margin:"-5px 10px 0 0"}} />Sebet
               </button> 
                  </Link>

            </div>
            <div className="search-section">
              
               <div class="dropdown katigoriya">
                    <button class="dropbtn katigoriya" id="katigoriya"> Kategoriýalar</button>
                    <div class="dropdown-content">
                        <div className="arzanladysh">
                            <Link to="/">Arzanladyş we Aksiýalar</Link>
                                <div className="arzanladysh-content">
                                        <div>
                                        <Link to="/">Arzanladyşdaky harytlar</Link></div>
                                        <div>
                                        <Link to="/">Aksiýadaky harytlar</Link></div>
                                        <div>
                                        <Link to="/">Sowgatlyk Paketler</Link></div>
                                        <div>
                                        <Link to="/">Täze harytlar</Link></div>
                                </div>
                        </div>
                        <div className="gokBakja">
                            <Link to="/">Gök we bakja önümleri</Link>
                            <div className="gokBakja-content">
                                    <div>
                                    <Link to="/">Arzanladyşdaky harytlar</Link></div>
                                    <div>
                                    <Link to="/">Aksiýadaky harytlar</Link></div>
                                    <div>
                                    <Link to="/">Sowgatlyk Paketler</Link></div>
                                    <div>
                                    <Link to="/">Täze harytlar</Link></div>
                            </div>
                        </div>
                        <div className="iymitOnumleri">
                            <Link to="/">Iýmit önümleri</Link>
                                <div className="iymitOnumleri-content">
                                            <div className="kofe">
                                                <Link to="/">Kofe we Kakao</Link>
                                                <div className="kofe-content">
                                                        <div>
                                                        <Link id="kofeLink" to="/">Tebigy ereýän kofeler</Link></div>
                                                        <div>
                                                        <Link id="kofeLink" to="/">Kiçi paket kofeler</Link></div>
                                                        <div>
                                                        <Link id="kofeLink" to="/">Tebigy däne kofeler</Link></div>
                                                        <div>
                                                        <Link id="kofeLink" to="/">Kakao içgileri</Link></div>
                                                </div>
                                            </div>
                                            <div className="keks">
                                                <Link to="/">Şokolad we keksler</Link>
                                                    <div className="keks-content">
                                                            <Link to="/">Plitgalar</Link>
                                                            <Link to="/">Batonçikler</Link>
                                                            <Link to="/">Keksler</Link>
                                                            <Link to="/">Krem Şokoladlar</Link>
                                                            <Link to="/">Çagalar üçin</Link>
                                                    </div>
                                            </div>
                                            <div>
                                                <Link to="/">Taýýar ertirlikler</Link>
                                            </div>
                                            <div>
                                                <Link to="/">Çörek we un önümleri</Link>
                                            </div>
                                            <div>
                                                <Link to="/">Sowgatlyk Paketler</Link>
                                            </div>
                                            <div>
                                            <   Link to="/">Ýumurtga, Bal, Süýt önümleri</Link>
                                            </div>
                                            <div>
                                                <Link to="/">Et we şöhlat önümleri</Link>
                                            </div>
                                            <div>
                                                <Link to="/">Bakaleýa</Link>
                                            </div>
                                            <div>
                                                <Link to="/">Konserwirlenen we doňdurylan iýmitler</Link>
                                            </div>
                                            <div>
                                                <Link to="/">Aşhana we Kulinariýa</Link>
                                            </div>
                                            <div>
                                                <Link to="/">Alkagolsyz içgiler</Link>
                                            </div>
                                            <div>
                                                <Link to="/">Doňdurma</Link>
                                            </div>
                                            <div>
                                                <Link to="/">Ketçup, Maýonez we Sous</Link>
                                            </div>
                                            <div>
                                                <Link to="/">Köke önümleri</Link>
                                            </div>
                                            <div>
                                                <Link to="/">Gury iýmişler</Link>
                                            </div>
                                            <div>
                                                <Link to="/">Suharikler, Çipsler</Link>
                                            </div>
                                            <div>
                                                <Link to="/">Süýjiler</Link>
                                            </div>
                                </div>
                        </div>
                        <div className="hojalyk">
                            <Link to="/">Arassacylyk we Hojalyk</Link>
                            <div className="hojalyk-content">
                                        <div className="kir">
                                            <Link to="/">Kir ýuwyjy serişdeler</Link>
                                                <div className="kir-content">
                                                        <Link to="/">Awtomat üçin</Link>
                                                        <Link to="/">Elde ýuwmak üçin</Link>
                                                        <Link to="/">Ýumşadyjylar</Link>
                                                        <Link to="/">Kire garşy serşdeler</Link>
                                                        <Link to="/">Agardyjylar</Link>
                                                </div>
                                        </div>
                                        <div className="kagyz">
                                            <Link to="/">Kagyz önümleri</Link>
                                                <div className="kagyz-content">
                                                        <Link to="/">Kagyz süpürjiler</Link>
                                                        <Link to="/">Hajathana kagyzlary</Link>
                                                        <Link to="/">Salfetkalar</Link>
                                                        <Link to="/">Çygly süpürgiçler</Link>
                                                </div>
                                        </div>
                                        <div className="sabyn">
                                            <Link to="/">Sabynlar</Link>
                                                <div className="sabyn-content">
                                                        <Link to="/">Adaty Sabynlar</Link>
                                                        <Link to="/">Suwuk Sabynlar</Link>
                                                </div>
                                        </div>
                                        <div>
                                            <Link to="/">Öý arassaçylygy</Link>
                                        </div>
                                        <div>
                                            <Link to="/">Aşhana üçin serişdeler</Link>
                                        </div>
                                        <div>
                                            <Link to="/">Hajathana üçin serişdeler</Link>
                                        </div>
                                        <div>
                                            <Link to="/">Awtoulag üçin serişdeler</Link>
                                        </div>
                                        <div>
                                            <Link to="/">Batareýler</Link>
                                        </div>
                                        <div>
                                            <Link to="/">Ýagtylandyryş</Link>
                                        </div>
                                        <div>
                                            <Link to="/">Paketler</Link>
                                        </div>
                            </div>
                        </div>
                        <div className="ideg">
                            <Link to="/">Şagsy gözellik we ideg</Link>
                            <div className="ideg-content"> 
                                    <div>
                                        <Link to="/">Kosmetika</Link>
                                    </div>
                                    <div className="sac">
                                        <Link to="/">Saç üçin serişdeler</Link>
                                            <div className="sac-content">
                                                <Link to="/">Zenanlar üçin Şampunlar</Link>
                                                <Link to="/">Erkekler üçin Şampunlar</Link>
                                                <Link to="/">Saç uçin Balzamlar</Link>
                                                <Link to="/">Saç üçin ideg Serişdeleri</Link>
                                                <Link to="/">Saç üçin timar Serişdeleri</Link>
                                                <Link to="/">Saç Boýaglary</Link>
                                            </div>
                                    </div>
                                    <div className="dis">
                                        <Link to="/">Diş saglygy we arassaçylygy</Link>
                                            <div className="dis-content">
                                                <Link to="/">Diş pastalary</Link>
                                                <Link to="/">Diş şýotgalary</Link>
                                                <Link to="/">Diş üçin ýüpler</Link>
                                                <Link to="/">Çaýkaýjylar</Link>
                                            </div>
                                    </div>
                                    <div>
                                        <Link to="/">Deri üçin ideglar</Link>
                                    </div>
                                    <div className="parfumeria">
                                        <Link to="/">Parfumeriýa</Link>
                                            <div className="parfumeria-content">
                                                <Link to="/">Zenanlar üçin</Link>
                                                <Link to="/">Erkekler üçin</Link>
                                                <Link to="/">Unisex</Link>
                                            </div>
                                    </div>
                                    <div className="dezodorant">
                                        <Link to="/">Dezodorant we Antiperspirant</Link>
                                            <div className="dezodorant-content">
                                                <Link to="/">Zenanlar üçin</Link>
                                                <Link to="/">Erkekler üçin</Link>
                                            </div>
                                    </div>
                                    <div className="dush">
                                        <Link to="/">Duş gelleri</Link>
                                            <div className="dush-content">
                                                <Link to="/">Zenanlar üçin</Link>
                                                <Link to="/">Erkekler üçin</Link>
                                            </div>
                                    </div>
                                    <div>
                                        <Link to="/">Sakgal syrmak üçin serişdeler</Link>
                                    </div>
                                    <div>
                                        <Link to="/">Pagtaly çöpler</Link>
                                    </div>
                                    <div>
                                        <Link to="/">Aýakgap üçin serişdeler</Link>
                                    </div> 
                                    <div>
                                        <Link to="/">Kalgotgalar</Link>
                                    </div>
                                    <div>
                                        <Link to="/">Prokladkalar we şagsy gigiýena</Link>
                                    </div>

                            </div>
                            
                        </div>
                        <div className="cagalar">
                            <Link to="/">Çagalar üçin serişdeler</Link>
                                <div className="cagalar-content">
                                    <div>
                                        <Link to="/">Çaga Arlyklary</Link>
                                    </div>
                                    <div>
                                        <Link to="/">Çaga Iýmitleri</Link>
                                    </div>
                                    <div>
                                        <Link to="/">Oýnawaçlar</Link>
                                    </div>
                                    <div className="iymitlendirme">
                                        <Link to="/">Iýmitlendirme serişdeleri</Link>
                                            <div className="iymitlendirme-content">
                                                <Link to="/">Iýmitlendirme çüýşeleri</Link>
                                                <Link to="/">Emzikler</Link>
                                                <Link to="/">Çüýşe emzikleri</Link>
                                            </div>
                                    </div>
                                    <div>
                                        <Link to="/">Çaga ideg serişdeleri</Link>
                                    </div>
                                    <div>
                                        <Link to="/">Çaga üçin çygly süpürgiçler</Link>
                                    </div>
                                    <div>
                                        <Link to="/">Eneler üçin serişdeleri</Link>
                                    </div>
                                    <div>
                                        <Link to="/">Çaga üçin pagtaly çöpler</Link>
                                    </div>
                                    <div>
                                        <Link to="/">Diş rahatlandyryjylary</Link>
                                    </div>
                                    <div>
                                        <Link to="/">Aksesuarlar</Link>
                                    </div>

                                </div>

                        </div>
                        <div className="tekstil">
                            <Link to="/">Tekstil Önümleri</Link>
                                <div className="tekstil-content">
                                    <div>
                                        <Link to="/">Polotensalar</Link>
                                    </div>
                                    <div>
                                        <Link to="/">Örtükler (Maskalar)</Link>
                                    </div>
                                    <div>
                                        <Link to="/">Egin-Eşik</Link>
                                    </div>
                                    <div>
                                        <Link to="/">Hojalyk harytlary</Link>
                                    </div>
                                </div>
                        </div>
                        <div className="haýwanlar">
                            <Link to="/">Öý haýwanlarynyň idegi</Link>
                                <div className="haywanlar-content">
                                    <div>
                                        <Link to="/">Pişik iýmitleri</Link>
                                    </div>
                                    <div>
                                        <Link to="/">Ideg serişdeleri</Link>
                                    </div>
                                </div>
                        </div>
                        
                    </div>
                </div>

               <Link to="/brends">
               <button id="brendler" className="brendler">
                   Brendler
               </button>
               </Link>
              
               <input  type="text" placeholder="Haryt gözle" />
               <Link to="/sebet">
               <button className="nav-sebet" id="search_sec_button">
               {/* onClick={()=>window.location.assign("/sebet")}  */}
                   {sany===0 ? (null):(<span className="sebet-batch">{sany}</span>)}
                  <img alt="img" src={sebet_icon} style={{margin:"-5px 10px 0 0"}} />Sebet 
                  
               </button></Link>
            </div>
        </div>
    );
};

export default Header;

import React from 'react';
import {Link} from "react-router-dom";

import uuid from 'uuid/dist/v1';
import "./footer.css";
import logo from "../img/logo.png";

const Footer = (props)=>{
    return(
        <div className="footer">
            <div className="footer-content">
                <div>
                    <img alt="img" src={logo}/>
                </div>
                <div className="footer-contact">
                        
                        <table id="table_desktop" key={uuid()} >
                            <tbody>
                            <tr key={uuid()}>
                                <td key={uuid()}>Telefon</td>
                                <td key={uuid()}>+99365656565</td>
                                <td key={uuid()}>Email</td>
                                <td key={uuid()}>Sebet@info.com</td>
                            </tr>
                            <tr key={uuid()}>
                                <td key={uuid()}>Imo</td>
                                <td key={uuid()}>+99364554444</td>
                                <td key={uuid()}>Instagram</td>
                                <td key={uuid()}>@sebetmarket</td>
                            </tr>
                            </tbody>
                        </table>
                        <table id="table_phone"  key={uuid()}>
                        <tbody key={uuid()}>
                            <tr key={uuid()}>
                                <td key={uuid()}>Telefon</td>
                                <td key={uuid()}>+99365656565</td>
                               
                            </tr>
                            <tr key={uuid()}>
                                <td key={uuid()}>Imo</td>
                                <td key={uuid()}>+99364554444</td>
                            </tr>
                            <tr key={uuid()}>
                                <td key={uuid()}>Email</td>
                                <td key={uuid()}>Sebet@info.com</td>
                            </tr>
                            <tr key={uuid()}>
                                <td key={uuid()}>Instagram</td>
                                <td key={uuid()}>@sebetmarket</td>
                            </tr>
                            </tbody>
                        </table>
                        <table id="table_phone2" key={uuid()}>
                        <tbody>
                            
                                <tr key={uuid()} id="phone_about" >
                                <Link to="/about">
                            {/* onClick={()=>{window.location.assign("/about")}} */}
                                Biz Barada</Link>
                            </tr>
                            <tr key={uuid()}>
                                Eltip bermek hyzmaty
                            </tr>
                            <tr key={uuid()}>
                                Aragatnaşyk
                            </tr>
                            <tr key={uuid()}>
                                Ulanyş düzgünleri
                            </tr>
                            </tbody>
                        </table>
                        
                        <table id="table_desktop2" key={uuid()} style={{marginLeft:"100px"}}>
                        <tbody>
                            <tr key={uuid()}>
                                <td key={uuid()} id="about"> <Link to="/about">Biz Barada</Link></td>
                                <td key={uuid()}>Aragatnaşyk</td>
                            </tr>
                            <tr key={uuid()}>
                                <td key={uuid()} style={{width:"200px"}}>Eltip bermek hyzmaty</td>
                                <td key={uuid()} style={{width:"200px"}}>Ulanyş düzgünleri</td>
                            </tr>
                            </tbody>
                        </table>
                       
                </div>
                <div className="maker"> 
                    <h3 ><span style={{color:"#ff0000"}}>sebet.com</span> Ähli hukuklary goraglydyr.</h3>
                    <h4 >GeekSpace tarapyndan döredildi</h4>
                </div>
            </div>
        </div>
    );
};

export default Footer;
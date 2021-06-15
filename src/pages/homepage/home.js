import React,{useState} from "react";
import {Link} from "react-router-dom";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import {} from '@ant-design/icons';

import "./home.css";
// import Card from "../../components/card";
import CardGrid from "../../components/card_grid";
import Details from "../../components/product_details";
import img1 from "../../img/1.png";
import img2 from "../../img/2.png";
import img3 from "../../img/3.png";
import img4 from "../../img/4.png";
import right_arrow from "../../img/akar-icons_arrow-right.svg";
import Location from "../../components/location";

const Home = (props)=>{
  const [product_details,setProduct_details] = useState(false);
    const contentStyle = {
        height: 'inherit',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    }
    return(
      <React.Fragment>
        
     { product_details ? (null):(   <div className='home-carousel'>
             <Carousel autoplay  >
    <div>
        <h3 className="contentStyle" style={contentStyle}>Halal önümleriň tagamynyň lezzetini duýuň</h3>
    </div>
    <div>
      <h3 className="contentStyle" style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 className="contentStyle" style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 className="contentStyle" style={contentStyle}>4</h3>
    </div>
  </Carousel>
        </div>
     )}
     { product_details ? (null):(
        <div className="hLocation">
          <h3><Link to="/arzanladyslar">Arzanladyşlar</Link></h3>
          <h4><Link to="/arzanladyslar">ählisini gör <img alt="" src={right_arrow}/></Link> </h4>
        </div>
      )}  

      {
        product_details && 
        <div className="home_location">
          <Location name="Home" />
       </div>
      }

        {product_details &&
          <div className="product_details">
              <Details 
                  id="1"
                  src={img1}
                  name="Aşgabat Halal şöhlat"
                  new_price="70"
                  old_price="75" 
                  description="Towuk etinden Şöhlat"
                   />
                   
            <h1>Meňzeş harytlar</h1>
            </div>
        }



        {/* <div className="cards">
          <Card
          id="1"
          src={img1}
          skitga="20"
          name="Aşgabat Halal şöhlat"
          new_price="70"
          old_price="75"
          ></Card>
           <Card
           id="2"
          src={img2}
          skitga="20"
          name="Täze aý şöhlat"
          new_price="50"
          old_price="55"
          ></Card>
           <Card
           id="3"
          src={img3}
          skitga="20"
          name="Täze aý büzmeç"
          new_price="50"
          old_price="55"
          ></Card>
        </div> */}

        <div className="cards-container">
            <div className="card_item">
              <CardGrid
                onclick={()=>setProduct_details(true)}
                src={img1}
                skitga="10"
                name="Aşgabat Halal şöhlat"
                new_price="70"
                old_price="75"
              ></CardGrid>
            </div>
            <div className="card_item">
              <CardGrid
                onclick={()=>setProduct_details(true)}
                src={img2}
                skitga="20"
                name="Aşgabat Halal şöhlat"
                new_price="70"
                old_price="75"
              ></CardGrid>
            </div>
            <div className="card_item">
              <CardGrid
                onclick={()=>setProduct_details(true)}
                src={img3}
                skitga="20"
                name="Aşgabat Halal şöhlat"
                new_price="70"
                old_price="75"
                ></CardGrid>
            </div>
            <div className="card_item">
              <CardGrid
                onclick={()=>setProduct_details(true)}
                src={img4}
                skitga="20"
                name="Aşgabat Halal şöhlat"
                new_price="70"
                old_price="75"
              ></CardGrid>
            </div>
            <div className="card_item">
              <CardGrid
                onclick={()=>setProduct_details(true)}
                src={img1}
                skitga="20"
                name="Aşgabat Halal şöhlat"
                new_price="70"
                old_price="75"
              ></CardGrid>
            </div>
            <div className="card_item">
              <CardGrid
                onclick={()=>setProduct_details(true)}
                src={img1}
                skitga="20"
                name="Aşgabat Halal şöhlat"
                new_price="70"
                old_price="75"
              ></CardGrid>
            </div>
            <div className="card_item">
              <CardGrid
                onclick={()=>setProduct_details(true)}
                src={img1}
                skitga="20"
                name="Aşgabat Halal şöhlat"
                new_price="70"
                old_price="75"
              ></CardGrid>
            </div>
            <div className="card_item">
              <CardGrid
                onclick={()=>setProduct_details(true)}
                src={img1}
                skitga="20"
                name="Aşgabat Halal şöhlat"
                new_price="70"
                old_price="75"
              ></CardGrid>
            </div>
            <div className="card_item">
              <CardGrid
                onclick={()=>setProduct_details(true)}
                src={img1}
                skitga="20"
                name="Aşgabat Halal şöhlat"
                new_price="70"
                old_price="75"
              ></CardGrid>
            </div>
        </div>
        
      </React.Fragment>
    );
};

export default Home;
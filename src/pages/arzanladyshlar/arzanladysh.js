import React, { useState } from "react";
import {Link} from "react-router-dom";
import { Select } from "antd";
import "antd/dist/antd.css";
import {HomeOutlined,RightOutlined} from '@ant-design/icons';

import "./arzanladysh.css";
// import Card from "../../components/card";
import CardGrid from "../../components/card_grid";
import Details from "../../components/product_details";
import img1 from "../../img/1.png";
import img2 from "../../img/2.png";
import img3 from "../../img/3.png";
import img4 from "../../img/4.png";
// import right_arrow from "../../img/akar-icons_arrow-right.svg";


const Option ={Select}
const Home = (props)=>{
    const [product_details,setProduct_details] = useState(false);
    return(
      <React.Fragment>
        
        <div className="location">
          <Link to="/" ><HomeOutlined /> </Link>
          <h3> <RightOutlined /> </h3>
          <h3>Arzanladyşlar</h3>
        </div>

        { product_details===false ? <div className="filters">
            <Select className="brendler" style={{marginRight:"30px"}} defaultValue= 'Brend saýla'>
                <Option key="2"  value="2">Esma</Option>
                <Option key="3"  value="3">MONA</Option>
            </Select>

            <Select className="filter" defaultValue= 'Tertiplemek'>
                <Option key="5"  value="2">Esma</Option>
                <Option key="4" value="3">MONA</Option>
            </Select>
        </div> : null}
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
          onclick={()=>setProduct_details(true)}
          src={img1}
          skitga="20"
          name="Aşgabat Halal şöhlat"
          new_price="70"
          old_price="75"
          ></Card>
           
        </div> */}
        <div className="cards-container">
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
import React from "react";
import {Link} from "react-router-dom"
// import { Select } from "antd";
import "antd/dist/antd.css";
import {HomeOutlined,RightOutlined} from '@ant-design/icons';
import "./location.css";
// import sebet_icon from "../img/red_sebet_icon.svg";
const Location =(props)=>{
    return (
        <div className="location">
          <Link to="/" ><HomeOutlined /> </Link>
          <h3> <RightOutlined /> </h3>
          <h3>{props.name}</h3>
        </div>
    );
};

export default Location;
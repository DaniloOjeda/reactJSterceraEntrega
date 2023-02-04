import React from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import "./item.css";
import { Link } from "react-router-dom";

function Item(props) {
  let urlDetail = `/item/${props.id}`;

  // let stylePrice = {
  //   color: props.discount ? "green" : "red",  
  // };

  let classNamePrice = props.discount? "offerTag" : "priceTag"

  return (
    <Link to={urlDetail}>
    <div className="card">  
      <ToggleButton icon="♥"/>
        <div clasName="card-img"> 
            <img src={props.imgurl}  alt="imagen del producto"></img>
        </div>  
        <div className="card-detail">
        <h2>{props.title}</h2>
        <h4 className={classNamePrice}> 
          $ {props.price}
          <br/>

         { props.discount && <small>{props.discount}% off </small> }
        </h4>   
        <small>{props.description}</small>
      </div> 
      <button>Ir al detalle</button>
    </div>
    </Link>
  );
}

export default Item;
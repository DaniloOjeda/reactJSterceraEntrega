import React from 'react';
import Flex from "../Flex/Flex";
import Item from "./Item";


function ItemList(props) {
  return (
    <div className="itemlist">
    <Flex> 
       {props.product.map((producto) => (
    <Item 
      key={producto.id}
      id={producto.id}
      imgurl={producto.imgurl} 
      title={producto.title} 
      price={producto.price} 
      description={producto.description} 
      newProduct={producto.newProduct}
      discount={producto.discount}
    />
    ))}
    </Flex>
    </div>
  );
}

export default ItemList;
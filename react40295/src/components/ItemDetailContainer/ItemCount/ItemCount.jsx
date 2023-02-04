import React, { useState }  from "react";
import Button from "../../Button/Button";
import "./itemcount.css";



 
function ItemCount({  stock, onAddToCart  }) {
    const [count, setCount] = useState(1);

    function handleAdd() {
        if (count < 5) setCount(count + 1);
    }


  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
    <div className="itemocunt_control">
        <Button onButtonTouch={handleSubstract}>
          -
        </Button>

        <span>{count}</span>

        <Button onButtonTouch={handleAdd}>
          +
        </Button>  
    </div>
    <div className="itemcount_btns">
        <Button onButtonTouch={()=>onAddToCart(count)}>
            agregar al carrito
        </Button>
    </div>
    </div>
  );
};

export default ItemCount;
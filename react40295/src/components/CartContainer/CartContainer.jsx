import React , { useContext, useState } from "react";
import { createBuyOrder_WithStockControl } from "../../service/firebase";
import { cartContext } from "../../storage/cartContext";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";



function CartContainer(){
    const [order, setOrder] = useState(false);

    let navigateTo = useNavigate();

    const { cart } = useContext(cartContext);


function handleCheckout(){
    const order = {
        buyer:{
            name:"Danilo",
            email:"d@gmail.com",
            phome:"1234",
        },
        items:cart,
        total:111,
        date: new Date(),
    }

    createBuyOrder_WithStockControl(order).then((id) => {

   navigateTo(`/Gracias/${id}`);
});
}
if(order)
return (
    <div>
        <h1>Gracias!</h1>
        <p>Se genero la orden correctamente</p>
        <small>Tu id de compra: {}</small>
    </div>
)
    return (
        <>
            <h1>Tu Carrito</h1>
            <table className="cartList">
                <thead className="cartList_head">
                    <tr className="cartList_row">
                        <th>Foto</th>
                        <th>Titulo</th>
                        <th>tdrecio</th>
                        <th>Cantidad</th>
                        <th>Remover</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                   {cart.map(item => (
                    
                    <tr key={item.id} className="cartList_row">
                        <td>
                            <img height={50} src={item.img} alt={item.title} />
                        </td>
                        <td>{item.title}</td>
                        <td>$ {item.price}</td>
                        <td>{item.count}</td>
                        <td>
                           <Button color="red" onClick={item.removeItem}>
                               X
                           </Button>
                        </td>
                        <th>$ --,--</th>
                    </tr>
               
                 ))}
               </tbody>     
            </table>

           <div className="cartList_detail">
               <h4>El total de tu compra es de $ --,--</h4>
               <Button onButtonTouch={handleCheckout} color="yellow">Finalizar Compra</Button>
           </div>
                  
        </>
    );
}

export default CartContainer;
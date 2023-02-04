import React, {useContext} from "react";
import { cartContext } from "../storage/cartContext";

function Contacto() {

const miContexto = useContext(cartContext);
console.log(miContexto.saludo);

    return (
    <div>
        <h1>Contacto</h1>
        <p>Gracias por contactarnos</p>
    </div>
    ); 
}

export default Contacto;
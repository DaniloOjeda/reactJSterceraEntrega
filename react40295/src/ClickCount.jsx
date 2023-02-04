import React, {useState} from "react";


export default function ClickCount() {
    const [clicks, setClicks] = useState (0);
    const [lastClick, setLastClick]= useState("--");

    function handleClick(){
        setClicks(clicks + 1);

        let hora = new Date().toLocaleTimeString()
        setLastClick(hora)

    }
  
    return (
    <div>
        <button onClick={handleClick}>Click me</button>
        <h3>{clicks}</h3>
        <small>ultimo click:{lastClick} </small>
    </div>
  )
}



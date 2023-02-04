import React from "react";

function InputForm(props) {
    return (
        <div style={{display: `flex`, marginBotton: 8}}>
            <label style={{ width: 120, marginRight: 7}} >{props.title}</label>
            <label required value={props.value} name={props.name} type="text" onChange={props.onChange}/>
        </div>
    )
}

export default InputForm
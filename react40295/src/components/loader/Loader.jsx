import React from "react";
import { NewtonsCradle } from '@uiball/loaders';


function Loader(props) {
     const colorLoader = props.color || "pink";
    return <>
     <NewtonsCradle 
    size={100}
    speed={1.2} 
    color={props.color}
   />
   </>
}

export default Loader;
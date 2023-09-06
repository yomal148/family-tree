import React, {useState} from 'react';
//import { Modal } from "@chakra-ui/modal";

const circleStyle = {
    padding:10,
    margin:20,
    display:"inline-block",
    outlineColor: "black",
    outlineStyle: "solid",
    backgroundColor: 'white',
    borderRadius: "50%",
    width:100,
    height:100,
    textAlign: "center"  
}

function Modal({children}){
    const [visibility, setVisibility] = useState(true);
    function toggleShow(){
        setVisibility(!visibility);
    }
    let buttonText = visibility ? 'Hide Node' : 'Show Node'

    return(
        <div style={circleStyle} onClick={toggleShow}> {buttonText} </div>
    );
}

export default Modal
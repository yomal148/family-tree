import React from 'react';

import './App.css';
//import {BrowserRouter, Route, Routes} from "react-router-dom";

import backgroundImage from './img/family_tree.png';
import NodeModal from './components/NodeModal';

import { Button } from "@chakra-ui/button";


const containerStyle= {
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  display: 'flex', 
  alignItems: "center", 
  justifyContent:'center',
}

function App() {
  return (  
      <div style={containerStyle}>
        <Button style={{ display: "flex",  width: "100px", height: "100px", 
          backgroundColor: "lightBlue", borderRadius: "50%", textAlign: "center", top: '-1px', position: 'absolute', 
          }}> <p1> Root </p1>
        </Button> 
        <NodeModal/>
      </div>
  
    
  );
}


export default App;

import React from 'react';

import './App.css';
//import {BrowserRouter, Route, Routes} from "react-router-dom";

import backgroundImage from './img/family_tree.png';
import NodeModal from './components/NodeModal';

import { Button } from "@chakra-ui/button";

import CytoscapeComponent from 'react-cytoscapejs';

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

const elements = [
  { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
  { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
  { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
];


function App() {
  return (  
    //{
      /** 
      <div style={containerStyle}>
        <Button style={{ display: "flex",  width: "100px", height: "100px", 
          backgroundColor: "lightBlue", borderRadius: "50%", textAlign: "center", top: '-1px', position: 'absolute', 
          }}> <p1> Root </p1>
        </Button> 
        <NodeModal/>
      </div>
      */
     // }
     <div style={containerStyle}>
     <CytoscapeComponent elements={elements} style={ { width: '600px', height: '600px' } } />
     </div>
  );
}


export default App;

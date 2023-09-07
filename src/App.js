import React from 'react';

import './App.css';
//import {BrowserRouter, Route, Routes} from "react-router-dom";

import backgroundImage from './img/family_tree.png';
import NodeModal from './components/NodeModal';
//import DefaultText from './components/DefaultText';

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
      <NodeModal />
    </div>
  );
}


export default App;

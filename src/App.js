import React from 'react';

import './App.css';
//import {BrowserRouter, Route, Routes} from "react-router-dom";

import backgroundImage from './img/family_tree.png';
import CytoscapeGraph from './components/CytoScapeGraph';

//import { Button } from "@chakra-ui/button";

import CytoscapeComponent from 'react-cytoscapejs';
import {useEffect, useState} from 'react';

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
  // gives me coordinates to plug into Cytoscape Component
  const [mouseCoordinates, setMouseCoordinates] = useState({x:0, y:0});
	
  	const mouseMoveHandler = (event) => {
    	setMouseCoordinates({
      		x:event.clientX,
      		y:event.clientY
    	});
  	}
  		
  	useEffect(()=>{
    	window.addEventListener('mousemove', mouseMoveHandler);
    	return(()=>{
      		window.removeEventListener('mousemove', mouseMoveHandler);
    	})
  	}, [])

  return (  
     <div style={containerStyle}>
     <CytoscapeGraph/>
      {/*Mouse Coordinates: x = {mouseCoordinates.x}, y={mouseCoordinates.y} */}
     </div>
     
  );
}


export default App;

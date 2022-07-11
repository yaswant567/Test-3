import React from 'react';
//import './App.css';
import img from "./image/1.jpg";
import img1 from "./image/2.jpg";
import img2 from "./image/3.jpg";
import img3 from "./image/4.jpg";


import Cards from '../src/cards';

function App() {
  return (
    
    <>
    <Cards name="Alexa Speaker" img={img}/>
    <Cards name="Game support set"  img={img1}/>
    <Cards name="PS" img={img2}/>
    <Cards name="Speaker" img={img3}/>
    </>
  );
}

export default App;

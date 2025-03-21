import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Aboutme from './components/pages/Aboutme';
import  Contactus  from './components/pages/Contactus.js';
import Cards from './components/Cards';
import Projects from './components/pages/Projects';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' exact Component={Home}/>
      <Route path='/aboutme' Component={Aboutme}/>
      <Route path='/contactme' Component={Contactus}/>
      <Route path='/cards' Component={Cards}/>
      <Route path='/projects' Component={Projects}/>
      </Routes>
    </Router>
   </>  
  );
}

export default App;

import React from 'react';
import './App.css'
import Heading from './Heading';
import Nav from './Navigation';
import Skills from './Skills';
import Contactus from './Contactus';
import  Projects  from './Projects';


function App() {

  return (
    <div>
      <Nav/>
      <Heading/>
      <Skills/>
      <Contactus/>
      <Projects/>

    </div>
  );
}

export default App

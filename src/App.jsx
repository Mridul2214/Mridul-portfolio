import React from 'react';
import './App.css';
import User from './components/user/User'
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Project from './components/project/Project';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';
import Scrolltop from './components/Scrolltop';
import Experience from './components/Experience/Experience';

const App = () => {
  // const scrolltop=()=>{
    // window.scrollTo({top:0, behavior:'smooth'});
  // };
  return (
    <div>
      <div id="user"><User/></div>
      <div id="about"><About/></div>
      <div id='skill'><Skills/></div>
      <div id="project"><Project/></div>
      <div id='experience'><Experience/></div>
      <div id="education"><Education/></div>
      <div id="contact"><Contact/></div>
      <Scrolltop/>
      {/* <button onClick={scrolltop}>⬆️</button> */}
    </div>
  );
};

export default App;

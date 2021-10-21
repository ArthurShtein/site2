import React, {useState} from 'react';
import Header from './cmps/header/Header';
import Hero from './cmps/hero/Hero'
import './App.css';
import Footer from './cmps/footer/Footer'
import About from './cmps/about/About'
import Projects from './cmps/projects/Projects'

import projects from './projects-data';

function App() {
  const [allProjects, setProjects] = useState(projects)

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Projects allProjects={allProjects}/>
      <Footer/>
    </div>
  );
}

export default App;

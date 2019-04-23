import React from 'react';
import './App.css';
import Intro from './containers/Intro'
import Skills from './containers/Skills'
import Projects from './containers/Projects'
import Blog from './containers/Blog'
import Contact from './containers/Contact'


function App() {
  return (
    <div className="App">
      < Intro />
      < Skills />
      < Projects />
      < Blog />
      < Contact />
    </div>
  );
}

export default App;

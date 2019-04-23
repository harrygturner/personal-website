import React, { Component } from 'react';
import './App.css';
import Intro from './containers/Intro'
import Skills from './containers/Skills'
import Projects from './containers/Projects'
import Blog from './containers/Blog'
import Contact from './containers/Contact'

export default class App extends Component {

  handleViewProjectEnter = () => {
    const viewProjArrow = document.querySelector('.fas.fa-arrow-right');
    viewProjArrow.classList.add('rotate');
  }

  handleViewProjectLeave = () => {
    const viewProjArrow = document.querySelector('.fas.fa-arrow-right');
    viewProjArrow.classList.remove('rotate');
  }

  render() {
    return (
      <div className="App">
        < Intro handleViewProjectEnter={this.handleViewProjectEnter} handleViewProjectLeave={this.handleViewProjectLeave} />
        < Skills />
        < Projects />
        < Blog />
        < Contact />
      </div>
    );
  }

}


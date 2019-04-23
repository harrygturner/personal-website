import React, { Component } from 'react';
import './App.css';
import Intro from './containers/intro/Intro'
import NavBar from './containers/NavBar'
import Skills from './containers/about/Skills'
import Projects from './containers/Projects'
import Blog from './containers/Blog'
import Contact from './containers/Contact'

export default class App extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll())
  }

  handleViewProjectEnter = () => {
    const viewProjArrow = document.querySelector('.fas.fa-arrow-right');
    viewProjArrow.classList.add('rotate');
  }

  handleViewProjectLeave = () => {
    const viewProjArrow = document.querySelector('.fas.fa-arrow-right');
    viewProjArrow.classList.remove('rotate');
  }

  handleScroll = () => {
    debugger
    const el = document.querySelector('#skills');
    const scrollY = el.scrollHeight
    if(window.scrollY > scrollY) {
      console.log('Hi')
    }
  }

  render() {
    return (
      <div className="App" onScroll={this.handleScroll}>
        < Intro 
          handleViewProjectEnter={this.handleViewProjectEnter} 
          handleViewProjectLeave={this.handleViewProjectLeave} 
        />
        < NavBar />
        < Skills />
        < Projects />
        < Blog />
        < Contact />
      </div>
    );
  }

}


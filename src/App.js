import React, { Component } from 'react';
import './App.css';
import Intro from './containers/intro/Intro'
import NavBar from './containers/NavBar'
import Skills from './containers/about/Skills'
import Projects from './containers/Projects'
import Blog from './containers/Blog'
import Contact from './containers/Contact'

export default class App extends Component {

  state = {
    sectionOnView: ''
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  trackScrolling = () => {
    const el = document.querySelector('#navbar');
    if(el.getBoundingClientRect().top < 0 && !el.classList.contains('stick')){
      el.classList.add('stick');
    } else if (el.getBoundingClientRect().top > 0 && el.classList.contains('stick')) {
      el.classList.remove('stick');
    }
    this.highlightNavBarSections()
  }

  highlightNavBarSections = () => {
    const htmlCollection = document.children[0].children[3].children[1].children[0].children
    const arrayOfSections = Array.prototype.slice.call(htmlCollection)
    arrayOfSections.forEach(section => {
      if(section.id !== 'navbar'){
        const sectionTop = section.getBoundingClientRect().top
        const sectionHeight = section.getBoundingClientRect().height
        if(sectionTop < 0 && (sectionTop + sectionHeight) > 0) {
          this.setState({ 
            sectionOnView: section.id
          })
        }
      }
    })
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
        < NavBar sectionOnView={this.state.sectionOnView} />
        < Skills />
        < Projects />
        < Blog />
        < Contact />
      </div>
    );
  }

}


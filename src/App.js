import React, { Component } from 'react';
import './App.css';
import Intro from './containers/intro/Intro'
import NavBar from './containers/NavBar'
import Skills from './containers/about/Skills'
import Projects from './containers/projects/Projects'
import Blog from './containers/blog/Blog'
import Contact from './containers/contact/Contact'

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
        const navbarSection = document.querySelector(`#navbar .${section.id}`)
        if(sectionTop < 100 && (sectionTop + (sectionHeight-100)) > 0) {
          navbarSection.classList.add('highlight');
        } else {
          navbarSection.classList.remove('highlight');
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

  handleSectionClick = e => {
    const section = e.target.className;
    this.scrollTo(section);
  }

  scrollTo = section => {
    const target = document.querySelector(`#${section}`);
    window.scrollTo(0, target.offsetTop - 20);
  }

  handleLinkToBlog = e => {
    switch (e.currentTarget.classList[1]){
      case 'th':
        window.open('https://medium.com/@harry.turner/talktalk-for-hackers-cc725429ed07', '_blank');
        break;
      case 'vr':
        window.open('https://medium.com/voice-tech-podcast/voice-recognition-the-end-of-the-keyboard-79e70691a90d', '_blank');
        break;
      case 'lr':
        window.open('https://medium.com/@harry.turner/deployment-localhost-to-real-world-cec1da110e28', '_blank');
        break;
      case 'rx':
        window.open('https://medium.com/@harry.turner/regex-the-good-the-bad-and-the-basics-e9c247bc6d94', '_blank');
        break;
      default:
        break;
    }
  }

  // --------------- handle blog hover ---------------------------

  handleBlogHover = e => {
    const target = e.currentTarget;
    const cardList = document.querySelectorAll('#blog .card')
    const cardArr = Array.prototype.slice.call(cardList)
    cardArr.forEach( card => {
      if( target === card ){
        card.classList.add('highlight')
      } else {
        card.classList.add('fade')
      }
    })
  }

  handleBlogLeave = e => {
    const target = e.currentTarget;
    const cardList = document.querySelectorAll('#blog .card')
    const cardArr = Array.prototype.slice.call(cardList)
    cardArr.forEach(card => {
      if (target === card) {
        card.classList.remove('highlight')
      } else {
        card.classList.remove('fade')
      }
    })
  }

  render() {
    return (
      <div className="App" onScroll={this.handleScroll}>
        < Intro 
          handleViewProjectEnter={this.handleViewProjectEnter} 
          handleViewProjectLeave={this.handleViewProjectLeave} 
          scrollTo={this.scrollTo}
        />
        < NavBar sectionOnView={this.state.sectionOnView} handleSectionClick={this.handleSectionClick} />
        < Skills />
        < Projects />
        < Blog 
          handleLinkToBlog={this.handleLinkToBlog} 
          hanldeMouseEnter={this.handleBlogHover}
          handleMouseLeave={this.handleBlogLeave}
        />
        < Contact />
      </div>
    );
  }

}


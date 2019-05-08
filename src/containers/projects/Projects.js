import React, { Component } from 'react';
import './projects.css'
import AAimage from '../../images/AccessAbled.png'
import GPimage from '../../images/GymPal.png'
import NCimage from '../../images/NightCrawler.png'
import SFBimage from '../../images/SFB.png'
import WIimage from '../../images/Wheelchair.png'
import VRimage from '../../images/VoiceRecognition.png'


export default class Projects extends Component {

   state = {
      projectsDisplay: 'all'
   }

   changeDisplay = e => {
      this.setState({
         projectsDisplay: e.target.className
      })
      this.highlightProjectType(e.target.className);
   }

   handleMouseEnter = e => {
      let img = e.target.children[0];
      if(!img){
         img = e.target;
      };
      if (!img.classList.contains('thumbnail')){
         img.parentElement.querySelector('.thumbnail') 
            ? img = img.parentElement.querySelector('.thumbnail')
            : img = img.parentElement.parentElement.querySelector('.thumbnail')
      };
      img.classList.add('fade-out');
      img.classList.remove('fade-in');
      const topText = img.nextElementSibling;
      if(!topText){
         debugger
      }
      const btnEl = topText.nextElementSibling;
      this.handleImgTextAppear(topText, btnEl)
   }

   handleMouseLeave = e => {
      let img = e.target.children[0];
      if(!img){
         img = e.target
      } ;
      if (!img.classList.contains('thumbnail')) {
         img.parentElement.querySelector('.thumbnail')
            ? img = img.parentElement.querySelector('.thumbnail')
            : img = img.parentElement.parentElement.querySelector('.thumbnail')
      };
      img.classList.remove('fade-out');
      img.classList.add('fade-in');
      const topText = img.nextElementSibling;
      if (!topText) {
         debugger
      }
      const btnEl = topText.nextElementSibling;
      this.handleImgTextDissappear(topText, btnEl)
   }

   handleImgTextAppear = (topEl, bottomEl) => {
      topEl.classList.remove('top-hidden');
      bottomEl.classList.remove('btn-hidden');
      topEl.classList.add('top-vis');
      bottomEl.classList.add('btn-vis');
   }

   handleImgTextDissappear = (topEl, bottomEl) => {
      topEl.classList.add('top-hidden');
      bottomEl.classList.add('btn-hidden');
      topEl.classList.remove('top-vis');
      bottomEl.classList.remove('btn-vis');
   }

   renderAllProjects = () => (
      <div className='projects-disp all'>
         <div id='AA' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <img src={AAimage} alt='project thumbnail' className='thumbnail' />
            <div className='text top-hidden'>
               <div className='bold'>AccessAbled</div>
               <div className='language'>React.js and Ruby on Rails</div>
            </div>
            <div className='btn btn-hidden'>LEARN MORE</div>
         </div>
         <div id='gympal' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <img src={GPimage} alt='project thumbnail' className='thumbnail' />
            <div className='text top-hidden'>
               <div className='bold'>GymPal</div>
               <div className='language'>React.js and Ruby on Rails</div>
            </div>
            <div className='btn btn-hidden'>LEARN MORE</div>
         </div>
         <div id='NC' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <img src={NCimage} alt='project thumbnail' className='thumbnail' />
            <div className='text top-hidden'>
               <div className='bold'>NightCrawler</div>
               <div className='language'>Vanilla Javascript and Ruby on Rails</div>
            </div>
            <div className='btn btn-hidden'>LEARN MORE</div>
         </div>
         <div id='SFB' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <img src={SFBimage} alt='project thumbnail' className='thumbnail' />
            <div className='text top-hidden'>
               <div className='bold'>Simpsons Fantasy Basketball</div>
               <div className='language'>Ruby on Rails</div>
            </div>
            <div className='btn btn-hidden'>LEARN MORE</div>
         </div>
         <div id='WI' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <img src={WIimage} alt='project thumbnail' className='thumbnail' />
            <div className='text top-hidden'>
               <div className='bold'>Wheelchair Analysis</div>
               <div className='language'>Mechanical Engineering and C++</div>
            </div>
            <div className='btn btn-hidden'>LEARN MORE</div>
         </div>
         <div id='VR' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <img src={VRimage} alt='project thumbnail' className='thumbnail' />
            <div className='text top-hidden'>
               <div className='bold'>Voice Recognition</div>
               <div className='language'>Vanilla Javascript</div>
            </div>
            <div className='btn btn-hidden'>LEARN MORE</div>
         </div>
      </div>
   )

   renderRubyProjects = () => (
      <div className='projects-disp ruby'>
         <div id='AA' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <img src={AAimage} alt='project thumbnail' className='thumbnail' />
            <div className='text top-hidden'>
               <div className='bold'>AccessAbled</div>
               <div className='language'>React.js and Ruby on Rails</div>
            </div>
            <div className='btn btn-hidden'>LEARN MORE</div>
         </div>
         <div id='gympal' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <img src={GPimage} alt='project thumbnail' className='thumbnail' />
            <div className='text top-hidden'>
               <div className='bold'>GymPal</div>
               <div className='language'>React.js and Ruby on Rails</div>
            </div>
            <div className='btn btn-hidden'>LEARN MORE</div>
         </div>
         <div id='NC' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <img src={NCimage} alt='project thumbnail' className='thumbnail' />
            <div className='text top-hidden'>
               <div className='bold'>NightCrawler</div>
               <div className='language'>Vanilla Javascript and Ruby on Rails</div>
            </div>
            <div className='btn btn-hidden'>LEARN MORE</div>
         </div>
         <div id='SFB' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <img src={SFBimage} alt='project thumbnail' className='thumbnail' />
            <div className='text top-hidden'>
               <div className='bold'>Simpsons Fantasy Basketball</div>
               <div className='language'>Ruby on Rails</div>
            </div>
            <div className='btn btn-hidden'>LEARN MORE</div>
         </div>
      </div>
   )

   renderJsProjects = () => (
      <div className='projects-disp js'>
         <div id='AA' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <img src={AAimage} alt='project thumbnail' className='thumbnail' />
            <div className='text top-hidden'>
               <div className='bold'>AccessAbled</div>
               <div className='language'>React.js and Ruby on Rails</div>
            </div>
            <div className='btn btn-hidden'>LEARN MORE</div>
         </div>
         <div id='gympal' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <img src={GPimage} alt='project thumbnail' className='thumbnail' />
            <div className='text top-hidden'>
               <div className='bold'>GymPal</div>
               <div className='language'>React.js and Ruby on Rails</div>
            </div>
            <div className='btn btn-hidden'>LEARN MORE</div>
         </div>
         <div id='NC' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <img src={NCimage} alt='project thumbnail' className='thumbnail' />
            <div className='text top-hidden'>
               <div className='bold'>NightCrawler</div>
               <div className='language'>Vanilla Javascript and Ruby on Rails</div>
            </div>
            <div className='btn btn-hidden'>LEARN MORE</div>
         </div>
         <div id='VR' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <img src={VRimage} alt='project thumbnail' className='thumbnail' />
            <div className='text top-hidden'>
               <div className='bold'>Voice Recognition</div>
               <div className='language'>Vanilla Javascript</div>
            </div>
            <div className='btn btn-hidden'>LEARN MORE</div>
         </div>
      </div>
   )

   renderCProjects = () => (
      <div className='projects-disp c++'>
         <div id='WI' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <img src={WIimage} alt='project thumbnail' className='thumbnail' />
            <div className='text top-hidden'>
               <div className='bold'>Wheelchair Analysis</div>
               <div className='language'>Mechanical Engineering and C++</div>
            </div>
            <div className='btn btn-hidden'>LEARN MORE</div>
         </div>
      </div>
   )

   renderErrorMessage = () => (
      <div className='project-disp error'>
         <h4>Projects not loading...</h4>
      </div>
   )

   renderProjects = type => {
      switch (type) {
         case 'all':
            return this.renderAllProjects();
         case 'ruby':
            return this.renderRubyProjects();
         case 'js':
            return this.renderJsProjects();
         case 'c++':
            return this.renderCProjects();
         default:
            return this.renderErrorMessage();
      }
   }

   highlightProjectType = typeClicked => {
      const typesArray = Array.prototype.slice.call(document.querySelector('.project-types').children);
      typesArray.forEach(type => {
         type.classList.contains(typeClicked) 
            ? type.classList.add('highlight')
            : type.classList.remove('highlight')
         }
      )
   }

   render() {
      return (
         <div id='projects' className='section'>
            <div className='header'>
               <h1>PROJECTS</h1>
               <hr />
            </div>
            <div className='project-cont'>
               <div className='project-types'>
                  <div></div>
                  <div className='all highlight' onClick={this.changeDisplay}>ALL</div>
                  <div className='ruby' onClick={this.changeDisplay}>RUBY / RAILS</div>
                  <div className='js' onClick={this.changeDisplay}>JAVASCRIPT / REACT</div>
                  <div className='c++' onClick={this.changeDisplay}>C++</div>
                  <div></div>
               </div>
               {this.renderProjects(this.state.projectsDisplay)}
            </div>
         </div>
      )
   }

}
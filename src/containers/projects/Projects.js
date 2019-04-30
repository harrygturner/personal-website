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
      const img = e.target.children[0];
      debugger
      img.classList.add('fade-out');
      img.classList.remove('fade-in');
   }

   handleMouseLeave = e => {
      const img = e.target.children[0];
      img.classList.remove('fade-out');
      img.classList.add('fade-in');
   }

   renderAllProjects = () => (
      <div className='projects-disp all' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
         <div id='AA'>
            <img src={AAimage} alt='project thumbnail' className='thumbnail' />
            <div className='text'>
               <div className='bold'>AccessAbled</div>
               <div className='language'>React.js and Ruby on Rails</div>
            </div>
            <div className='btn'>LEARN MORE</div>
         </div>
         <div id='gympal'>
            <img src={GPimage} alt='project thumbnail' className='thumbnail' />
            <div className='text'>
               <div className='bold'>GymPal</div>
               <div className='language'>React.js and Ruby on Rails</div>
            </div>
            <div className='btn'>LEARN MORE</div>
         </div>
         <div id='NC'>
            <img src={NCimage} alt='project thumbnail' className='thumbnail' />
            <div className='text'>
               <div className='bold'>NightCrawler</div>
               <div className='language'>Vanilla Javascript and Ruby on Rails</div>
            </div>
            <div className='btn'>LEARN MORE</div>
         </div>
         <div id='SFB'>
            <img src={SFBimage} alt='project thumbnail' className='thumbnail' />
            <div className='text'>
               <div className='bold'>Simpsons Fantasy Basketball</div>
               <div className='language'>Ruby on Rails</div>
            </div>
            <div className='btn'>LEARN MORE</div>
         </div>
         <div id='WI'>
            <img src={WIimage} alt='project thumbnail' className='thumbnail' />
            <div className='text'>
               <div className='bold'>Wheelchair Analysis</div>
               <div className='language'>Mechanical Engineering and C++</div>
            </div>
            <div className='btn'>LEARN MORE</div>
         </div>
         <div id='VR'>
            <img src={VRimage} alt='project thumbnail' className='thumbnail' />
            <div className='text'>
               <div className='bold'>Voice Recognition</div>
               <div className='language'>Vanilla Javascript</div>
            </div>
            <div className='btn'>LEARN MORE</div>
         </div>
      </div>
   )

   renderRubyProjects = () => (
      <div className='projects-disp ruby'>
         <div id='AA'>
            <img src={AAimage} alt='project thumbnail' className='thumbnail' />
            <div className='text'>
               <div className='bold'>AccessAbled</div>
               <div className='language'>React.js and Ruby on Rails</div>
            </div>
            <div className='btn'>LEARN MORE</div>
         </div>
         <div id='gympal'>
            <img src={GPimage} alt='project thumbnail' className='thumbnail' />
            <div className='text'>
               <div className='bold'>GymPal</div>
               <div className='language'>React.js and Ruby on Rails</div>
            </div>
            <div className='btn'>LEARN MORE</div>
         </div>
         <div id='NC'>
            <img src={NCimage} alt='project thumbnail' className='thumbnail' />
            <div className='text'>
               <div className='bold'>NightCrawler</div>
               <div className='language'>Vanilla Javascript and Ruby on Rails</div>
            </div>
            <div className='btn'>LEARN MORE</div>
         </div>
         <div id='SFB'>
            <img src={SFBimage} alt='project thumbnail' className='thumbnail' />
            <div className='text'>
               <div className='bold'>Simpsons Fantasy Basketball</div>
               <div className='language'>Ruby on Rails</div>
            </div>
            <div className='btn'>LEARN MORE</div>
         </div>
      </div>
   )

   renderJsProjects = () => (
      <div className='projects-disp js'>
         <div id='AA'>
            <img src={AAimage} alt='project thumbnail' className='thumbnail' />
            <div className='text'>
               <div className='bold'>AccessAbled</div>
               <div className='language'>React.js and Ruby on Rails</div>
            </div>
            <div className='btn'>LEARN MORE</div>
         </div>
         <div id='gympal'>
            <img src={GPimage} alt='project thumbnail' className='thumbnail' />
            <div className='text'>
               <div className='bold'>GymPal</div>
               <div className='language'>React.js and Ruby on Rails</div>
            </div>
            <div className='btn'>LEARN MORE</div>
         </div>
         <div id='NC'>
            <img src={NCimage} alt='project thumbnail' className='thumbnail' />
            <div className='text'>
               <div className='bold'>NightCrawler</div>
               <div className='language'>Vanilla Javascript and Ruby on Rails</div>
            </div>
            <div className='btn'>LEARN MORE</div>
         </div>
         <div id='VR'>
            <img src={VRimage} alt='project thumbnail' className='thumbnail' />
            <div className='text'>
               <div className='bold'>Voice Recognition</div>
               <div className='language'>Vanilla Javascript</div>
            </div>
            <div className='btn'>LEARN MORE</div>
         </div>
      </div>
   )

   renderCProjects = () => (
      <div className='projects-disp c++'>
         <div id='WI'>
            <img src={WIimage} alt='project thumbnail' className='thumbnail' />
            <div className='text'>
               <div className='bold'>Wheelchair Analysis</div>
               <div className='language'>Mechanical Engineering and C++</div>
            </div>
            <div className='btn'>LEARN MORE</div>
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
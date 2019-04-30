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
   }

   renderAllProjects = () => (
      <div className='projects-disp all'>
         <div id='AA'><img src={AAimage} alt='project thumbnail'/></div>
         <div id='gympal'><img src={GPimage} alt='project thumbnail' /></div>
         <div id='NC'><img src={NCimage} alt='project thumbnail' /></div>
         <div id='SFB'><img src={SFBimage} alt='project thumbnail' /></div>
         <div id='WI'><img src={WIimage} alt='project thumbnail' /></div>
         <div id='VR'><img src={VRimage} alt='project thumbnail' /></div>
      </div>
   )

   renderRubyProjects = () => (
      <div className='projects-disp ruby'>
         <div id='AA'><img src={AAimage} alt='project thumbnail' /></div>
         <div id='gympal'><img src={GPimage} alt='project thumbnail' /></div>
         <div id='NC'><img src={NCimage} alt='project thumbnail' /></div>
         <div id='SFB'><img src={SFBimage} alt='project thumbnail' /></div>
      </div>
   )

   renderJsProjects = () => (
      <div className='projects-disp js'>
         <div id='AA'><img src={AAimage} alt='project thumbnail' /></div>
         <div id='gympal'><img src={GPimage} alt='project thumbnail' /></div>
         <div id='NC'><img src={NCimage} alt='project thumbnail' /></div>
         <div id='VR'><img src={VRimage} alt='project thumbnail' /></div>
      </div>
   )

   renderCProjects = () => (
      <div className='projects-disp c++'>
         <div id='WI'><img src={WIimage} alt='project thumbnail' /></div>
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
                  <div className='all' onClick={this.changeDisplay}>ALL</div>
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
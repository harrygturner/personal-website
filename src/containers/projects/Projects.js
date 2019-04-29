import React, { Component } from 'react';
import './projects.css'

export default class Projects extends Component {

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
                  <div>ALL</div>
                  <div>RUBY / RAILS</div>
                  <div>JAVASCRIPT</div>
                  <div>C++</div>
                  <div></div>
               </div>
               <div className='projects-disp'>
               </div>
            </div>
         </div>
      )
   }

}
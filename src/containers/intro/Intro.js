import React, { Component } from 'react';
import AnimatedTyping from '../../components/AnimatedTyping'
import './intro.css'

export default class Intro extends Component {

   render() {
      return(
         <div id='intro' className='section'>
            <div id='particle-cont'>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
               <div className="particle"></div>
            </div>
            <div className='content'>
               <h1>Hello, my name is <span style={{ color: '#E8A87C' }}>Harry Turner</span>.</h1>
               <h1>
                  < AnimatedTyping />
               </h1>
               <div className='projects-link' 
                  onMouseEnter={this.props.handleViewProjectEnter} 
                  onMouseLeave={this.props.handleViewProjectLeave} 
               >
                  View my projects <i className="fas fa-arrow-right"></i>
               </div>
            </div>
         </div>
      )
   }

}
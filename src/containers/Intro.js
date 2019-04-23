import React, { Component } from 'react';
import AnimatedTyping from '../components/AnimatedTyping'
import '../intro.css'

export default class Intro extends Component {

   render() {
      return(
         <div id='intro' className='section'>
            <div>
               <h1>Hello, my name is Harry Turner.</h1>
               <h1>
                  < AnimatedTyping />
               </h1>
            </div>
         </div>
      )
   }

}
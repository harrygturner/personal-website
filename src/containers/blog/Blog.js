import React, { Component } from 'react';
import './blog.css';
import TTHimg from '../../images/TTHackers.png';
import EOKimg from '../../images/EOK.png';
import LTRimg from '../../images/LTR.png';
import RegexImg from '../../images/Regex.png'

export default class Blog extends Component {

   render() {
      return (
         <div id='blog' className='section'>
            <div className='header'>
               <h1>BLOG</h1>
               <hr />
            </div>
            <div className='blog-cont'>
               <div className='card'>
                  <div className='img'>
                     <img src={TTHimg} alt='Laptop being hacked' />
                  </div>
                  <div className='text-cont'>
                     <div className='header'>
                        TalkTalk For Hackers
                     </div>
                     <div className='date'>
                        JANUARY 21, 2019
                     </div>
                     <div className='content'>
                        We all remember TalkTalk don’t we? The broadband service child of Carphone Warehouse. The nuclear missile in Carphone’s Warehouse ploy...
                     </div>
                  </div>
               </div>
               <div className='card'>
                  <div className='img'>
                     <img src={EOKimg} alt='A microphone' />
                  </div>
                  <div className='text-cont'>
                     <div className='header'>
                        The End of the Keyboard
                     </div>
                     <div className='date'>
                        FEBURARY 21, 2019
                     </div>
                     <div className='content'>
                        For the last 40,800 years the human race has predominantly used their hands to put their thoughts and ideas on a canvas for the world to see...
                     </div>
                  </div>
               </div>
               <div className='card'>
                  <div className='img'>
                     <img src={LTRimg} alt='Laptop connecting to internet' />
                  </div>
                  <div className='text-cont'>
                     <div className='header'>
                        Localhost to Real World
                     </div>
                     <div className='date'>
                        MARCH 06, 2019
                     </div>
                     <div className='content'>
                        Eight weeks, 56 days, 1354 hours, that’s all it has been since I started my software engineering course at Flatiron School. It is...
                     </div>
                  </div>
               </div>
               <div className='card'>
                  <div className='img'>
                     <img src={RegexImg} alt='Old typewriter keyboard' />
                  </div>
                  <div className='text-cont'>
                     <div className='header'>
                        Regex: The Good, the Bad and the Basics
                     </div>
                     <div className='date'>
                        APRIL 03, 2019
                     </div>
                     <div className='content'>
                        Computers, being computers, are great at most things. They allow us to store and display a vast amount of information, they speedily connect...
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }

}
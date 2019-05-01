import React, { Component } from 'react';
import './blog.css'

export default class Blog extends Component {

   render() {
      return (
         <div id='blog' className='section'>
            <div className='header'>
               <h1>BLOG</h1>
               <hr />
            </div>
            <div className='blog-cont'>
               <div className='card'></div>
               <div className='card'></div>
               <div className='card'></div>
               <div className='card'></div>
            </div>
         </div>
      )
   }

}
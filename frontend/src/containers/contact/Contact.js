import React, { Component } from 'react';

import './contact.css'

export default class Contact extends Component {

   state = {
      name: '',
      email: '',
      message: ''
   }

   handleFormSubmission = e => {
      e.preventDefault();
      console.log('send email');
   }

   handleFormInput = e => {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   render() {
      return (
         <div id='contact' className='section'>
            <div className='traingle'></div>
            <div className='header'>
               <h1>CONTACT</h1>
               <hr />
            </div>
            <div className='personal-message'>
               Have a question or want to work together?
            </div>
            <form onSubmit={this.handleFormSubmission}>
               <div className='peronal-info'>
                  <input 
                     type='text' 
                     placeholder='NAME'
                     name='name'
                     value={this.state.name}
                     onChange={this.handleFormInput}
                     required
                  />
               </div>
               <div className='email'>
                  <input 
                     type='text' 
                     placeholder='ENTER EMAIL' 
                     name='email'
                     value={this.state.email}
                     onChange={this.handleFormInput}
                     required
                  />
               </div>
               <div className='message'>
                  <textarea  
                     placeholder='YOUR MESSAGE' 
                     name='message'
                     value={this.state.message}
                     onChange={this.handleFormInput}
                     rows='5' 
                     cols='30'
                     required
                  />
               </div>
               <div className='sub-btn'>
                  <input type='submit' value='SUBMIT' />
               </div>
            </form>
         </div>
      )
   }

}
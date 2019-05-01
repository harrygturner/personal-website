import React, { Component } from 'react';

export default class Contact extends Component {

   state = {
      formContent: {
         name: '',
         email: '',
         message: ''
      },
   }

   render() {
      return (
         <div id='contact' className='section'>
            <div className='header'>
               <h1>CONTACT</h1>
               <hr />
            </div>
            <form>
               <div className='peronal-info'>
                  <div className='label'>NAME:</div>
                  <input type='text' />
               </div>
               <div className='email'>
                  <div className='label'>EMAIL:</div>
                  <input type='text' />
               </div>
               <div className='message'>
                  <div className='label'>MESSAGE:</div>
                  <input type='textarea' />
               </div>
               <input type='submit' />
            </form>
         </div>
      )
   }

}
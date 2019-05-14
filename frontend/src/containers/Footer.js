import React from 'react';
import GitIcon from '../images/Github-icon.png';
import LnIcon from '../images/linkedin.png';
import MediumIcon from '../images/medium-icon.png';

const Footer = props => {
   return(
      <div id='footer'>
         <div className='links'>
            <div className='link'>
               <img src={GitIcon} alt='GitHub icon' />
            </div>
            <div className='link'>
               <img src={LnIcon} alt='LinkedIn icon' />
            </div>
            <div className='link'>
               <img src={MediumIcon} alt='Blog icon' />
            </div>
         </div>
         <div className='navigation'>
            <div>
               <i className="fas fa-angle-double-up"></i>
            </div>
         </div>
         <div className='copywrite'>
            HARRY TURNER @2019
         </div>
      </div>
   )
}

export default Footer
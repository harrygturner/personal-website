import React from 'react';
import './mask.css';
import Slider from './Slider';
import AboutProject from './AboutProject'

const ProjectInfo = props => {

   return(
      <div id='project-info' className='invisible stick'>
         <div className='mask'></div>
         <div className='modal'>
            < Slider />
            < AboutProject />
            <div className='exit' onClick={props.exitProjectView}>
               <i className="fas fa-times" />
            </div>
         </div>
      </div>
   )
   
}

export default ProjectInfo
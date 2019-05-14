import React from 'react'
import GitIcon from '../../images/Github-icon.png'

const AboutProject = props => {
   return (
      <div className='about'>
         <div className='header'>
            <div>
               <h1>AccessAbled</h1>
               <span>Making London accessable for everyone!</span>
            </div>
            <div className='github'>
               <img src={GitIcon} alt='GitHub icon' onClick={() => window.open('https://github.com/harrygturner/AccessAbled-frontend', '_blank')} />
            </div>
         </div>
         <div className='line'></div>
         <div className='content'>
            <p>AccessAbled makes London accessible to all members of society, including people with disabilities. Frontend written in React.js with vanilla CSS, no styling packages were imported, and backend written in Ruby on Rails.</p>
         </div>
      </div>
   )
}

export default AboutProject
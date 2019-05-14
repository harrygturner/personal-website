import React from 'react';

const NavBar = props => {

   return(
      <div id='navbar'>
         <div className="intro" onClick={props.handleSectionClick}>HOME</div>
         <div className="skills" onClick={props.handleSectionClick}>ABOUT</div>
         <div className="projects" onClick={props.handleSectionClick}>PROJECTS</div>
         <div className="blog" onClick={props.handleSectionClick}>BLOG</div>
         <div className="contact" onClick={props.handleSectionClick}>CONTACT</div>
      </div>
   )
}

export default NavBar
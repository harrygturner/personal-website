import React, { useEffect } from 'react';

const NavBar = props => {

   // useEffect(() => {
   //    const { sectionOnView } = props
   //    debugger
   // }, []);

   return(
      <div id='navbar'>
         <div className="intro">HOME</div>
         <div className="skills">ABOUT</div>
         <div className="projects">PROJECTS</div>
         <div className="blog">BLOG</div>
         <div className="contact">CONTACT</div>
      </div>
   )
}

export default NavBar
import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
   return (
      <div className="navBar">
         <NavLink to="/">Home</NavLink>
         <NavLink to="/projects">Projects</NavLink>
      </div>
   );
}

export default Navigation;

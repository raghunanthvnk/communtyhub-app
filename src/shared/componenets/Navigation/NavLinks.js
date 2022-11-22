import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
 // const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">
          Hub Category
        </NavLink>
      </li>
      <li>
        <NavLink to="/hubmaster">
          Hub Master
        </NavLink>
      </li>
      <li>
        <NavLink to="/uploadappointments">
          Upload Appointments
        </NavLink>
      </li>
      <li>
        <NavLink to="/users">
          Users
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

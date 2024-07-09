import React from 'react';
import './Navbar.scss';
import Logo from '../../Assets/Logo/Vengatesh Dayalan Logo-XX01.png';

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={Logo} alt="logo" className='vengatesh_dayalan_logo' />
      </div>
    </nav>
  );
}

export default Navbar;
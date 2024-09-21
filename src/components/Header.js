import { Navbar, NavbarBrand } from 'reactstrap';
import corm from '../app/assets/img/corm.png';

import React from 'react';

const Header = () => {
  return (
    <Navbar dark color='primary' sticky='top' expand='md'>
      <NavbarBrand href='/'>
        <img src={corm} alt='corm logo' />
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;

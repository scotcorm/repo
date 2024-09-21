import React from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import corm from './app/assets/img/corm.png';

function App() {
  return (
    <div className='App'>
      <Navbar dark color='primary' sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
            <img src={corm} alt='corm logo' />
          </NavbarBrand>
        </Container>
      </Navbar>
      Hello World
    </div>
  );
}

export default App;

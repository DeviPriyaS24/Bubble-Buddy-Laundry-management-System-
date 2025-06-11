import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
        <Navbar className="bg-primary shadow position-sticky top-0" style={{zIndex:"5"}}>
        <Container>
          <Navbar.Brand className='text-light fw-bolder fs-4'>
            <Link to='/' style={{textDecoration:"none"}} className='text-light'><i class="fa-solid fa-shirt"></i>{' '}
            Bubble Buddy</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
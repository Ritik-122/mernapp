import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Navbarr() {
  
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
 

  return (
    <>
     <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
        <MDBNavbarBrand >Tasty Treats</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav classNameName='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem classNameName='active'>
               <Link to='/'><Button variant="outline-light" size="sm" className="mx-2 my-2">
                  Home
                </Button></Link> 
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to='/login'><Button variant="outline-light" size="sm" className="mx-2 my-2">
                 Login
                </Button></Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to='/createuser'>  <Button variant="outline-light" size="sm" className="mx-2 my-2">
                  SignUp
                </Button>
              </Link>
              </MDBNavbarItem>
              
              
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
 

      

      
    </>
  );
}
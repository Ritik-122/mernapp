import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Navbarr() {
  
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
 

  return (
    <>
     <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
         <Link to='/'><MDBNavbarBrand >Tasty Treats</MDBNavbarBrand></Link> 
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
               <Link to='/'><MDBNavbarLink aria-current='page'>
                  Home
                </MDBNavbarLink></Link> 
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to='/login'><MDBNavbarLink >Login</MDBNavbarLink></Link>
              </MDBNavbarItem>
              
              
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
 

      

      
    </>
  );
}
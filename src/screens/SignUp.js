import React, { useRef } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon
  
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";


export default function SignUp() {
    const name=useRef('')
const email=useRef('')
const password=useRef('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    
   const userDetails={
    name:name.current.value,
    email:email.current.value,
    password:password.current.value,
    location:'Delhi'
    

   }
  

    const res = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
      
    });
    const data=await res.json();
    if(!data.success){
     alert('Enter valid credentials');
    }
   };

  return (
    <>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <form onSubmit={handleSubmit}>
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>

                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />

                    <MDBInput
                      label="Your Name"
                      id="form1"
                      type="text"
                      className="w-100"
                      ref={name}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput label="Your Email" id="form2" type="email" ref={email} />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput label="Password" id="form3" type="password" ref={password}/>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size="lg" />
                    <MDBInput
                      label="Repeat your password"
                      id="form4"
                      type="password"
                    />
                  </div>

                  <MDBBtn className="mb-4" size="lg" type="submit">
                    Register
                  </MDBBtn>

                  <Link
                      to="/login"
                      style={{ color: "white", textDecoration: "none" }}
                    >   <MDBBtn className="mb-4" size="sm">
                    
                      {" "}
                      Already User ? login
                   
                  </MDBBtn>
                  </Link>
                </MDBCol>

                <MDBCol
                  md="10"
                  lg="6"
                  className="order-1 order-lg-2 d-flex align-items-center"
                >
                  <MDBCardImage
                    src="https://play-lh.googleusercontent.com/a-BnIrgc0r-7ci0Zl9mf9pLQJP-kjfm1pudhYqCz3zip2MJ2FuBb8nb6JRDLUwcGhRE=w600-h300-pc0xffffff-pd"
                    fluid
                  />
                </MDBCol>
              </MDBRow>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

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
import { Link,useNavigate } from "react-router-dom";

export default function Login() {
 let navigate=useNavigate()
  const email=useRef('')
  const password=useRef('')

const handleSubmit=async(e)=>{

  e.preventDefault();

  const credentials={
    email:email.current.value,
    password:password.current.value
  }
  const res=await fetch('http://localhost:5000/api/loginuser',{
    method:'POST',
    body:JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },

  })
  const json=await res.json()
  if(!json.success){
    alert("Enter valid credentials");
  }
  
  if(json.success){
    navigate('/')
  }
  
  

}
  return (
    <> <MDBContainer fluid>
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
                Login
              </p>

             

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
                Login
              </MDBBtn>
              <Link
                  to="/createuser"
                  style={{ color: "white", textDecoration: "none" }}
                >
              <MDBBtn className="mb-4" size="sm">
                
                  {" "}
                  New User ? SignUp
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
  )
}

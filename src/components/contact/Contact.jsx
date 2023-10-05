
import React  from 'react'
import { Container } from 'react-bootstrap';

const Contact = () => {

  return (
    
      <Container style={{ width: "1200px" }}>

  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
  />
  <link href="./style.css" rel="stylesheet" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
  />
  <title >Contact Form</title>
  <div className="container" style={{position:'absolute',marginTop:'10%'}}>
    <form >
    <div className="row">
      <div className="col-md-7">
        <h4>Get in touch</h4>
        <div className="mb-3 d-inline w-25">
          <label htmlFor="formGroupExampleInput" className="form-label">
            First Name
          </label> <input 
          name="firstname"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder=" First Name"
            // value={userData.firstname}
            //  onChange={postUserData}
          />

           <label htmlFor="formGroupExampleInput" className="form-label">
            Last Name
          </label>
          <input
          name='lastname'
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Last Name"
            // value={userData.lastname}
            //  onChange={postUserData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Email
          </label>
          <input
          name='email'
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter your email"
            // value={userData.email}
            //  onChange={postUserData}
          />
          </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            phone
          </label>
          <input
          name='phone'
            type="number"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter your phone"
            // value={userData.phone}
            //  onChange={postUserData}
          />
        </div>
       
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
          name='message'
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            defaultValue={""}
            //    value={userData.firstname}
            //  onChange={postUserData}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </div>
      <div className="col-md-5 ">
        <h4>Contact us</h4>
        <hr />
        <div className="mt-4 " style={{ background: "#E8D3FC" }}>
          <div className="d-flex">
            <i className="bi bi-geo-alt-fill" />
            <p>Address: Sector 21 , Noida , Uttar Pradesh</p>
          </div>
          <hr />
          <div className="d-flex">
            <i className="bi bi-telephone-fill" />
            <p>Contact :- +919977441155</p>
          </div>
          <hr />
          <div className="d-flex">
            <i className="bi bi-envelope-fill" />
            <p>Email:- info@stoffcare.in</p>
          </div>
          <hr />
          <div className="d-flex">
            <i className="bi bi-browser-chrome" />
            <p>Website: www.contact.com</p>
          </div>
          <hr />
        </div>
      </div>
    </div>
    </form>
  </div>
 
    
    
    
</Container>

  )
}

export default Contact ;
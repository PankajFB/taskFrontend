import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Form, Alert ,Container} from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "./UseAuthContext";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const [userId,setUserId]=useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await logIn(email, password);
//       navigate("/myProfile");
//     } catch (err) {
//       setError(err.message);
//     }
//   };
const handleSubmit=async()=>{

    try {
        fetch('http://localhost:3007/login',{
            method:'POST',
            headers:{
                'content-type':'application/json'
              },
            body:JSON.stringify({
                email:email,
                password:password
            })
        })
        .then(response=>{
            response.json();
        })
        .then(result=>{
        })
    } catch (error) {
        console.log(error);
    }   
}

// const fetchuser=async()=>{
//     const response= await fetch('http://localhost:3007/login');
//     var data= await response.json();
//     setUserId(data[0].userId);
//     console.log("userId",userId);
//     navigate(`/${userId}`)
// }
// useEffect(()=>{

//     fetchuser();
// },[])

const redirect=async()=>{
   
        const response= await fetch('http://localhost:3007/matched') 
        const data=await response.json();

        if(data.matched===true){
          navigate('/Home');
        }
}

useEffect(()=>{
    redirect();
})

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Container className="p-5 d-flex mt- box " style ={{"height": "650px" ,"width" : "500px" , "border":"2px  solid #F9F6EE" , "borderRadius" :"15px", "backgroundColor":"FAF9F6", "marginTop":"0px"}}>
      <div className="p-5 box   align-self-centre mt-2" style={{"width" : "400px" , "height": "700px"}}>
        <h2 className="mt-1"  style={{ "marginLeft":"75px"}}> Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2" style={{ "marginLeft":"5px" , "borderRadius":"5px", "width" : 
               "235px" , "height": "42px"}}>
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
            style={{ "marginLeft":"20px" , "borderRadius":"5px", "width" : 
               "235px" , "height": "42px"}}
          />
        </div>
        <Link to="/phonesignup">
          <div className="d-grid gap-2 mt-3">
            <Button variant="success" type="Submit">
              Sign in with Phone
            </Button>
          </div>
        </Link>
        <div className="p-1 box mt-5 text-center"  style={{ "marginRight":"25px"}} >
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
      </div>
      
    </Container>
    </>
  );
};

export default Login;





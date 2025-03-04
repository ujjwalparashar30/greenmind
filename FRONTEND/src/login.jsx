import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Header from "./header";



function renderContent(isFocused, handleFocus, handleBlur) {
  const navigate= useNavigate();
    function loginwithgoogle(){
        window.open("http://localhost:4040/auth/google/callback", "_self");
    }
  const [SignupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });

  
  console.log(SignupData);
  function handlechange(e) {
    setSignupData({
      ...SignupData,
      [e.target.name]: e.target.value,
    });
  }

    async function submitdata(e){
        e.preventDefault()

        axios
         .post("http://localhost:4040/signup", {
            name: SignupData.username,
            email: SignupData.email,
            password: SignupData.password,
     
         })
         .then((res) => {
            if(res.data==="created"){
              navigate( "/home");
            }
            else{
              navigate( "/login");
              alert("user already exists");
            }
         
       
         
          })
        
        
          

      }
    

   

  

  

  return (
    <>
    <Header/>
    <div className="main">
    
      {/* <input type="checkbox" id="chk" aria-hidden="true"></input> */}
      <div className="signup">
        <form >
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
         <input
            type="text"
            name="username"
            value={SignupData.username}
            onChange={handlechange}
            placeholder="User name"
          />
          <input
            type="email"
            name="email"
            value={SignupData.email}
            onChange={handlechange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={SignupData.password}
            onChange={handlechange}
            placeholder="Password"
          />
          <button onClick={submitdata}>  Signup</button>
        </form>
        <button onClick={loginwithgoogle}>login with google</button>
      </div>
    
      {/* <div className="login">
        <form>
          <label htmlFor="chk" aria-hidden="true" id="login">
            Login
          </label>
          <input type="email" name="email" placeholder="Email" required="" />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
          />
          <button>Login</button>
        </form>
      </div> */}
    </div>
    </>
  );
}

const AppWrapper = () => {
  // State to track if the input is focused
  const [isFocused, setIsFocused] = useState(false);

  // Function to handle the input focus event
  const handleFocus = () => {
    setIsFocused(true);
    customFunction(); // Calling the custom function
  };

  // Function to handle the input blur event
  const handleBlur = () => {
    setIsFocused(false);
  };

  // Returning the component
  return renderContent(isFocused, handleFocus, handleBlur);
}

export default AppWrapper
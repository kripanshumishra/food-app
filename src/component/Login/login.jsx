import  { useState } from "react";
import "./login.css";
import Navbar from "../Header/navbar";
import { Navigate, useNavigate } from "react-router-dom";
const credentialUrl="https://cherry-cake-46896.herokuapp.com/api/auth/login"
export default()=>{
  // React States
  const [errorMessages, setErrorMessages] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [credential,setCredential] = useState({})
  const [ disabled,setDisabled ] =useState(false)
  const navigate= useNavigate()
  const stateUpdatePass = (event)=>{
   setCredential(prevState => { // Object.assign would also work
    return {...prevState, password:event.target.value}
    
  })
  // console.log(credential,">>>")
}
const stateUpdateEmail = (event)=>{
  setCredential(prevState => { // Object.assign would also work
   return {...prevState, email:event.target.value}
   
 })
}
  
  const handleSubmit = (event) => {
   console.log(credential)
   setDisabled(true)
    //Prevent page reload
    event.preventDefault();

    // Find user login info
    fetch(credentialUrl,{
      method:"POST",
      headers:{
        'accept':'application/json',
        'Content-Type':'application/json'
    },
    body:JSON.stringify(credential)
        })
      .then(data=>data.json())
      .then(data=>{
        setDisabled(false)
        // console.log("daata came")
        console.log("data",data,">>>>")
        if(data.auth&&data.auth === true){
          sessionStorage.setItem('ltk', data.token)
          sessionStorage.setItem('user',JSON.stringify(data.userInfo))
          sessionStorage.setItem('isLogin',true)
          setIsSubmitted(true);
        }
        else{
          console.log('this side ')
          setErrorMessages(data.msg);
        }
      })
      .catch((error) => {
        console.log(error)
      });
  };

  // Generate JSX code for error message
  const renderErrorMessage = () =>{
      return <div className="error">{errorMessages}</div>
     }

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form >
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname"required onChange={stateUpdateEmail} />
          {/* {renderErrorMessage()} */}
          <p>username: <b>kri@gmail.com</b></p>
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required onChange={stateUpdatePass}/>
          <p>password: <b>hash</b></p>
          {renderErrorMessage()}
        </div>
        <div className="button-container">
          <span style={{display:!disabled?"none":""}}>loading</span>
          <button className="submit-btn" onClick={handleSubmit}>submit</button>
        </div>
      </form>
    </div>
  );

  return (
    <>
    <Navbar/>
    <div className="app-form-outer-container">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? navigate("/")  : renderForm}
        <div>
        
       
      </div>
      </div>
      
    </div>
    </>
  );
}
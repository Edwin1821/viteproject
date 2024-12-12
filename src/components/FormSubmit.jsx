import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormSubmit() {

  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [city,setCity] = useState("");
  const [phone,setPhone] = useState("");
  const [loading,setLocation] = useState(false);
  
  const navigate = useNavigate();

  async function sendUserData() {
    setLocation(true);
    try{
      const response = await axios.post('https://6746d44b38c8741641d451f9.mockapi.io/user',
        {
          username,
          email,
          city,
          phone
        }
      );
      console.log(response.data);
    }catch(e){
      console.log(e)
    }finally{
      setLocation(false);
      navigate("/read")
    }      
  };

  return (
    <div className="form-conatiner">
       <h1>Create Form to submit data</h1>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" placeholder="username" name="name" onChange={(event)=>{setUsername(event.target.value)}}/>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="email" name="email" onChange={(event)=>{setEmail(event.target.value)}}/>
        </div>
        <div className="form-group">
          <label>City:</label>
          <input type="text" placeholder="city" name="city" onChange={(event)=>{setCity(event.target.value)}}/>
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="text" placeholder="mobile number" name="phone" onChange={(event)=>{setPhone(event.target.value)}}/>
        </div>
        <button className="submit-btn" type="button" onClick={()=>{sendUserData()}}>Send Data</button>
        {
           loading && <p style={{color:'white'}}>Please wait...</p>
        }
      </form>
    </div>
  );
}

export default FormSubmit;

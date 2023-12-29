import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import "./Signup.css";
function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Signup = async () => {
    try{
      if (!(userName && email && password)) {
        alert("all Feilds are required");
      }
      const response = await axios.post("/api/v1/signups", {
        userName,
        email,
        password,
      });
     if(response){
      window.location.href="/login"
     }
    
    }
    catch(err){
      console.log(err.message)
    }
   
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="Signup-card mt-5">
          <div className="card-header">
            <div className="log">Signup</div>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                required=""
                name="username"
                id="username"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Email:</label>
              <input
                required=""
                name="email"
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                required=""
                name="password"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button
                onClick={Signup}
                className="btn btn-primary"
                type="button"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

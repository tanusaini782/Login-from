import React,{useState} from "react"; 

import './App.css';

function App() {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [allEntry, setAllEntry] = useState([""]);
  
  const SubmitForm = (e) => {
    e.preventDefault();
    
    const newEntry = {email:email, password:password};
    
    setAllEntry([ allEntry, newEntry]);
    console.log(allEntry);
    setEmail("");
    setPassword("");
  }
   
  return (
    <>
    
    
    <div className="form">
       <form action onSubmit = {SubmitForm}>
    

    <div className="app">
      <div className=" App-header" >
      
    <div className="input-container" >
      <label htmlfor='email'>Email </label>
      <input type="text" name="email" id="email"   value={email}
        onChange={(e) =>setEmail(e.target.value)}
        required />
    </div>

    <div className="input-container">
      <label htmlfor='password'>Password </label>
      <input type="text" name="password" id="password"  value={password}
       onChange={(e) =>setPassword(e.target.value)}
       required /></div><br></br>
      
        <button className="eee" type="submit">Login</button><br />
      <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
    
    <button type="button"  className="cancelbtn" onclick="document.getElementById('id01').style.display='none'">Cancel</button>
    <span class="password">Forgot <a href="#">password?</a></span>
    
 

    </div>
    </div>
   </form>
   </div>
   <div>
    {
    allEntry.map((curElem)=>{
     const {  email, password} =curElem;
      return(
      
        <div className="show"  key = {curElem.id}>
          <p> {email}</p>
          <p>{ password}</p>
          </div>
      )
      
    })
  }
    </div>
   </>
  
 

  );
}

export default App;

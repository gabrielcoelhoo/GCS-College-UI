import React, {useState} from 'react';
import '../styles/style.css'
import { useHistory, withRouter } from "react-router-dom";


const Login = () => {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");  
  const history = useHistory();
  let token = '';

  async function userLogin() {
    await fetch(`http://localhost:8080/api/userLogin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        }),
    })
        .then((response) => response.json())
        .then(responseJson => {
          token = responseJson.token;
          if(token){
            window.location.href = 'CoursesForm';
          }
        
        })
}

return (
	<div className="centerContent">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p className="fieldName">username</p>
          <input className="inputUser" type="username" required onChange={e => setUsername(e.target.value)}/>
        </label>
        <label>
          <p className="fieldName" >Password</p>
          <input className="inputUser" type="password" required onChange={e => setPassword(e.target.value)}/>
        </label>
        <div className="spaceUP20PX">
          <button className="btnSubmit" type="submit" 
          onClick={userLogin}>Submit</button>
        </div>
        <div className="spaceUP20PX">
          <button 
          className="btnSubmit"
          type="submit" 
        onClick={() => history.push("studentForm")}
          >create an account</button>
        </div>
      </form>
    </div>
);
};

export default withRouter(Login);

//set params in Json
// Add authentication on user credentials - high priority
//auth will be left for the medium of project

//create a method to move from one screen to another - done
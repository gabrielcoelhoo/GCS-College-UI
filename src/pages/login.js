import React, {useState} from 'react';
import '../styles/style.css'

const Login = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

  function userLogin() {
    console.log(email, password)
        fetch(`http://localhost:8080/api/userDetails?email=${email}&password=${password}`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then(responseJson => {
                console.log(responseJson);
            })
}

return (
	<div className="centerContent">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p className="fieldName">Email</p>
          <input className="inputUser" type="text" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <p className="fieldName" >Password</p>
          <input className="inputUser" type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div className="spaceUP20PX">
          <button className="btnSubmit" type="submit" 
          onClick={userLogin}>Submit</button>
        </div>
      </form>
    </div>
);
};

export default Login;

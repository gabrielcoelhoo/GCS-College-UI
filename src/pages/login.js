import React, {useState} from 'react';
//import '...\styles\Login.css'

const Login = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
	<div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
	</div>
);
};

export default Login;

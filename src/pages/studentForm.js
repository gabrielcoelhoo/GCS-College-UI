import React, {useState} from 'react';
import Select from 'react-select'

const StudentForm = () => {

	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [country, setCountry] = useState("");
	const [comments, setComments] = useState("");

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
      <h1>Student form</h1>
      <form>
        <label>
          <p>Name</p>
          <input type="text" onChange={e => setName(e.target.value)}/>
        </label>
		<label>
          <p>Address</p>
          <input type="text" onChange={e => setAddress(e.target.value)}/>
        </label>
		<label>
          <p>email</p>
          <input type="text" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <p>phone</p>
          <input type="text" onChange={e => setPhone(e.target.value)}/>
        </label>
		<label>
          <p>country</p>
          <input type="text" onChange={e => setCountry(e.target.value)}/>
        </label>
		<label>
          <p>comments</p>
          <input type="text" onChange={e => setComments(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
	</div>
);
};

export default StudentForm;

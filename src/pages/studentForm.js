import React, {useState} from 'react';
import '../styles/style.css'

const StudentForm = () => {

	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [country, setCountry] = useState("");
	const [comments, setComments] = useState("");

return (
<div className="centerContent">
      <h1>Student form</h1>
      <form>
        <label>
          <p className='fieldName'>Name</p>
          <input className='inputUser' type="text" onChange={e => setName(e.target.value)}/>
        </label>
		<label>
          <p className='fieldName'>Address</p>
          <input  className='inputUser' type="text" onChange={e => setAddress(e.target.value)}/>
        </label>
		<label>
          <p className='fieldName'>Email</p>
          <input className='inputUser' type="text" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <p className='fieldName'>Phone</p>
          <input className='inputUser' type="text" onChange={e => setPhone(e.target.value)}/>
        </label>
		<label>
          <p className='fieldName'>Country</p>
          <input className='inputUser' type="text" onChange={e => setCountry(e.target.value)}/>
        </label>
		<label>
          <p className='fieldName'>Comments</p>
          <input className='commentsInput' type="text" onChange={e => setComments(e.target.value)}/>
        </label>
        <div className='spaceUP20PX'>
          <button className='btnSubmit' type="submit">Submit</button>
        </div>
      </form>
    </div>
);
};

export default StudentForm;


//comments section just type in one line in UI
//should break when reaches the end of a container 
//made for it
//need to be fixed - priority low
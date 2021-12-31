import React, {useState} from 'react';
import "../styles/style.css";

const StudentForm = () => {

	const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const [country, setCountry] = useState("");
	const [comments, setComments] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmation, setConfirmation] = useState("");

  function submitStudent() {
  fetch(`http://localhost:8080/api/students/submitStudent`, {
			method: 'POST',
			headers: {
    				"Content-Type": "application/json",
     		 },
     		 body: JSON.stringify({ 
				"name": name, 
        "surname": surname,
				"address": address, 
        "phoneNumber": phone, 
				"studentComments": comments,
				"country": country,
        "password": password,
        "email": email
			 }),
		})
			.then((response) => response.json())
			.then(responseJson => {
				console.log(responseJson);
			})
    }
	

return (
<div className="centerContent">
      <h1>Student form</h1>
      <form>
        <label>
          <p className='fieldName'>Name</p>
          <input className='inputUser' type="text" required onChange={e => setName(e.target.value)}/>
        </label>
        <label>
          <p className='fieldName'>Surname</p>
          <input className='inputUser' type="text" required onChange={e => setSurname(e.target.value)}/>
        </label>
		<label>
          <p className='fieldName'>Address</p>
          <input  className='inputUser' type="text" required onChange={e => setAddress(e.target.value)}/>
        </label>
        <label>
                    <p className='fieldName'>Email</p>
                    <input className='inputUser' type="email" required onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p className='fieldName'>Password</p>
                    <input className='inputUser' type="password" required onChange={e => setPassword(e.target.value)} />
                </label>
                <label>
                    <p className='fieldName'>Confirm Password</p>
                    <input className='inputUser' type="password" required onChange={e => setConfirmation(e.target.value)} />
                </label>
        <label>
          <p className='fieldName'>Phone</p>
          <input className='inputUser' type="text" required onChange={e => setPhone(e.target.value)}/>
        </label>
		<label>
          <p className='fieldName'>Country</p>
          <input className='inputUser' type="text" required onChange={e => setCountry(e.target.value)}/>
        </label>
		<label>
          <p className='fieldName'>Comments</p>
          <textarea className='commentsInput' type="text" required onChange={e => setComments(e.target.value)}></textarea>
        </label>
        <div className='spaceUP20PX'>
          <button 
            onClick={submitStudent}
            className='btnSubmit' 
            type="submit">Submit</button>
        </div>
      </form>
    </div>
);
};

export default StudentForm;


//comments section just type in one line in UI - done
//should break when reaches the end of a container  - done 

//maybe I split this screen into two due to the number of parameters

// //function goToLoginForm() {
//   history.push("LoginForm");
// }

//comments section just type in one line in UI - done
//should break when reaches the end of a container  - done

//maybe I split this screen into two due to the number of parameters - doing

//I dont think i need the confirmation password to the back part
//coz I can evaluate this value in the front end

//verification of the inout in the front end is working
//create a function to verify before send data
//https://stackoverflow.com/questions/41296668/reactjs-form-input-validation


//maybe add minlength and maxlength
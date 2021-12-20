import React, {useState} from 'react';
import '../styles/style.css'

const StudentForm = () => {

	const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const [country, setCountry] = useState("");
	const [comments, setComments] = useState("");

  function submitStudent() {
		console.log(name, address, comments, phone)
		fetch(`http://localhost:8080/api/submitStudent`, {
			method: 'POST',
			headers: {
    				"Content-Type": "application/json",
     		 },
     		 body: JSON.stringify({ 
				"name": name, 
        "surname": surname,
				"address": address, 
        "phone": phone, 
				"comments": comments,
				"country": country
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
          <input className='inputUser' type="text" onChange={e => setName(e.target.value)}/>
        </label>
        <label>
          <p className='fieldName'>Surname</p>
          <input className='inputUser' type="text" onChange={e => setSurname(e.target.value)}/>
        </label>
		<label>
          <p className='fieldName'>Address</p>
          <input  className='inputUser' type="text" onChange={e => setAddress(e.target.value)}/>
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
          <textarea className='commentsInput' type="text" onChange={e => setComments(e.target.value)}></textarea>
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


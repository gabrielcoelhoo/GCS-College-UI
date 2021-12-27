import React, { useState } from 'react';
import '../styles/style.css'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Details = () => {

	const [accomodation, setAccomodation] = useState("");
	const [transfer, setTransfer] = useState("");
	const [comments, setComments] = useState("");

	function submitDetails() {
		if(accomodation !== null){
		fetch(`http://localhost:8080/api/students/submitDetails`, {
			method: 'POST',
			headers: {
    				"Content-Type": "application/json",
     		 },
     		 body: JSON.stringify({ 
				"accomodation": accomodation, 
				"transfer": transfer, 
				"comments": comments

			 }),
		})
			.then((response) => response.json())
			.then(responseJson => {
				console.log(responseJson);
			})
		}else{
			alert("sasasa");
		}
	}

//request body to get this json I am building up
//https://stackabuse.com/get-http-post-body-in-spring/
//https://dev.to/scottshipp/parsing-json-in-spring-boot-part-1-513

	return (
		<div className="centerContent">
			<h1>Course form</h1>
			<form>
				<label>
					<p className='fieldName' >Accomodation in weeks</p>
					<select  
					className="inputUser" 
					value={accomodation} 
					required 
					onChange={e => setAccomodation(e.target.value)}>
						<option></option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
					</select>
				</label>
				<label>
					<p className='fieldName' >Transfer from Airport</p>
					<select 
					className="inputUser" 
					value={transfer} 
					required 
					onChange={e => setTransfer(e.target.value)}>
						<option></option>
						<option>yes</option>
						<option>no</option>
					</select>
				</label>
				<label>
					<p className='fieldName' >Comments</p>
					<textarea 
					className='commentsInput' 
					type="text" 
					required onChange={e => setComments(e.target.value)}></textarea>
				</label>
				<div className='spaceUP20PX'>
					<button
						onClick={submitDetails}
						className='btnSubmit'
						type="submit"
					>Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Details;


//transfer input will be changed to date format - done
//priority high/ medium

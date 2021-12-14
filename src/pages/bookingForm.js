import React, { useState } from 'react';
import '../styles/style.css'


const BookingForm = () => {

	const [englishCourse, setEnglishCourse] = useState("");
	const [accomodation, setAccomodation] = useState("");
	const [transfer, setTransfer] = useState("");
	const [comments, setComments] = useState("");

	function submitBooking() {
		console.log(englishCourse, accomodation, transfer, comments)
		fetch(`http://localhost:8080/api/bookingDetails?englishCourse=${englishCourse}
		&accomodation=${accomodation}&transfer=${transfer}&comments=${comments}`, {
			method: 'GET',
		})
			.then((response) => response.json())
			.then(responseJson => {
				console.log(responseJson);
			})
	}

	return (
		<div className="centerContent">
			<h1>Booking form</h1>
			<form>
				<label>
					<p className='fieldName' >English Course</p>
					<select  className="inputUser" value={englishCourse} onChange={e => setEnglishCourse(e.target.value)}>
						<option></option>
						<option>elementary</option>
						<option>beginner</option>
						<option>intermediate</option>
						<option>advanced</option>
					</select>
				</label>
				<label>
					<p className='fieldName' >Accomodation in weeks</p>
					<select  className="inputUser" value={accomodation} onChange={e => setAccomodation(e.target.value)}>
						<option></option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
					</select>
				</label>
				<label>
					<p className='fieldName' >Transfer from Airport</p>
					<select className="inputUser" value={transfer} onChange={e => setTransfer(e.target.value)}>
						<option></option>
						<option>yes</option>
						<option>no</option>
					</select>
				</label>
				<label>
					<p className='fieldName' >Comments</p>
					<input className='commentsInput' type="text" onChange={e => setComments(e.target.value)} />
				</label>
				<div className='spaceUP20PX'>
					<button
						onClick={submitBooking}
						className='btnSubmit'
						type="submit"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default BookingForm;


//transfer input will be changed to date format
//priority high/ medium

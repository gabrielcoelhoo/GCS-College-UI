import React, { useState } from 'react';
import '../styles/style.css'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const CoursesForm = () => {

	const [level, setLevel] = useState("");
	const [courseStart, setCourseStart] = useState(new Date());
	const [courseEnd, setCourseEnd] = useState(new Date());
	const [period, setPeriod] = useState("");
	
	function submitCourse() {
		fetch(`http://localhost:8080/api/submitCourse`, {
			method: 'POST',
			headers: {
    				"Content-Type": "application/json",
     		 },
     		 body: JSON.stringify({ 
				"level": level, 
				"courseStart": courseStart,
				"courseEnd": courseEnd,
				"period": period
			 }),
		})
			.then((response) => response.json())
			.then(responseJson => {
				console.log(responseJson);
			})
	}

//request body to get this json I am building up
//https://stackabuse.com/get-http-post-body-in-spring/
//https://dev.to/scottshipp/parsing-json-in-spring-boot-part-1-513

	return (
		<div className="centerContent">
			<h1>Course form</h1>
			<form>
				<label>
					<p className='fieldName' >English Course</p>
					<select  className="inputUser" value={level} onChange={e => setLevel(e.target.value)}>
						<option></option>
						<option>elementary</option>
						<option>beginner</option>
						<option>intermediate</option>
						<option>advanced</option>
					</select>
					</label>
					<label>
				<p className='fieldName' >Start of the course</p>
				<DatePicker 
				className="inputUser"
				selected={courseStart} 
				onChange={(date) => setCourseStart(date)} />
				</label>
				<label>
				<p className='fieldName' >End of the course</p>
				<DatePicker 
				className="inputUser"
				selected={courseEnd} 
				onChange={(date) => setCourseEnd(date)} />
				</label>
				<label>
					<p className='fieldName' >Course period</p>
					<select  className="inputUser" value={period} onChange={e => setPeriod(e.target.value)}>
						<option></option>
						<option>Morning </option>
						<option>Afternoon</option>
					</select>
				</label>
				<div className='spaceUP20PX'>
					<button
						onClick={submitCourse}
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

export default CoursesForm
;


//transfer input will be changed to date format - done
//priority high/ medium

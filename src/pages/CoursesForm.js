import React, { useState } from 'react';
import '../styles/style.css'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const CoursesForm = () => {

	const [level, setLevel] = useState("");
	const [courseStart, setCourseStart] = useState(new Date());
	const [courseEnd, setCourseEnd] = useState(new Date());
	const [period, setPeriod] = useState("");
	const [vacancies, setVacancies] = useState("");

	
	function submitCourse() {
		fetch(`http://localhost:8080/api/students/submitCourse`, {
			method: 'POST',
			headers: {
    				"Content-Type": "application/json",
     		 },
     		 body: JSON.stringify({ 
				"level": level, 
				"courseStart": courseStart,
				"courseEnd": courseEnd,
				"period": period,
				"vacancies":vacancies
			 }),
		})
			.then((response) => response.json())
			.then(responseJson => {
				console.log(responseJson);
			})
		}

// 	function check(level, courseStart , courseEnd, period) {
// 		if(level !== null && courseStart !== null && courseEnd !== null && period !== null){
// 			submitCourse();
// 	}else{
// 		alert("fields are not filled properly");
// 	}
// }

//request body to get this json I am building up
//https://stackabuse.com/get-http-post-body-in-spring/
//https://dev.to/scottshipp/parsing-json-in-spring-boot-part-1-513

	return (
		<div className="centerContent">
			<h1>Course form</h1>
			<form>
				<label>
					<p className='fieldName' >English Course</p>
					<select  
					required
					className="inputUser" 
					value={level} 
					onChange={e => setLevel(e.target.value)}>
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
				required
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
					<select  
					className="inputUser" 
					value={period} 
					onChange={e => setPeriod(e.target.value)}>
						<option></option>
						<option>Morning </option>
						<option>Afternoon</option>
					</select>
				</label>
				<label>
					<p className='fieldName' >vacancies</p>
					<select  
					className="inputUser" 
					value={vacancies} 
					onChange={e => setVacancies(e.target.value)}>
						<option></option>
						<option>5</option>
						<option>10</option>
						<option>15</option>
					</select>
				</label>
				<div className='spaceUP20PX'>
					<button
						onClick={submitCourse}
						className='btnSubmit'
						type="submit"
					>Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default CoursesForm;


//transfer input will be changed to date format - done
//priority high/ medium

import React, { useState, Fragment, useEffect  } from "react";
import "../styles/Course.css";

import ReadOnlyRow from "../components/Navbar/ReadOnlyRow";
import EditableRow from "../components/Navbar/EditableRow";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Courseschanges = () => {

	const [courses, setCourses] = useState([])

	const [level, setLevel] = useState("");
	const [courseStart, setCourseStart] = useState(new Date());
	const [courseEnd, setCourseEnd] = useState(new Date());
	const [period, setPeriod] = useState("");
	const [vacancies, setVacancies] = useState("");

	
	function submitCourse() {
		fetch(`http://localhost:8080/api/courses/submitCourse`, {
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

	useEffect(() => {
		fetch("http://localhost:8080/api/courses/all")
			.then(res => res.json())
			.then((result) => {
				console.log(result);
				setCourses(result);
			}
			)
	}, [])

	// {courses.map(course=>(
    //     <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={course.id}>
    //      Id:{course.id}<br/>
    //      coursetart:{course.courseStart}<br/>
    //      courseEnd:{course.courseEnd}<br/>
	// 	 level:{course.level}<br/>
	// 	 period:{course.period}<br/>
	// 	 vacancies:{course.vacancies}
    //     </Paper>

	//follow this new tutorial
	//https://javascript.plainenglish.io/lets-build-a-crud-website-with-react-and-an-external-api-157d126f3cf2
  return (
    <div className="app-container">
		<table>
			<thead>
				<tr>
					<th>id</th>
					<th>coursestart</th>
					<th>courseEnd</th>
					<th>level</th>
					<th>period</th>
					<th>vacancies</th>
				</tr>
			</thead>
			<tbody>
			{courses.map(course=>( 
			 <tr>
			 <td>{course.id}</td>
			 <td>{course.courseStart}</td>
			 <td>{course.courseEnd}</td>
			 <td>{course.level}</td>
			 <td>{course.period}</td>
			 <td>{course.vacancies}</td>
		 </tr>
			))}
			</tbody>
		</table>
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

export default Courseschanges;
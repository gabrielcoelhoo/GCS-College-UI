import React, { useState } from 'react';
import '../styles/style.css'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Paper, Button } from '@material-ui/core';


const CourseChanges = () => {

	const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }

	const [course, setCourse] = useState([])
	const [id, setId] = useState("")
	const [text, setText] = useState("")



	// function getById() {
	// 	fetch(`http://localhost:8080/api/courses/getById/${id}`, {
	// 		method: 'GET',
	// 		headers: {
    // 				"Content-Type": "application/json",
    //  		 },
	// 	})
	// 	.then(res => res.json())
	// 	.then((result) => {
			
	// 			setCourse(result);
	// 		}
			
			
	// 		)
	// 	}

		function UpdateById() {
			fetch(`http://localhost:8080/api/courses/${id}`, {
				method: 'PUT',
				headers: {
						"Content-Type": "application/json",
				  },
			})

			
			.then(res => {
			if(!res.ok){
				throw new Error(`HTTP error! status: ${res.status}`);
			}else{
				res.json();
			}
		})
			.then(result => {
				setCourse(result);
				})
				.catch(e => {
					console.log('There has been a problem with your fetch operation: ' + e.message);
				  });
				}

			// function deleteById() {
			// 	fetch(`http://localhost:8080/api/courses/${id}`, {
			// 		method: 'DELETE',
			// 		headers: {
			// 				"Content-Type": "application/json",
			// 		  },
			// 	})
			// 	.then(res => res.json())
			
			// 	.then((result) => {
			// 		console.log("2 option")
			// 		console.log(result)
			// 		})
					
			// 	}
		

	return (
		<div className="centerContent">

<Paper elevation={3} style={paperStyle}>

<Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={course.id}>
         Id:{course.id}<br/>
         coursetart:{course.courseStart}<br/>
         courseEnd:{course.courseEnd}<br/>
		 level:{course.level}<br/>
		 period:{course.period}<br/>
		 vacancies:{course.vacancies}
        </Paper>
		</Paper>

		<label>
          <p className="fieldName">choose an id</p>
          <input className="inputUser" type="numeric" required onChange={e => setId(e.target.value)}/>
        </label>

				{/* <div className='spaceUP20PX'>
					<button
						onClick={getById}
						className='btnSubmit'
						type="submit"
					>find by id
					</button>
				</div>
				<div className='spaceUP20PX'>
					<button
						onClick={deleteById}
						className='btnSubmit'
						type="submit"
					>delete
					</button>
				</div> */}
				<div className='spaceUP20PX'>
					<button
						onClick={UpdateById}
						className='btnSubmit'
						type="submit"
					>update
					</button>
				</div>

				<p className="fieldName">{text}</p>
		
		</div>
	);
};

export default CourseChanges;

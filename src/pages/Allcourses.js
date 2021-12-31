import React, { useEffect, useState } from 'react';
import '../styles/style.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Paper, Button } from '@material-ui/core';



const Allcourses = () => {
	const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }

	const [courses, setCourses] = useState([])


	useEffect(() => {
		fetch("http://localhost:8080/api/courses/all")
			.then(res => res.json())
			.then((result) => {
				console.log(result);
				setCourses(result);
			}
			)
	}, [])


	return (
		<Container>
			
    <h1>courses</h1>

    <Paper elevation={3} style={paperStyle}>

      {courses.map(course=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={course.id}>
         Id:{course.id}<br/>
         coursetart:{course.courseStart}<br/>
         courseEnd:{course.courseEnd}<br/>
		 level:{course.level}<br/>
		 period:{course.period}<br/>
		 vacancies:{course.vacancies}
        </Paper>
      ))
		}


    </Paper>
			
			</Container>
	);
};

export default Allcourses;


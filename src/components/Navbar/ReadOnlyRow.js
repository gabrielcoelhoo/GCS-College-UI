import React from "react";

const ReadOnlyRow = ({ course }) => {
  return (
      <tr>
					<td>{course.id}</td>
					<td>{course.courseStart}</td>
					<td>{course.courseEnd}</td>
					<td>{course.level}</td>
					<td>{course.period}</td>
					<td>{course.vacancies}</td>
				</tr>
  
  );
};

export default ReadOnlyRow;
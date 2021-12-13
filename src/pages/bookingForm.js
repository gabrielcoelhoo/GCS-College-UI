import React, {useState} from 'react';
import Select from 'react-select'
import '../styles/style.css'


const BookingForm = () => {

	const [englishCourse, setEnglishCourse] = useState("");
	const [accomodation, setAccomodation] = useState("");
	const [transfer, setTransfer] = useState("");
	const [comments, setComments] = useState("");

	const options = [
		{ value: 'elementary', label: 'elementary' },
		{ value: 'beginner', label: 'beginner' },
		{ value: 'intermediate', label: 'intermediate' },
		{ value: 'advanced', label: 'advanced' }
	  ]

	  const optionsAccomodation = [
		{ value: '1', label: '1'},
		{ value: '2', label: '2' },
		{ value: '3', label: '3' },
		{ value: '4', label: '4' }
	  ]

	  const optionsTransfer = [
		{ value: 'yes', label: 'yes'},
		{ value: 'no', label: 'no' },
	  ]


return (
	<div className="centerContent">
      <h1>Booking form</h1>
      <form>
        <label>
          <p className='fieldName' >English Course</p>
			<Select  options={options} />
        </label>
		<label>
          <p className='fieldName' >Accomodation in weeks</p>
		  <Select options={optionsAccomodation} />
        </label>
		<label>
          <p className='fieldName' >Transfer from Airport</p>
          <Select options={optionsTransfer} />
        </label>
        <label>
          <p className='fieldName' >Comments</p>
          <input className='commentsInput' type="text" onChange={e => setComments(e.target.value)}/>
        </label>
        <div className='spaceUP20PX'>
          <button className='btnSubmit'  type="submit">Submit</button>
        </div>
      </form>
    </div>
);
};

export default BookingForm;

import React, {useState} from 'react';
import Select from 'react-select'

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
	<div
	style={{
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh'
	}}m 
	>
	<div className="login-wrapper">
      <h1>Booking form</h1>
      <form>
        <label>
          <p>English Course</p>
			<Select options={options} />
        </label>
		<label>
          <p>Accomodation in weeks</p>
		  <Select options={optionsAccomodation} />
        </label>
		<label>
          <p>Transfer from Airport</p>
          <Select options={optionsTransfer} />
        </label>
        <label>
          <p>comments</p>
          <input type="text" onChange={e => setComments(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
	</div>
);
};

export default BookingForm;

import React, {useState} from 'react';

const BookingForm = () => {

	const [englishCourse, setEnglishCourse] = useState("");
	const [accomodation, setAccomodation] = useState("");
	const [transfer, setTransfer] = useState("");
	const [comments, setComments] = useState("");


return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
	<div className="login-wrapper">
      <h1>Booking form</h1>
      <form>
        <label>
          <p>English Course</p>
          <input type="text" onChange={e => setEnglishCourse(e.target.value)}/>
        </label>
		<label>
          <p>Accomodation</p>
          <input type="text" onChange={e => setAccomodation(e.target.value)}/>
        </label>
		<label>
          <p>Transfer</p>
          <input type="text" onChange={e => setTransfer(e.target.value)}/>
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

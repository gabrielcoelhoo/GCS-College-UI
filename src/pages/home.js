import React from 'react';
import img_home from '../pages/img_home.jpg';

const Home = () => {
return (
	<div className='centerContent'>
	<h1>GCS COLLEGE</h1>
	<p>Lorem Ipsum is simply dummy text of the printing and typesetting 
	industry. Lorem Ipsum has been the industry's standard dummy text ever
	since the 1500s, when an unknown printer took a galley of type and 
	scrambled it to make a type specimen book. It has survived not only 
	five centuries, but also the leap into electronic typesetting,
	 remaining essentially unchanged. It was popularised in the 1960s
	  with the release of Letraset sheets containing Lorem Ipsum passages, 
	  and more recently with desktop publishing software like Aldus PageMaker
	   including versions of Lorem Ipsum.	
	</p>
	<img src={img_home} width='50%' height='auto' />

	<h2>About us</h2>
	<p>Lorem Ipsum is simply dummy text of the printing and typesetting 
	industry. Lorem Ipsum has been the industry's standard dummy text ever
	since the 1500s, when an unknown printer took a galley of type and 
	scrambled it to make a type specimen book. It has survived not only 
	five centuries, but also the leap into electronic typesetting,
	 remaining essentially unchanged. It was popularised in the 1960s
	  with the release of Letraset sheets containing Lorem Ipsum passages, 
	  and more recently with desktop publishing software like Aldus PageMaker
	   including versions of Lorem Ipsum.	
	</p> 
	
	</div>

	
);
};

export default Home;

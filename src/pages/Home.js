import React from 'react';
import img_home from '../pages/img_home.jpg';
import '../styles/style.css'

const Home = () => {
return (
	<div className='centerContent'>
	<h1>GCS COLLEGE</h1>
	<p className='pHome'>GCS College delivers English language courses in the centre of Dublin, 
		Ireland, since 2009. Everyone that works at GCS is passionate and committed: 
		they love what they do! Awarded the Best Language School for the second year 
		in a row by the education stars website (education stars-awards.org), we are ready
		 to provide an ultimate exchange experience! Currently, 
		GCS College occupies an area of 14,000 m² on Henry street
		 and has students from various countries in Latin America, Europe and Asia.
	</p>
	<img src={img_home} width='70%' height='auto' alt='GCS College campus' />

	<h2 className='aboutHome' >About us</h2>
	<p className='pHome'>At Dublin’s GCS College we offer an English language learning experience which is both fun and educational
		. We want our students to feel part of something special, something different. 
		At GCS College, you will experience more than just learning a foreign language; 
		you will be part of our global family !

Our fantastic social programme offers you the chance to get a taste of everything Ireland has to offer,
 and provides you with lots of opportunities to speak English in real social environments. 
 Inside the classroom, we find that our students learn English faster when they’re having fun!

Our teachers have the passion and experience to ensure that you achieve all of your learning objectives
 in an interesting and fun manner. We carefully select teachers who understand your goals and work hard to build
  a close relationship with you. On top of that, the school has a first-class support team, 
  who are there to make sure your stay is as educational and enjoyable as possible.

GCS College is accredited by ACELS.
	</p> 
	
	</div>

	
);
};

export default Home;

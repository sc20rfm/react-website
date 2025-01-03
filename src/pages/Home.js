import React from 'react'
import { Link } from 'react-router-dom';
import BannerImage from '../assets/pizza.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
				<h1>Khadijah's Pizzeria</h1>
				<p>WHERE EVERY SLICE TELLS A DELICIOUS STORY</p>
				<Link to="/menu">
					<button> ORDER NOW </button>
				</Link>
			</div>    
    </div>
  )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

export default function Home() {

    return (
        <div className='home-container'>
            <div className='home-header'>
                <h1 className='home-heading'>Yoga Pose Estimation</h1>
                <div className='home-list'>
                <Link to='/start'>
                        <button
                            className="btn btn-secondary"
                            id="about-btn"
                        >Let's Start</button>
                    </Link>
                <Link to='/about'>
                    <button 
                        className="btn btn-secondary" 
                        id="about-btn"
                    >
                        About
                    </button>
                </Link>
                
                <Link to='/tutorials'>
                        <button
                            className="btn btn-secondary"
                            id="about-btn"
                        >Tutorials</button>
                    </Link>
                    </div>
            </div>

            <h1 className="description">Yoga Pose Estimator</h1>
            <div className="home-main">
                <div className="btn-section">
                <div className="para-class">
                
                    <p>Welcome</p>
                    <p>Make Your Life style healthy.</p>
        </div>
                </div>
            </div>
        </div>
    )
}

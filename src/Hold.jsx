import React from 'react'
import './Hold.css'
import use from './us.png'

function Hold() {
    return (
        <div className='give'>
            <div className="give1"></div>
            <div className="give2">
                <img src={use} className='logo' alt="" />
                <h3>Experience</h3>
                <h1>Growing organic food</h1>
                <p>It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout. The point of using Lorem  <br />Ipsum is that it has a more-or-less normal distribution of letters,<br /> asimiliuopposed to using ‘Content here, content here’, makinmetimes on <br /> purposg it look like r eadable English. Various versions .</p>
            </div>

        </div>
    )
}

export default Hold;

import React from 'react'
import how from './ho.png'
import './Pul.css'

function Pul() {
    return (
        <div className='pul'>
            <img src={how} alt="" />
            <div className="pul1">
                <h4>Products</h4>
                <h1>Subscribe to our newsletter</h1>
                <input type="text"
                    placeholder='Email Address'
                />
                <button>SUBMIT</button>
            </div>

        </div>
    )
}

export default Pul;

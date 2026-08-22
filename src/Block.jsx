import React from 'react'
import './Block.css'

function Block() {
    return (
        <div className='keey'>
            <div className="cut">
                <div className="cut">
                    <h4>Products</h4>
                    <h1>Subscribe to our newsletter</h1>
                    <input type="text"
                        placeholder='Email Address' />
                    <button type='submit'>
                        SUBMIT
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Block;

import React from 'react'
import './You.css';
import home from "./home1.png";

function You() {
    return (
        <div>
            <div className="keyy">
                <div className="pg">
                    <img src={home} alt="" />
                </div>
                <div className="cutt">
                    <h1>
                        Thank You for supporting our
                        <br />
                        local community
                    </h1>

                    <button>READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export default You

import React from 'react';
import './Power.css';

function Power() {
    return (
        <div className="box">

            <div className="head">
                <h3>Products</h3>
                <h1>Pricing Plans</h1>
                <p>
                    Program is available for people who have workedat
                    <br />
                    growing least one prently.
                </p>
            </div>

            <div className="cards">

                <div className="card">
                    <div className="top">
                        <h3>Milky Package</h3>
                        <h1>$27/mo</h1>
                    </div>

                    <div className="bottom">
                        <ul className='mos'>
                            <li>Seasonal Fruits</li>
                            <li>Seasonal Veggies</li>
                            <li>Meat Products</li>
                            <li>Best of Cheese</li>
                        </ul>
                        <button className='bt'>PURCHASE</button>
                    </div>
                </div>

                <div className="card best">
                    <div className="be">
                        BEST VALUE
                    </div>

                    <div className="top bow">
                        <h3>Standard Package</h3>
                        <h1>$37/mo</h1>
                    </div>

                    <div className="bottom">
                        <ul className='mos'>
                            <li>Seasonal Fruits</li>
                            <li>Seasonal Veggies</li>
                            <li>Meat Products</li>
                            <li>Best of Cheese</li>
                        </ul>
                        <button className='bt'>PURCHASE</button>
                    </div>
                </div>


                <div className="card">
                    <div className="top">
                        <h3>Mix Package</h3>
                        <h1>$57/mo</h1>
                    </div>

                    <div className="bottom">
                        <ul className='mos'>
                            <li>Seasonal Fruits</li>
                            <li>Seasonal Veggies</li>
                            <li>Meat Products</li>
                            <li>Best of Cheese</li>
                        </ul>
                        <button className='bt' >PURCHASE</button>
                    </div>
                </div>


                <div className="card">
                    <div className="top">
                        <h3>Milk & Meat Package</h3>
                        <h1>$67/mo</h1>
                    </div>

                    <div className="bottom">
                        <ul className='mos'>
                            <li>Seasonal Fruits</li>
                            <li>Seasonal Veggies</li>
                            <li>Meat Products</li>
                            <li>Best of Cheese</li>
                            </ul>
                        <button className='bt' >PURCHASE</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Power;
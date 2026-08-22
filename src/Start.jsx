import React from 'react'
import './Start.css'
import { FaLocationDot } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";

function Start() {
    return (
        <div className='main12'>
            <div className="we">
                <FaLocationDot />
                <li>Rue 12345 New Southern Wales Sidney</li>
            </div>
            <div className="we1">
                <CgMail />
                <li>bridge@example.com</li>
            </div>
            <div className="w2">
                <FaPhone />
                <li>+123 456 7890</li>
            </div>

        </div>
    )
}

export default Start;

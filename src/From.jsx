import React from 'react'
import './From.css'
import { FaLocationDot } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";


function From() {
  return (
    <div>
      <div className="lin">
        <div className="lik">
          <h2>Milky Package</h2>
          <p>Program is available for people who have farming
            ne season on a farm apprently enim ad minim.
            Nam libero tempore, cum soluta nobis est eligendi
            one season on a farm apprently enim ad minim.
            quis nostrud exercilabor aliquip.</p>
        </div>
        <div className="lik">
          <h2>Milky Package</h2>
          <div className="lic">
            <FaLocationDot />
            <li>Rue 12345 New Southern Wales Sidney</li>
          </div>
          <div className="lic">
            <CgMail />
            <li>bridge@example.com</li>
          </div>
          <div className="lic">
            <FaPhone />
            <li>+123 456 7890</li>
          </div>
          <input type="text"
            placeholder='Email Address' />
          <button>SUBMIT</button>
        </div>
        <div className="lik">
          <h2>Milky Package</h2>
          <div className="bg"></div>
        </div>
      </div>
      <div className="lin1">
        <p>copyright2019@qode interactive</p>
      </div>
    </div>
  )
}

export default From

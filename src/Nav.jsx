import React from 'react';
import './Nav.css';
import { SlNotebook } from 'react-icons/sl';
import { IoIosSearch } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav>
        <div className="oc">
          <ul className="ig"></ul>

          <ul className="ph">
            <li>
              <NavLink to="/" end style={{textDecoration:"none", color:"black"}}>
                HOME
              </NavLink>
            </li>

            <li>
              <NavLink to="/aboutus" style={{textDecoration:"none", color:"black"}}>
                ABOUT US
              </NavLink>
            </li>

            <li>
              <NavLink to="/price" style={{textDecoration:"none", color:"black"}}>
                PRICING
              </NavLink>
            </li>

            <li>
              <NavLink to="/product" style={{textDecoration:"none", color:"black"}}>
                PRODUCTS
              </NavLink>
            </li>
          </ul>
        </div>

        <ul className="ph1">
          <li>
            <NavLink to="/notes">
              <SlNotebook />
            </NavLink>
          </li>

          <li>
            <NavLink to="/search">
              <IoIosSearch />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;

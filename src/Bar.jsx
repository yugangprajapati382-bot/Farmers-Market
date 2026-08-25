import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Bar.css";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
    
      <button className="menu-icon" onClick={() => setOpen(true)}>
        ☰
      </button>

      
      <div className={`sidebar ${open ? "open" : ""}`}>

      
        <button className="close-icon" onClick={() => setOpen(false)}>
          ✕
        </button>

        <h2>Farmers</h2>

        <Link to="/" onClick={() => setOpen(false)}>
          🏠 Home
        </Link>

        <Link to="/aboutus" onClick={() => setOpen(false)}>
          👤 About Us
        </Link>

        <Link to="/price" onClick={() => setOpen(false)}>
          💰 Price
        </Link>

        <Link to="/product" onClick={() => setOpen(false)}>
          📦 Product
        </Link>

      </div>

      {/* Background Overlay */}
      {open && (
        <div
          className="overlay"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
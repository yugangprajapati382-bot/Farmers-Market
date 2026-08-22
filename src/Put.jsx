import React from "react";
import "./Put.css";
import ima1 from './ima1.jpg'
import ima2 from './ima2.jpg'
import ima3 from './ima3.jpg'
import ima4 from './ima4.jpg'
import ima5 from './ima5.jpg'
import ima6 from './ima6.jpg'
import ima7 from './ima7.jpg'
import ima8 from './ima8.jpg'

function Put() {
  return (
    <div className="put">

      <div className="product">

        <div className="product-box">
          <img src={ima1} alt="Homemade Jam" />
        </div>
        <h3>Homemade Jam</h3>
        <p>$36.00</p>

      </div>


      <div className="product">

        <div className="product-box">
          <img src={ima2} alt="Thai Basilico" />
        </div>
        <h3>Thai Basilico</h3>
        <p>$11.00</p>

      </div>


      <div className="product">

        <div className="product-box">
          <img src={ima3} alt="Natural Jelly" />
        </div>
        <h3>Natural Jelly</h3>
        <p>$13.50</p>

      </div>


      <div className="product">

        <div className="product-box">
          <span className="sold">SOLD</span>
          <img src={ima4} alt="Swiss Emmental" />
        </div>
        <h3>Swiss Emmental</h3>
        <p>$32.00</p>

      </div>


      <div className="product">

        <div className="product-box">
          <span className="discount">-10%</span>
          <img src={ima5} alt="Salvia Rosmarino" />
        </div>
        <h3>Salvia Rosmarino</h3>

        <div className="price">
          <span className="old">$20.00</span>
          <span>$18.00</span>
        </div>

      </div>


      <div className="product">

        <div className="product-box">
          <img src={ima6} alt="Vegan Sausage" />
        </div>
        <h3>Vegan Sausage</h3>
        <p>$20.00</p>

      </div>


      <div className="product">

        <div className="product-box">
          <img src={ima7} alt="Granny Smith Apples" />
        </div>
        <h3>Granny Smith Apples</h3>
        <span className="cart">ADD TO CART</span>

      </div>


      <div className="product">

        <div className="product-box">
          <img src={ima8} alt="Natural Olive Oil" />
        </div>
        <h3>Natural Olive Oil</h3>
        <p>$29.99</p>

      </div>

    </div>
  );
}

export default Put;
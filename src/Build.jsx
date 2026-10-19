import React from "react";
import "./Build.css";
import ig from './Lap.png'
import {
  FiTruck,
  FiShield,
  FiHeadphones,
  FiCreditCard,
  FiArrowRight,
} from "react-icons/fi";

function Build() {
  return (
    <section className="build-section" id="home">

      
      <div className="build-glow glow-one"></div>
      <div className="build-glow glow-two"></div>

      <div className="build-container">

        <div className="build-content">

          <p className="build-small-title">
            PREMIUM LAPTOPS
          </p>

          <h1>
            THE FUTURE OF
            <span> PERFORMANCE.</span>
          </h1>

          <h2>
            Powerful. Elegant. Effortless.
          </h2>

          <p className="build-description">
            Discover the next generation of laptops designed
            for creators, professionals and dreamers.
          </p>

          <div className="build-buttons">

            <button className="primary-btn">
              Explore Laptops
              <FiArrowRight />
            </button>

            <button className="secondary-btn">
              Compare Models
            </button>

          </div>

        </div>



        <div className="laptop-area">

          <div className="laptop-glow"></div>

          <div className="laptop-wrapper">

            <img
              src={ig}
              alt="Laptop"
              className="hero-laptop"
            />

          </div>

  
          <div className="side-specs">

            <div className="spec-line"></div>

            <p>Sleek Design</p>
            <p>Powerful Performance</p>
            <p>Built for Tomorrow</p>

          </div>

        </div>

      </div>


      <div className="features-bar">

        <div className="feature">

          <div className="feature-icon">
            <FiTruck />
          </div>

          <div>
            <h3>Free Shipping</h3>
            <p>On all orders</p>
          </div>

        </div>


        <div className="feature">

          <div className="feature-icon">
            <FiShield />
          </div>

          <div>
            <h3>2 Year Warranty</h3>
            <p>With every purchase</p>
          </div>

        </div>


        <div className="feature">

          <div className="feature-icon">
            <FiHeadphones />
          </div>

          <div>
            <h3>24/7 Support</h3>
            <p>We're here to help</p>
          </div>

        </div>


        <div className="feature">

          <div className="feature-icon">
            <FiCreditCard />
          </div>

          <div>
            <h3>Secure Payment</h3>
            <p>100% safe & trusted</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Build;
import React from "react";
import "./About.css";
import {
  FiCpu,
  FiDatabase,
  FiMonitor,
  FiLayers,
  FiArrowRight,
} from "react-icons/fi";

function About() {
  const features = [
    {
      icon: <FiCpu />,
      title: "M3",
      subtitle: "Latest M3 Processor",
      description: "Blazing fast performance",
    },
    {
      icon: <FiLayers />,
      title: "32GB",
      subtitle: "Up to 32GB RAM",
      description: "Smooth multitasking",
    },
    {
      icon: <FiDatabase />,
      title: "2TB",
      subtitle: "Up to 2TB SSD",
      description: "More space, more possibilities",
    },
    {
      icon: <FiMonitor />,
      title: "120Hz",
      subtitle: "120Hz Display",
      description: "Ultra smooth visuals",
    },
  ];

  return (
    <section className="about-banner" id="about">
      <div className="about-glow"></div>
    
      <div className="about-content">
        <span className="about-eyebrow">BUILT FOR MORE</span>

        <h1>
          Power That
          <br />
          Works For You
        </h1>

        <p>
          Experience lightning-fast performance, stunning visuals
          and unmatched reliability with our premium laptops.
        </p>

        <button
          className="about-button"
          onClick={() =>
            document
              .getElementById("laptops")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore All Features
          <FiArrowRight />
        </button>
      </div>

      <div className="about-laptop">
        <div className="laptop-light"></div>

        <img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=85"
          alt="Premium laptop with a high-resolution display"
        />
      </div>

      <div className="about-features">
        {features.map((feature, index) => (
          <div
            className="about-feature-card"
            key={feature.title}
            style={{ "--card-index": index }}
          >
            <div className="feature-icon">{feature.icon}</div>

            <div className="feature-text">
              <h3>{feature.title}</h3>
              <p>{feature.subtitle}</p>
              <span>{feature.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
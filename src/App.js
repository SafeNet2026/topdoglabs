import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="container">

      <header className="hero">
        <h1>Top Dog Labs</h1>

        <p className="tagline">
          Cybersecurity • Artificial Intelligence • Technology Platforms
        </p>

        <p className="intro">
          Top Dog Labs is the innovation division of Top Dog Computers,
          building next-generation AI platforms, cybersecurity systems,
          and digital infrastructure for modern businesses.
        </p>

        <div className="buttons">
          <a href="#platforms" className="btn">Explore Platforms</a>
          <a href="#founder" className="btn secondary">About the Founder</a>
        </div>
      </header>

      <section id="platforms" className="platforms">

        <h2>Innovation Platforms</h2>

        <div className="grid">

          <div className="card">
            <h3>CyberK9 Sentinel</h3>
            <p>
              AI-powered cybersecurity platform designed to detect threats,
              monitor vulnerabilities, and protect small businesses
              from cyber attacks.
            </p>
          </div>

          <div className="card">
            <h3>PromptPulse AI</h3>
            <p>
              AI prompt intelligence platform that discovers trending prompts
              across the internet and delivers insights to creators,
              developers, and entrepreneurs.
            </p>
          </div>

          <div className="card">
            <h3>CyberK9 AI Tools</h3>
            <p>
              AI discovery and analytics engine that catalogs AI tools,
              compares features, and enables real prompt testing.
            </p>
          </div>

          <div className="card">
            <h3>Quick Pro Creator</h3>
            <p>
              Rapid digital product creation system for entrepreneurs,
              helping launch courses, products, and tools quickly.
            </p>
          </div>

        </div>
      </section>

      <section id="founder" className="founder">

        <h2>Founder</h2>

        <p>
          Jose is a technology entrepreneur and cybersecurity specialist
          with more than 20 years of IT leadership experience.
        </p>

        <p>
          Through Top Dog Labs, he focuses on building innovative AI
          and cybersecurity platforms designed to empower businesses
          and entrepreneurs.
        </p>

      </section>

      <footer className="footer">
        <p>© 2026 Top Dog Labs • A Division of Top Dog Computers</p>
      </footer>

    </div>
  );
}
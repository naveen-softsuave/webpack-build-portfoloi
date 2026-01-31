import React from 'react'
import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header className="hero">
        <div className="hero-content">
          <h1>Naveen Kumar</h1>
          <p className="tagline">Full Stack Developer & Designer</p>
          <div className="social-links">
            <a href="#" className="social-btn">GitHub</a>
            <a href="#" className="social-btn">LinkedIn</a>
            <a href="#" className="social-btn">Twitter</a>
          </div>
        </div>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer with expertise in building modern web applications.
          I love creating beautiful, functional, and user-friendly experiences.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>React, TypeScript, CSS, HTML</p>
          </div>
          <div className="skill-card">
            <h3>Backend</h3>
            <p>Node.js, Express, Python</p>
          </div>
          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git, Webpack, Vite, Docker</p>
          </div>
          <div className="skill-card">
            <h3>Design</h3>
            <p>Figma, UI/UX, Responsive Design</p>
          </div>
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>E-Commerce Platform</h3>
            <p>A full-stack online shopping platform with payment integration.</p>
            <div className="project-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
          </div>
          <div className="project-card">
            <h3>Task Management App</h3>
            <p>Collaborative tool for teams to manage projects and tasks efficiently.</p>
            <div className="project-tags">
              <span>TypeScript</span>
              <span>Express</span>
              <span>PostgreSQL</span>
            </div>
          </div>
          <div className="project-card">
            <h3>Weather Dashboard</h3>
            <p>Real-time weather application with interactive charts and forecasts.</p>
            <div className="project-tags">
              <span>React</span>
              <span>API Integration</span>
              <span>Charts</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Get In Touch</h2>
        <p>Feel free to reach out for collaborations or just a friendly chat!</p>
        <a href="mailto:naveen.kumar@example.com" className="contact-btn">
          Contact Me
        </a>
      </section>

      <footer className="footer">
        <p>&copy; 2026 Naveen Kumar. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

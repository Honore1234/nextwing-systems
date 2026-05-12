export default function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="badge">NEXTWING SYSTEMS · by Honoré Labs</div>
        <h1>Modular UAV Systems for the Future</h1>
        <p className="heroText">
          NextWing Systems develops low-cost modular UAV platforms focused on emergency response,
          aerial monitoring, autonomous navigation, and experimental VTOL architectures.
        </p>
        <div className="buttons">
          <a href="#projects" className="primary">Explore Projects</a>
          <a href="#mission" className="secondary">Mission Overview</a>
        </div>
      </section>

      <section id="mission" className="section grid">
        <div>
          <p className="label">Mission</p>
          <h2>Experimental aerospace engineering built in Mexico.</h2>
          <p>
            Founded by Honoré Villanueva, NextWing Systems focuses on developing modular UAV platforms
            using accessible engineering, rapid prototyping, embedded systems, and adaptive flight architectures.
          </p>
        </div>

        <div className="card">
          <h3>Core Technologies</h3>
          <div className="techGrid">
            <span>Autonomous Navigation</span>
            <span>VTOL Research</span>
            <span>Modular Payload Systems</span>
            <span>Flight Stabilization</span>
          </div>
        </div>
      </section>

      <section id="projects" className="section dark">
        <p className="label">Projects</p>
        <h2>Current Development Platforms</h2>

        <div className="projectGrid">
          <article className="projectCard">
            <p className="projectCode">NF-X1</p>
            <h3>Night Fury X1</h3>
            <p>
              A modular fixed-wing UAV platform featuring custom stabilization systems,
              mission payload integration, and experimental autonomous flight capabilities.
            </p>
          </article>

          <article className="projectCard">
            <p className="projectCode">VT-X1</p>
            <h3>VT-X1 Hybrid Platform</h3>
            <p>
              Experimental distributed-lift architecture designed to explore assisted VTOL operations,
              adaptive stabilization, and future autonomous transition systems.
            </p>
          </article>
        </div>
      </section>

      <footer>
        NextWing Systems by Honoré Labs — Experimental UAV Research & Development
      </footer>
    </main>
  )
}

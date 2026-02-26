import './App.css';

function App() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">FDIL</span>
          <div className="brand-text">
            <p className="brand-title">Fairfield University</p>
            <p className="brand-subtitle">Digital Immigration Lab</p>
          </div>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#people">People</a>
          <a href="#mentorship">Mentorship</a>
          <a href="#student-success">Student Success</a>
          <a href="#opportunities">Opportunities</a>
        </nav>
        <button className="cta">Connect</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Human-centered migration research</p>
            <h1>Fairfield University Digital Immigration Lab</h1>
            <p className="lead">
              The Digital Immigration Lab advances storytelling, data ethics, and
              policy engagement to amplify immigrant voices and build practical
              tools for communities, educators, and decision makers.
            </p>
            <div className="cta-row">
              <button className="cta primary">Explore the Lab</button>
              <button className="cta ghost">Join the Network</button>
            </div>
            <div className="hero-stats">
              <div>
                <span className="stat-number">25+</span>
                <span className="stat-label">Active projects</span>
              </div>
              <div>
                <span className="stat-number">12</span>
                <span className="stat-label">Community partners</span>
              </div>
              <div>
                <span className="stat-number">8</span>
                <span className="stat-label">Student teams</span>
              </div>
            </div>
          </div>
          <div className="hero-banner">
            <div className="banner-placeholder">
              <span>Banner Placeholder</span>
              <p>
                Add a future lab banner showcasing fieldwork, student projects,
                or community collaborations.
              </p>
            </div>
          </div>
        </section>

        <section className="mission">
          <div>
            <h2>Mission and Focus</h2>
            <p>
              We combine digital scholarship with community-based research to
              document migration journeys, translate lived experiences into
              policy insights, and mentor the next generation of civic
              technologists.
            </p>
          </div>
          <div className="mission-panel">
            <h3>What we build</h3>
            <ul>
              <li>Interactive storytelling and oral history archives</li>
              <li>Data visualizations for migration trends and equity</li>
              <li>Toolkit resources for educators and advocates</li>
            </ul>
          </div>
        </section>

        <section className="sections-grid">
          <article className="section-card" id="research">
            <h3>Research</h3>
            <p>
              Community-driven research, rapid response analysis, and digital
              archives centered on migration equity.
            </p>
          </article>
          <article className="section-card" id="publications">
            <h3>Publications</h3>
            <p>
              Reports, policy briefs, and scholarly pieces authored with
              partners and student fellows.
            </p>
          </article>
          <article className="section-card" id="people">
            <h3>People</h3>
            <p>
              Faculty leadership, student researchers, and community advisors
              shaping the lab's direction.
            </p>
          </article>
          <article className="section-card" id="mentorship">
            <h3>Mentorship</h3>
            <p>
              Hands-on training in digital methods, storytelling, and civic tech
              practice for emerging scholars.
            </p>
          </article>
          <article className="section-card" id="student-success">
            <h3>Student Success</h3>
            <p>
              Fellowships, internships, and showcase events that elevate
              student-led migration projects.
            </p>
          </article>
          <article className="section-card" id="opportunities">
            <h3>Opportunities</h3>
            <p>
              Collaborate, fund, or join current initiatives across research and
              community engagement.
            </p>
          </article>
        </section>

        <section className="spotlight">
          <div className="spotlight-card">
            <h2>Student Success Spotlight</h2>
            <p>
              Highlight capstone stories, community showcases, and research wins
              in this dedicated space for student achievement.
            </p>
            <button className="cta primary">View Success Stories</button>
          </div>
          <div className="spotlight-aside">
            <h3>Upcoming Opportunities</h3>
            <p>
              Share application deadlines, partner requests, or volunteer
              initiatives for the Digital Immigration Lab network.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <p>Fairfield University Digital Immigration Lab</p>
          <span>Fairfield, Connecticut • Community-engaged research</span>
        </div>
        <div className="footer-links">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#opportunities">Opportunities</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

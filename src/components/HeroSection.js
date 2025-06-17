export default function HeroSection() {
    return (
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-decorative">
              <img src="/images/decorative-flowers-left.png" alt="Decorative flowers" className="flowers-left" />
              <img src="/images/decorative-flowers-right.png" alt="Decorative flowers" className="flowers-right" />
            </div>
            
            <div className="hero-main">
              <div className="date-badge bg-red-900">31st-2 Feb</div>
              <h1 className="hero-title">Hi-Res</h1>
              <h2 className="hero-subtitle">ANNUAL DESIGN CONVERGENCE</h2>
              <p className="hero-description">
                Join us ignite this spark of new beginnings, bringing visions to life 
                through collective influence and shaping the future of design.
              </p>
              <button className="register-btn">Register Now</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
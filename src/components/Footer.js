export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-cta">
          <div className="container">
            <h2 className="cta-title">ready. set. synergy?</h2>
            <button className="get-tickets-btn">Get Tickets</button>

          </div>
        </div>
        
        <div className="footer-content">
          <div className="container">
            <div className="footer-info">
              <div className="footer-logos">
                <img src="/images/esummit-logo-white.png" alt="E-Summit" />
                <img src="/images/ecell-logo.png" alt="E-Cell" />
              </div>
              
              <div className="footer-text">
                <p>E-Summit IIT Roorkee is North India&apos;s largest entrepreneurial fest, organized by the Entrepreneurship Cell to inspire and empower future leaders.</p>
              </div>
              
              
              
              <div className="footer-address">
                <h4>ADDRESS</h4>
                <p>
                  Ecell Office, SAC Building<br />
                  IIT Roorkee<br />
                  Roorkee, Uttarakhand, 247667
                  
                </p>
              </div>
              
              <div className="footer-links">
                <h4>USEFUL</h4>
                <ul>
                  <li><a href="#benefits">Benefits</a></li>
                  <li><a href="#speakers">Speakers</a></li>
                  <li><a href="#faqs">FAQs</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p>Made with ❤️ by Design Team E-Cell</p>
              <p>© 2024 E-Summit IIT Roorkee. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
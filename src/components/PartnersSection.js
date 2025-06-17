export default function PartnersSection() {
    const partners = Array(8).fill().map((_, i) => ({
      id: i + 1,
      name: "Fampay",
      logo: "/images/fampay-logo.png"
    }));
  
    return (
      <section className="partners-section">
        <div className="container">
          <h2 className="section-title">Partners</h2>
          
          <div className="partners-grid">
            {partners.map((partner) => (
              <div key={partner.id} className="partner-card">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
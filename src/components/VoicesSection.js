export default function VoicesSection() {
    const speakers = Array(9).fill().map((_, i) => ({
      id: i + 1,
      name: "Ansh Mehra",
      title: "Design Consultant",
      description: "Lorem ipsum dolor sit amet consectetur. Aliquam risus nulla et posuere elementum nunc.",
      image: "/images/speaker-photo.jpg"
    }));
  
    return (
      <section className="voices-section">
        <div className="container">
          <h2 className="section-title">Voices That Matter</h2>
          <p className="section-subtitle">2023 SPEAKERS</p>
          
          <div className="speakers-grid">
            {speakers.map((speaker) => (
              <div key={speaker.id} className="speaker-card">
                <div className="speaker-image">
                  <img src={speaker.image} alt={speaker.name} />
                </div>
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-title">{speaker.title}</p>
                <p className="speaker-description">{speaker.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
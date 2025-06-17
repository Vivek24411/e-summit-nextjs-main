export default function WorkshopsSection() {
    const workshops = [
      {
        id: 1,
        title: "Workshop title is this",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquam risus nulla et posuere elementum nunc.",
        image: "/images/workshop-1.jpg"
      },
      {
        id: 2,
        title: "Workshop title is this",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquam risus nulla et posuere elementum nunc.",
        image: "/images/workshop-2.jpg"
      },
      {
        id: 3,
        title: "Workshop title is this",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquam risus nulla et posuere elementum nunc.",
        image: "/images/workshop-3.jpg"
      }
    ];
  
    return (
      <section className="workshops-section">
        <div className="container">
          <h2 className="section-title">Workshops</h2>
          
          <div className="workshops-grid">
            {workshops.map((workshop) => (
              <div key={workshop.id} className="workshop-card">
                <div className="workshop-image">
                  <img src={workshop.image} alt={workshop.title} />
                </div>
                <div className="workshop-content">
                  <h3 className="workshop-title">{workshop.title}</h3>
                  <p className="workshop-description">{workshop.description}</p>
                  <button className="workshop-btn">Register</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
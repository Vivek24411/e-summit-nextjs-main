export default function GenesisSection({ background }) {
    const activities = [
      {
        id: 1,
        title: "Zenigma",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquam risus nulla et posuere elementum nunc. Lorem ipsum dolor sit amet consectetur. Aliquam risus nulla et posuere elementum nunc.",
        image: "/images/zenigma.png",
        buttonText: "Register"
      },
      {
        id: 2,
        title: "Photoshop Battle",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquam risus nulla et posuere elementum nunc. Lorem ipsum dolor sit amet consectetur. Aliquam risus nulla et posuere elementum nunc.",
        image: "/images/photoshop-battle.png",
        buttonText: "Register"
      },
      {
        id: 3,
        title: "Brandstorm",
        description: "Lorem ipsum dolor sit amet consectetur. Aliquam risus nulla et posuere elementum nunc. Lorem ipsum dolor sit amet consectetur. Aliquam risus nulla et posuere elementum nunc.",
        image: "/images/brandstorm.png",
        buttonText: "Register"
      }
    ];
  
    return (
      <section className="genesis-section" style={background ? { backgroundImage: `url(${background})` } : {}}>
        <div className="container">
          <div className="genesis-header">
            <h2 className="section-title">Genesis In Action</h2>
            <p className="section-subtitle">EVENTS TODAY ONE</p>
          </div>
          
          <div className="activities-list">
            {activities.map((activity, index) => (
              <div key={activity.id} className={`activity-card activity-${index + 1}`}>
                <div className="activity-content">
                  <h3 className="activity-title">{activity.title}</h3>
                  <p className="activity-description">{activity.description}</p>
                  <button className="activity-btn">{activity.buttonText}</button>
                </div>
                <div className="activity-image">
                  <img src={activity.image} alt={activity.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
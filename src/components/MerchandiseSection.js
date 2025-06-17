export default function MerchandiseSection() {
    return (
      <section className="merchandise-section">
        <div className="container">
          <div className="merchandise-content">
            <div className="merchandise-text">
              <h2 className="section-title">Merchandise</h2>
              <p className="section-subtitle">EXCITING DESIGNS, SURPRISING COLLECTIONS</p>
              <button className="buy-merch-btn">Buy Merch</button>
            </div>
            
            <div className="merchandise-visual">
              <div className="merch-items">
                <img src="/images/merchandise-items.png" alt="Merchandise items" />
              </div>
              <div className="merch-models">
                <img src="/images/model-1.png" alt="Model 1" className="model-1" />
                <img src="/images/model-2.png" alt="Model 2" className="model-2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
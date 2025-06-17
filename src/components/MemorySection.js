export default function MemorySection() {
    const memories = Array(5).fill().map((_, i) => ({
      id: i + 1,
      image: "/images/memory-photo.jpg"
    }));
  
    return (
      <section className="memory-section">
        <div className="container">
          <h2 className="section-title">Pixels of Memory</h2>
          
          <div className="memories-grid">
            {memories.map((memory) => (
              <div key={memory.id} className="memory-card">
                <img src={memory.image} alt={`Memory ${memory.id}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
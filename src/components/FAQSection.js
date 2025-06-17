import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(null);
  
  const faqs = [
    {
      id: 1,
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 3,
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 4,
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 5,
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="faq-section bg-red-700">
      <div className="container">
        <h2 className="section-title">FAQs?</h2>
        
        <div className="faq-list">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(faq.id)}
              >
                {faq.question}
                <span className={`faq-icon ${openFAQ === faq.id ? 'open' : ''}`}>+</span>
              </button>
              {openFAQ === faq.id && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
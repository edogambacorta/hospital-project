import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  hospital: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "The AI-powered diagnostics have significantly improved our accuracy and reduced time-to-diagnosis. It's been a game-changer for our hospital.",
      author: "Dr. Emily Chen",
      role: "Chief of Medicine",
      hospital: "Metropolitan General Hospital",
      image: "/images/testimonial-1.jpg"
    },
    {
      quote: "The resource management features have optimized our operations, leading to cost savings and improved patient care. Highly recommended!",
      author: "James Wilson",
      role: "Hospital Administrator",
      hospital: "Riverside Medical Center",
      image: "/images/testimonial-2.jpg"
    },
    {
      quote: "The AI-driven patient monitoring system has allowed our staff to provide more personalized care. It's truly revolutionized our approach.",
      author: "Dr. Sarah Thompson",
      role: "Head of Nursing",
      hospital: "Oakwood Health Institute",
      image: "/images/testimonial-3.jpg"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>Trusted by Hospitals Like Yours</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote">{testimonial.quote}</div>
              <div className="author-info">
                <img src={testimonial.image} alt={testimonial.author} className="author-image" />
                <div className="author-details">
                  <div className="author-name">{testimonial.author}</div>
                  <div className="author-role">{testimonial.role}</div>
                  <div className="author-hospital">{testimonial.hospital}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

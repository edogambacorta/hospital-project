import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "How does AI improve hospital management?",
      answer: "AI enhances hospital management by automating routine tasks, providing data-driven insights for decision-making, optimizing resource allocation, and improving patient care through predictive analytics and personalized treatment plans."
    },
    {
      question: "Is our hospital data secure with your AI solution?",
      answer: "Absolutely. We prioritize data security and comply with all relevant healthcare data protection regulations. Our AI solution uses state-of-the-art encryption and access control measures to ensure your hospital's data remains confidential and secure."
    },
    {
      question: "How long does it take to implement your AI solution?",
      answer: "Implementation time varies depending on the size and complexity of your hospital system. Typically, our basic setup can be completed in 4-6 weeks, with full integration and staff training taking 2-3 months. We work closely with your team to ensure a smooth transition."
    },
    {
      question: "Can your AI solution integrate with our existing hospital management systems?",
      answer: "Yes, our AI solution is designed to integrate seamlessly with most existing hospital management systems. We have experience working with a wide range of healthcare IT infrastructures and can customize our solution to fit your specific needs."
    },
    {
      question: "What kind of support do you offer after implementation?",
      answer: "We offer comprehensive post-implementation support, including 24/7 technical assistance, regular system updates, ongoing staff training, and dedicated account management. Our team is always available to address any questions or concerns you may have."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {item.question}
                <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
              </div>
              <div className="faq-answer">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

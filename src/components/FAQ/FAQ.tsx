import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  id?: string;
}

const FAQ: React.FC<FAQProps> = ({ id }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "How does SwissHealthAI ensure data security and privacy?",
      answer: "SwissHealthAI adheres to strict Swiss data protection laws and employs state-of-the-art encryption and access control measures. We ensure that all patient data is processed and stored within Switzerland, complying with local regulations and maintaining the highest standards of data privacy."
    },
    {
      question: "Can SwissHealthAI handle multiple languages?",
      answer: "Yes, SwissHealthAI is designed to process and analyze patient data in German, French, Italian, and English. This multi-lingual capability ensures that our tool can be effectively used across Switzerland's diverse linguistic regions."
    },
    {
      question: "How does SwissHealthAI integrate with existing hospital systems?",
      answer: "SwissHealthAI is built with integration in mind. We offer secure APIs and custom connectors that allow seamless integration with most existing hospital management systems. Our team works closely with your IT department to ensure a smooth and efficient integration process."
    },
    {
      question: "What kind of efficiency improvements can we expect with SwissHealthAI?",
      answer: "Hospitals using SwissHealthAI typically see a 30-50% reduction in time spent on administrative tasks related to patient data management. This includes faster data entry, automated report generation, and more efficient data retrieval processes."
    },
    {
      question: "How does SwissHealthAI stay compliant with changing healthcare regulations?",
      answer: "We have a dedicated team that constantly monitors changes in Swiss healthcare regulations. SwissHealthAI receives regular updates to ensure ongoing compliance, and our automated compliance checks help hospitals stay up-to-date with the latest regulatory requirements."
    },
    {
      question: "What kind of support and training do you offer?",
      answer: "We provide comprehensive support including initial staff training, 24/7 technical assistance, regular system updates, and ongoing consultation. Our Swiss-based support team is always available to address any questions or concerns, ensuring you get the most out of SwissHealthAI."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id={id} className="faq">
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

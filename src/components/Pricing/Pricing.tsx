import React from 'react';
import { Link } from 'react-router-dom';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: "Standard",
      price: "$900",
      description: "Ideal for small hospitals and clinics.",
      features: [
        "Up to 50 users",
        "Basic AI diagnostics",
        "Patient monitoring",
        "24/7 support"
      ]
    },
    {
      name: "Pro",
      price: "$1,600",
      description: "Perfect for medium-sized hospitals.",
      features: [
        "Up to 200 users",
        "Advanced AI diagnostics",
        "Real-time patient monitoring",
        "Resource management",
        "Priority 24/7 support"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large hospital networks.",
      features: [
        "Unlimited users",
        "Full AI suite",
        "Custom integrations",
        "Dedicated account manager",
        "On-site training"
      ]
    }
  ];

  return (
    <section className="pricing">
      <div className="container">
        <h2>Transparent Pricing Plans</h2>
        <p className="section-description">Choose the perfect plan for your hospital's needs. All plans include a 30-day free trial.</p>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
              {plan.isPopular && <div className="popular-tag">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">{plan.price}<span>/month</span></div>
              <p>{plan.description}</p>
              <ul>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <Link to="/contact" className="cta-button">Get Started</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

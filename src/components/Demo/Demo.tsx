import React, { useState } from 'react';

interface DemoProps {
  id?: string;
}

const Demo: React.FC<DemoProps> = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    jobTitle: '',
    phoneNumber: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    organization: '',
    jobTitle: '',
    phoneNumber: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Name validation
    if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
      isValid = false;
    } else {
      newErrors.name = '';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    // Organization validation
    if (formData.organization.trim().length < 2) {
      newErrors.organization = 'Organization name must be at least 2 characters long';
      isValid = false;
    } else {
      newErrors.organization = '';
    }

    // Job Title validation
    if (formData.jobTitle.trim().length < 2) {
      newErrors.jobTitle = 'Job title must be at least 2 characters long';
      isValid = false;
    } else {
      newErrors.jobTitle = '';
    }

    // Phone Number validation
    const phoneRegex = /^\+?[0-9]{10,14}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
      isValid = false;
    } else {
      newErrors.phoneNumber = '';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      // Reset form or show success message
      alert('Thank you for your interest! We will contact you shortly to schedule a demo.');
      setFormData({
        name: '',
        email: '',
        organization: '',
        jobTitle: '',
        phoneNumber: '',
        message: ''
      });
    }
  };

  return (
    <section id={id} className="demo">
      <div className="container">
        <h2>Request a Demo</h2>
        <p className="demo-intro">Experience the power of SwissHealthAI firsthand. Fill out the form below to schedule a personalized demo of our AI-powered patient data management solution.</p>
        <form className="demo-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="organization">Organization</label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
            />
            {errors.organization && <span className="error">{errors.organization}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />
            {errors.jobTitle && <span className="error">{errors.jobTitle}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Request Demo</button>
        </form>
      </div>
    </section>
  );
};

export default Demo;

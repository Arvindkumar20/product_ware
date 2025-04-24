import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CallToAction() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup');  // Redirects to signup page
  };

  return (
    <section className="bg-blue-600 text-white py-16 px-8 text-center">
      <h2 className="text-4xl font-semibold mb-4">Ready to Get Started?</h2>
      <p className="text-lg mb-6">
        Join thousands of users who are already taking advantage of our services. Don't miss out on our amazing offers!
      </p>
      <button
        onClick={handleClick}
        className="bg-orange-500 text-white text-lg py-3 px-8 rounded-lg hover:bg-orange-600 transition-all"
      >
        Sign Up Now
      </button>
    </section>
  );
}

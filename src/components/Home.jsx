import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="main-hero">
      <div className="main-content card">
        <h1 className="main-title">
          Take Control of Your <span className="highlight">Finances</span><br />One Transaction at a Time
        </h1>
        <p className="main-description">
          Simplify budgeting, track spending, and gain insights into your financial life. Whether you're saving for a goal or managing daily expenses — we've got you covered.
        </p>
        <h2 className="main-subtitle">Smart Tools for Smarter Finances</h2>
        <button className="btn btn-primary btn-lg" onClick={() => navigate('/add-expense')}>
          🚀 Get Started
        </button>
      </div>
    </div>
  );
};

export default Main;

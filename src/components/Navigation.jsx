import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navigation.css';
import { UserLogedinContext } from '../context/UserLogedin';

const Navigation = () => {

  const {user} = useContext(UserLogedinContext);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'add-expense', label: 'Add Expense', path: '/add-expense' },
    { id: 'dashboard', label: 'Dashboard', path: '/dashboard' },
    { id: 'login', label: 'Login', path: '/login' }
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/"><h2>FinMate</h2></Link>
        </div>
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <Link
                to={item.path}
              >
                { item.label == "Login" ?  !user ?  item.label : "Logout" : item.label }
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-mobile-toggle">
          <button className="mobile-menu-btn">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

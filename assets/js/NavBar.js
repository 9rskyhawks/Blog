// src/NavBar.js
import React from 'react';
import './NavBar.css'; // If you want to add custom styling

const NavBar = () => {
  // Navbar and theme toggle functionality
  React.useEffect(() => {
    const nav = document.querySelector('.mobile-nav');
    const navMenuBtn = document.querySelector('.nav-menu-btn');
    const navCloseBtn = document.querySelector('.nav-close-btn');
    const themeBtn = document.querySelectorAll('.theme-btn');

    const navToggleFunc = () => {
      nav.classList.toggle('active');
    };

    navMenuBtn.addEventListener('click', navToggleFunc);
    navCloseBtn.addEventListener('click', navToggleFunc);

    themeBtn.forEach(btn => {
      btn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');

        themeBtn.forEach(themeBtnItem => {
          themeBtnItem.classList.toggle('light');
          themeBtnItem.classList.toggle('dark');
        });
      });
    });
  }, []);

  return (
    <nav>
      <button className="nav-menu-btn">Menu</button>
      <div className="mobile-nav">
        <button className="nav-close-btn">Close</button>
        {/* Add your navigation links here */}
      </div>
      <div className="theme-toggle">
        <button className="theme-btn light">Light</button>
        <button className="theme-btn dark">Dark</button>
      </div>
    </nav>
  );
};

export default NavBar;

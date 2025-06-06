import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <header>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>

      <main className="main-content">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
          className="logo"
        />
        <div className="search-container">
          <input type="text" className="search-box" />
          <span className="mic-icon" tabIndex="0" aria-label="Search by voice">
           
          </span>
        </div>
        <div className="buttons">
          <button>Google Search</button>
          <button>I’m Feeling Lucky</button>
        </div>
        <div className="language">
          Google offered in: <a href="#">हिन्दी</a> <a href="#">বাংলা</a> <a href="#">తెలుగు</a>
        </div>
      </main>

      <footer>
        <div className="country">India</div>
        <div className="footer-links">
          <div>
            <a href="#">About</a>
            <a href="#">Advertising</a>
            <a href="#">Business</a>
            <a href="#">How Search works</a>
          </div>
          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
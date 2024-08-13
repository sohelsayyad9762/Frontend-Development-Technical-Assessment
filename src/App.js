import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import Onebox from './Onebox';
import { ThemeProvider, useTheme } from './ThemeContext';
import './App.css';

function ThemeToggleButton() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ThemeToggleButton />
        <Routes>
          <Route path="/google-login" element={<Onebox />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

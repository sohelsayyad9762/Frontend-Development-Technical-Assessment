import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTheme } from './ThemeContext';

function Onebox() {
  const [threads, setThreads] = useState([]);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await axios.get('/onebox/list');
        setThreads(response.data);
      } catch (error) {
        console.error('Error fetching threads:', error);
      }
    };

    fetchThreads();
  }, []);

  return (
    <div className="onebox">
      <h1>Threads</h1>
      {threads.map((thread) => (
        <div key={thread.id} className={`thread ${isDarkMode ? 'dark' : 'light'}`}>
          <h3>{thread.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Onebox;

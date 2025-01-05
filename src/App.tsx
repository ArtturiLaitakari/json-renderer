import React, { useState, useEffect } from 'react';
import renderHTML from './renderHTML.tsx';

function App() { 
  const [pageData, setPageData] = useState(null); 

  const fetchPageData = (location) => {
    const page = `/${location}.json`;
    fetch(page)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setPageData(data))
      .catch((error) => console.error('Error fetching data:', error)); 
  };

  useEffect(() => { 
    const handleHashChange = () => {
      const location = window.location.hash.substring(1) || 'home';
      fetchPageData(location);
    };

    // Alkuperäinen lataus
    handleHashChange();

    // Kuuntele hash-muutoksia
    window.addEventListener('hashchange', handleHashChange);

    // Siivoa tapahtumankuuntelija poistaessa komponentin
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (!pageData) { 
    return <div id="App">Lataa...</div>; 
  }

  return ( 
    <div id="App"> 
      {renderHTML(pageData)} 
    </div> 
  );
} 

export default App;

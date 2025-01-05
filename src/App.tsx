import React, { useState, useEffect } from 'react';
import renderHTML from './renderHTML.tsx';

function App() { 
  const [pageData, setPageData] = useState(null); 

  useEffect(() => { 
    fetch('/pageData.json')
      .then((response) => response.json())
      .then((data) => setPageData(data))
      .catch((error) => console.error('Error fetching data:', error)); 
  }, []); 

  if (!pageData) { 
    return <div>Loading...</div>; 
  }

  return ( 
    <div className="App"> 
      {renderHTML(pageData)} 
    </div> 
  ); 
} 

export default App;

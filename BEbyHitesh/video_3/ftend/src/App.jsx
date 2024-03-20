import { useState, useEffect } from 'react';
import axios from 'axios';


import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';



function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    // axios.get('http://localhost:3002/api/jokes')  //use this if u use cors pkg
    axios.get('/api/jokes')    //if not then use proxy instead
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // empty dependency array

  return (
    <>
      <h1> Be Love AND Compassion!</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  );
}

export default App;

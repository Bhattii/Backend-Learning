import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('');
  });
  return (
    <>
      <p>Full Stack Web Development</p>
      <p>Jokes Number: {jokes.length}</p>

      {jokes.map((joke, index) => {
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>;
      })}
    </>
  );
}

export default App;

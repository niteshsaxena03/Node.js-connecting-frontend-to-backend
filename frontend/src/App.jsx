import { useState } from "react";

import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);
  return (
    <div>
      <h1>Starting</h1>
      <p>JOKES:{jokes.length}</p>

      {jokes.map((joke, index) => {
        <div key={joke.id}>
          <h2>{joke.title}</h2>
          <p>{joke.content}</p>
        </div>;
      })}
    </div>
  );
}

export default App;

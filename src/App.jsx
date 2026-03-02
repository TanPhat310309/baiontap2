import { useState, useEffect } from 'react';
import './App.css';
import LetterForm from './components/LetterForm'; 
import LetterList from './components/LetterList'; 

function App() {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    console.log("App mounted - lần render đầu tiên");
  }, []);

  useEffect(() => {
    console.log("Letters updated:", letters);
  }, [letters]);

  const addLetter = (content) => {
    setLetters([
      {
        id: Date.now(),
        content,
      },
      ...letters, 
    ]);
  };

  return (
    <div>
      <LetterForm onAdd={addLetter} />
      <LetterList letters={letters} />
    </div>
  );
}

export default App;
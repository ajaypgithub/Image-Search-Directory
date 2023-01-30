import React, { useState } from 'react';
import './style.css';
import AnimalShow from './AnimalShow';

function showRandomAnimal() {
  const animals = ['cat', 'dog', 'cow', 'bird', 'tiger'];
  return animals[Math.floor(Math.random() * animals.length)];
}
export default function App() {
  const [animals, setAnimals] = useState([]);
  const handleShowAnimal = () => {
    setAnimals([...animals, showRandomAnimal()]);
  };
  const showAnimal = animals.map((animal, i) => {
    return <AnimalShow type={animal} index={i} />;
  });
  return (
    <div>
      <button onClick={handleShowAnimal}>Show Animal</button>
      <div>{showAnimal}</div>
    </div>
  );
}

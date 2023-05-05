import React, { useState } from 'react';
import './App.css';
import Card from './Components/Card.tsx';
import MyIcon from './Components/MyIcon.tsx';
import AddAnimals from './Components/AddAnimals.tsx';
import ListAnimals from './Components/ListAnimals.tsx';
import Timer from './Components/Timer.tsx';
import Context from './Components/Context.tsx';
import ErrorBoundaries from './Components/ErrorBoundaries.tsx';

const initialAnimalsData = [
  { id: 1, name: 'Fido 🐕' },
  { id: 2, name: 'Snowball 🐈' },
  { id: 3, name: 'Murph 🐈‍⬛' },
  { id: 4, name: 'Zelda 🐈' },
];

function App() {
  const [animals, setAnimals] = useState(initialAnimalsData);

  const handleAddAnimal = (newAnimal) => {
    const newId = animals.length + 1;
    setAnimals([...animals, { id: newId, name: newAnimal }]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Card icon={<MyIcon />} title="BigBoss" showIcon="true">
          AlaBalaPorticala
        </Card>
        <AddAnimals onAddAnimal={handleAddAnimal} />
        <ListAnimals animals={animals} />
        <Timer></Timer>
        <Context></Context>
        <ErrorBoundaries></ErrorBoundaries>
      </header>
    </div>
);
}

export default App;

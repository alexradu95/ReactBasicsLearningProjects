import React, { useState } from 'react';

interface AddAnimalsProps {
  onAddAnimal: (newAnimal: string) => void;
}

function AddAnimals({ onAddAnimal }: AddAnimalsProps) {
  
  const [animalValue, setAnimalValue] = useState("Enter some text");

  const addNewAnimal = () => {
    onAddAnimal(animalValue);
  };

  return (
    <>
      <input
        value={animalValue}
        onChange={(e) => setAnimalValue(e.target.value)}
      />
      <button onClick={addNewAnimal}>Add Animal</button>
    </>
  );
}

export default AddAnimals;

import React, { useEffect } from 'react';

interface Animal {
  id: number;
  name: string;
}

interface ListAnimalsProps {
  animals: Animal[];
}

function ListAnimals({ animals }: ListAnimalsProps) {

  useEffect(() => {
    
    console.log('The animals has been reinitialized')

    return () => console.log('The animals list has been destroyed/updated')

  }, [animals]);

  return (
    <ul>
      {animals.map(({ id, name }) => {
        return <li key={id}>{name}</li>;
      })}
    </ul>
  );
}

export default ListAnimals;

/*
In this code, React Context is used to share a value (in this case, a count and a function to update it) 
among different components without having to pass it down through props.
CountProvider is a component that wraps other components and provides the shared context value to them. 
The useState hook is used to manage the count state and its updating function, and the context provider wraps the children components 
and passes the shared context value to them.
Count and CountButton components use the useContext hook to access the shared context value, which allows them to 
read the current count value and update it without passing the value explicitly through props.
Context component composes the CountProvider, Count, and CountButton components, providing the shared 
context value to the Count and CountButton components by wrapping them with the CountProvider.
*/

import React, { useContext, createContext, useState } from 'react';

// Define a proper type for the context value
interface CountContextType {
  count: number;
  setCount: (value: number | ((prevState: number) => number)) => void;
}

// Create the context with an initial value that matches the CountContextType
// The createContext function creates a new context object that will be shared among different components
const CountContext = createContext<CountContextType>({
  count: 0, // The initial count value
  setCount: () => {}, // An empty function as the initial setCount function
});

// This component wraps other components and provides the shared context value
function CountProvider({ children }) {
  // Here, useState is used to manage the count state and its updating function
  const [count, setCount] = useState(0);

  // The context provider wraps the children components and passes the shared context value to them
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

// This component displays the current count value from the context
function Count() {
  // useContext allows this component to access the shared context value
  const { count } = useContext(CountContext);
  return <h3>{`Current count: ${count}`}</h3>;
}

// This component has a button to increment the count value in the context
function CountButton() {
  // useContext allows this component to access the shared context value
  const { setCount } = useContext(CountContext);
  return (
    // When the button is clicked, the setCount function updates the count value in the context
    <button onClick={() => setCount((count) => count + 1)}>
      Increment
    </button>
  );
}

// This component composes the CountProvider, Count, and CountButton components
function Context() {
  return (
    // CountProvider wraps the other components and provides the shared context value
    <CountProvider>
      <Count />
      <CountButton />
    </CountProvider>
  );
}

export default Context;

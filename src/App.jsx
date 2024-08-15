import './App.css';
import { useEffect, useState } from 'react';
import SubApp from './AppSub';
import { useApp } from './useApp';


function App() {
  const {count, increment, decrement, message} = useApp();
  console.log("count", count);
  const onClick = () => {
    console.log("clicked");
    increment();
  };
  const onClickFromChild = () => {
    console.log("clicked from child");
    increment();
  }
  return (
    <>
      <h1>{count}</h1>
      <h1>{message}</h1>
      <button onClick={onClick}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <SubApp count={count} onClick={onClickFromChild} />
    </>
  );
}



export default App;

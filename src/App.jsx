import './App.css';
import { useEffect, useState } from 'react';
import { useApp} from './hooks/useApp';
import SubApp from './components/AppSub';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './stores/counter';


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  // const {count, increment, decrement, message} = useApp();
  console.log("count", count);
  const onClick = () => {
    console.log("clicked");
    dispatch(increment())
  };
  const onClickFromChild = () => {
    console.log("clicked from child");
    dispatch(increment())
  }
  return (
    <>
    <div style={{border: '10px', padding: '10px', borderColor: '#f00', background:'rgb(236 236 236)'}}>
      <h1 style={{textAlign:'center'}}>App Component</h1>
      <h1>{count}</h1>
      {/* <h1>{message}</h1> */}
      <button onClick={onClick}>Increment</button>
      <button onClick={()=>{
        dispatch(decrement());
      }}>Decrement</button>
      <SubApp count={count} onClick={onClickFromChild} />
    </div>
    </>
  );
}



export default App;

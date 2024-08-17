import './App.css';
import { useEffect, useState } from 'react';
import { useApp} from './hooks/useApp';
import SubApp from './components/AppSub';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './stores/counter';


function App1() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  console.log("count", count);
  const onClick = () => {
    console.log("clicked");
    dispatch(increment());
  };
  const onClickFromChild = () => {
    console.log("clicked from child");
    dispatch(increment());
  }
  return (
    <>
    <div style={{marginTop:'10px', backgroundColor:'rgb(255 151 151)', padding: '10px'}}>
      <h1 style={{textAlign:'center'}}>App Component I</h1>
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



export default App1;

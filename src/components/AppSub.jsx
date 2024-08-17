import { useEffect, useState } from "react";

function SubApp(props) {
    console.log("SubApp props:", props);
    const [count, setCount] = useState(props.count);
    useEffect(() => {
      console.log("SubApp useEffect");
      setCount(props.count + 1);
    }, [props.count]);
    return (
      <>
        <h1>SubApp {count}</h1>
        <button onClick={()=>{
          console.log("clicked from child");
          // setCount(count+1);
          props.onClick();
        }}>Click me at child</button>
      </>
    );
  }

export default SubApp;
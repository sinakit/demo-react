import { useEffect, useState } from "react";

function useApp(){
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("count");
    const increment = () => {
      console.log("call increment");
      const x  = count +1;
      setCount(x);
    };
    const decrement = () => {
      console.log("call decrement");
      const x  = count -1;
      setCount(x);
    };
    useEffect(() => {
      // if (count > 10) {
        console.log("count > 10");
        setMessage("hello join us, "+ count);
      // }
    }, [count]);
    return {count, increment, decrement, message};
  }

  export {useApp};
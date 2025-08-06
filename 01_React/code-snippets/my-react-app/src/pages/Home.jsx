import React, { useCallback, useMemo, useState } from "react";

const Home = () => {
   const [count, setCount] = useState(0);

   const expensiveCalculation = (num) => {
      console.log("running");
      for (let i = 0; i < 100000; i++) {
         num = num + 1;
      }
      console.log("completed");
      return num;
   };

   // normal even when the value is same
   const result = expensiveCalculation(count);

   // const result = useMemo(() => expensiveCalculation(count), [count]);

   return (
      <div>
         Home
         <button onClick={() => setCount(count + 1)}>+</button>
         <button onClick={() => setCount(count)}>same</button>
         <p>result: {result}</p>
         <ParentComp />
      </div>
   );
};

// React.memo
const ParentComp = () => {
   console.log("i am parent component");
   const [count, setCount] = useState(0);

   const handleClick = useCallback(() => {
      console.log("clicked");
   }, []);
   return (
      <>
         <ChildComp value="static value" onClick={handleClick} />
         <button onClick={() => setCount(count + 1)}>+</button>
      </>
   );
};

const ChildComp = React.memo(({ value, onClick }) => {
   console.log("i am child component");
   return (
      <>
         <p>{value}</p>
         <button onClick={onClick}>click me</button>
      </>
   );
});

export default Home;

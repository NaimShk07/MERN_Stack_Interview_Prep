import {
   useState,
   useEffect,
   useRef,
   createContext,
   useContext,
   useReducer,
} from "react";
import useCounter from "../hooks/useCounter";

const MyContext = createContext();

// useReducer
const initialState = { count: 0 };

function reducer(state, action) {
   switch (action.type) {
      case "INC":
         return { count: state.count + 1 };
      case "DEC":
         return { count: state.count - 1 };
      default:
         return state;
   }
}

const About = () => {
   const [count, setCount] = useState(0);
   const myBtn = useRef(null);
   useEffect(() => {
      console.log("something happened");
      console.log(myBtn.current);

      // clean up
      // const timer = setInterval(() => { console.log('running'); }, 1000);
      // return () => clearInterval(timer);
   }, [count]);

   const thisDataWillPass = { id: 1, name: "naim" };

   const [state, dispatch] = useReducer(reducer, initialState);

   // custom hook
   const [value, increment, decrement, reset] = useCounter(0);

   return (
      <div>
         <button ref={myBtn} onClick={() => setCount(count + 1)}>
            +
         </button>
         <p>{count}</p>
         <button onClick={() => setCount(count - 1)}>-</button>
         <MyContext.Provider value={thisDataWillPass}>
            <ChildComponent1 />
         </MyContext.Provider>
         <p>counter 2</p>
         <button onClick={() => dispatch({ type: "INC" })}>+</button>
         <p>count: {state.count}</p>
         <button onClick={() => dispatch({ type: "DEC" })}>-</button>

         <p>counter 3</p>
         <p>{value}</p>
         <button onClick={increment}>+</button>
         <button onClick={decrement}>-</button>
         <button onClick={reset}>reset</button>
         <GreetedProfile name="working naim" />
         <CallFromHere />
      </div>
   );
};

// use context
const ChildComponent1 = () => {
   const value = useContext(MyContext);
   return (
      <>
         <p>Hello world i am child 1!!</p>
         <p>data from user context {value.name}</p>
         <ChildComponent2 />
      </>
   );
};
const ChildComponent2 = () => {
   const value = useContext(MyContext);

   return (
      <>
         <p>Hello world i am child 2!!</p>
         <p>data from user context {value.name}</p>
      </>
   );
};

// hoc
const profile = ({ name }) => {
   return (
      <>
         <p>Welcome, {name}</p>
      </>
   );
};

const withGreeting = (OldComponent) => {
   const NewComponent = (props) => {
      return (
         <>
            <p>hello user</p>
            <OldComponent {...props} />
         </>
      );
   };
   return NewComponent;
};

const GreetedProfile = withGreeting(profile);

// render prop

function DataProvider({ renderName }) {
   const data = "hello from data provider";
   return renderName(data);
}

function CallFromHere() {
   return <DataProvider renderName={(data) => <p>{data}</p>} />;
}

export default About;

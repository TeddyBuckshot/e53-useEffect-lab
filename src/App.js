import {useState, useEffect} from "react";
import './App.css';

function App() {

  let [number, setNumber] = useState(1);
  let [answer, setAnswer] = useState("1");

  const handleInc = () => {
    setNumber(number + 1);
  }

  useEffect(() => {
    if (number % 3 === 0 && number % 5 === 0) {
      setAnswer("fizzbuz")
    } else if (number % 3 === 0) {
      setAnswer("fizz")
    } else if (number % 5 === 0) {
      setAnswer("buzz")
    } else {
      setAnswer(number);
    }
  }, [number])

  return (
    <>
      <button value={number} onClick={handleInc}>Next turn</button>

      <h1>Number is: {number}</h1>
      <h2>Output: {answer}</h2>
    </>
    
  );
}

export default App;

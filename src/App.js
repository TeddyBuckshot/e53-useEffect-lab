import {useState, useEffect} from "react";
import './App.css';

function App() {

  let [number, setNumber] = useState(1);
  let [answer, setAnswer] = useState("1");
  let [name, setName] = useState("anonymous")

  const handleInc = () => {
    setNumber(number + 1);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
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

      <form>
        <input type="text" placeholder="Enter name" value={name} onChange={handleNameChange}/>
      </form>

      <h3>Proving useEffect isn't listening: {name}</h3>

    </>
    
  );
}

export default App;

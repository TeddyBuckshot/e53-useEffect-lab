import {useState, useEffect} from "react";
import './App.css';

function App() {

  let [number, setNumber] = useState(1);
  let [answer, setAnswer] = useState("");
  let [UserInput, setUserInput] = useState("")
  let [name, setName] = useState("")

  const handleInc = () => {
    setNumber(number + 1);
  };

  const handleNameInput = (event) => {
    setUserInput(event.target.value);
  };

  const displayName = (event) => {
    event.preventDefault()
    setName(UserInput);
    setUserInput("")
  };

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
        <input type="text" placeholder="Enter name" value={UserInput} onChange={handleNameInput}/>
        <button onClick={displayName}>Submit</button>
      </form>
      <h3>The name you entered is: {name}</h3>

    </>
    
  );
}

export default App;

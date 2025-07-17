import { useState } from 'react';
import './App.css';
import { MdDelete } from "react-icons/md";
import { HiCheck } from "react-icons/hi";

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState([]);
  const [editindex, setindex] = useState(null);

  function one() {
    if (input1 === "") return;

    if (editindex !== null) {
      const updatedList = [...input2];
      updatedList[editindex] = input1;
      setInput2(updatedList);
      setindex(null);
    } 
    else {
      setInput2([...input2, input1]);
    }
    setInput1('');
  }

  function remove(index) {
    const updated = [...input2.slice(0, index), ...input2.slice(index + 1)];
    setInput2(updated);
  }

  function edit(value, index) {
    setInput1(value);
    setindex(index);
  }

  return (
    <>
      <div className="main">
        <input
          type="text"
          placeholder="Enter your value"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <button onClick={one}>{editindex !== null ? "Update" : "Add"}</button>
      </div>

      {input2.map((item, index) => (
        <p key={index}>
          {item}
          <MdDelete onClick={() => remove(index)}/>
          <HiCheck onClick={() => edit(item, index)}/>
        </p>
      ))}
    </>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

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
    } else {
      setInput2([...input2, input1]);
    }
    setInput1('');
  }

  function remove(index) {
    const updated = input2.filter((_, i) => i !== index);
    setInput2(updated);
  }

  function edit(value, index) {
    setInput1(value);
    setindex(index);
  }

  return (
    <>
      <div className="name mb-3 ml-8 mt-8 text-5xl font-semibold">To<span>do</span></div>

      <div className="main ml-8 mt-8">
        <input
          className="border-2 border-black rounded p-2"
          type="text"
          placeholder="Enter your value"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <button
          onClick={one}
          className=" btn ml-4 border-2 border-black rounded p-2"
        >
          {editindex !== null ? "Update" : "Add"}
        </button>
      </div>

      {input2.map((item, index) => (
        <div
          key={index}
          className=" value ml-8 mt-2 flex items-center justify-between w-fit border border-black p-2 rounded"
        >
          <span>{item}</span>
          <div className="flex pl-2">
            <span
              onClick={() => {
                if (editindex === null) remove(index);
              }}
              className="text-red-600 text-lg cursor-pointer"
            >
              🗑️
            </span>
            <span
              onClick={() => edit(item, index)}
              className="text-green-600 pl-2 text-xl cursor-pointer"
            >
              ✏️
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;

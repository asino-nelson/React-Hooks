import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <div>
        <h3>Clicked {count} times</h3>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter name..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <h3>Welcome {inputValue}</h3>
      </div>
    </div>
  );
};

export default UseState;

import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <div>
        <p>Clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter name..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <p>Welcome {inputValue}</p>
      </div>
    </div>
  );
};

export default UseState;

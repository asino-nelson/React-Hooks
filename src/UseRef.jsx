import { useRef, useState } from "react";

const UseRef = () => {
  const [name, setName] = useState("Nelson");
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>{name}</h2>
      <input type="text" ref={inputRef} value={name} onChange={(event)=>{setName(event.target.value)}} placeholder="Type anything..." />
      <button onClick={onClick}>Clear input</button>
    </div>
  );
};

export default UseRef;

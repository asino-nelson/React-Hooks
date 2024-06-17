import UseEffect from "./UseEffect";
import UseReducer from "./UseReducer";
import UseState from "./UseState";

function App() {
  return (
    <>
      <div>
        <h1>useState</h1>
        <UseState />

        <h1>useReducer</h1>
        <UseReducer />

        <h1>useEffect</h1>
        <UseEffect />
      </div>
    </>
  );
}

export default App;

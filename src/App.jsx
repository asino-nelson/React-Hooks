import Fetch from "./Fetch";
import UseEffect from "./UseEffect";
import UseReducer from "./UseReducer";
import UseRef from "./UseRef";
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

        <h1>useRef</h1>
        <UseRef />

        <p>Fetch</p>
        <Fetch/>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import gamesReducer from "./gamesReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Comp3 from "./Comp3";

function App() {
  const store = createStore(gamesReducer);

  return (
    <div className="App">
      <h1>Redux Payload</h1>
      <Provider store={store}>
        <Comp1 />
        <Comp2 />
        <Comp3 />
      </Provider>
    </div>
  );
}

export default App;

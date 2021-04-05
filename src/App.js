import "./App.css";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import gamesReducer from "./gamesReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

function App() {
  const store = createStore(gamesReducer);

  return (
    <div className="App">
      <h1>Redux Payload</h1>
      <Provider store={store}>
        <Comp1 />
        <Comp2 />
      </Provider>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import useStore from "./store/Store";

function App() {
  const { test } = useStore();
  const { test2 } = useStore();
  var { test3 } = useStore();

  const testfunc = () => {
    useStore.setState({
      test3: 5000,
    });
  };
  return (
    <div className="App">
      {test}
      <input type="button" onClick={test2} value="test" />
      {test3}
      <input type="button" onClick={testfunc} value="test4" />
    </div>
  );
}

export default App;

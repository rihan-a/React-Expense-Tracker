import logo from "./logo.svg";
import "./App.css";

function App() {
  const myName = prompt();

  function greeting(name) {
    if (name) {
      return <h2> Hello, {name}</h2>;
    } else {
      return <h2> Hello, Guest</h2>;
    }
  }

  return (
    <div className="App">
      <h1>Hello First React App</h1>

      {greeting(myName)}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

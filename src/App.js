import "./App.css";
import Balance from "./components/Balance";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="expenses-list">
        <Balance />
      </div>
    </div>
  );
}

export default App;

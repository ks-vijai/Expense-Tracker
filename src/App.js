import "./App.css";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="expenses-list">
        <Balance />
        <IncomeExpenses />
      </div>
    </div>
  );
}

export default App;

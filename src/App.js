import "./App.css";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="expenses-list">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;

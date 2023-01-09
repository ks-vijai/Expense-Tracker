import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const incomeAmount = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => acc + amount, 0)
    .toFixed(2);

  const expenseAmount = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, amount) => acc + amount, 0)
    .toFixed(2);

  return (
    <div className="income-expenses">
      <div>
        <div className="expenses-heading">INCOME</div>
        <div className="income">Rs {incomeAmount}</div>
      </div>
      <div className="expenses-seperator"></div>
      <div>
        <div className="expenses-heading">EXPENSE</div>
        <div className="expenses">Rs {expenseAmount}</div>
      </div>
    </div>
  );
}

export default IncomeExpenses;

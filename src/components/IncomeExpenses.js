import React from "react";

function IncomeExpenses() {
  return (
    <div className="income-expenses">
      <div>
        <div className="expenses-heading">INCOME</div>
        <div className="income">Rs100.00</div>
      </div>
      <div className="expenses-seperator"></div>
      <div>
        <div className="expenses-heading">EXPENSE</div>
        <div className="expenses">Rs240.00</div>
      </div>
    </div>
  );
}

export default IncomeExpenses;

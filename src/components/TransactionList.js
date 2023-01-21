import React from "react";
import Transaction from "../components/Transaction";

function TransactionList() {
  return (
    <div className="expenses-history">
      <div className="history-heading">Transactions</div>
      <div className="history-seperator"></div>
      <Transaction />
    </div>
  );
}

export default TransactionList;

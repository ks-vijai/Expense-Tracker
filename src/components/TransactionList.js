import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Transaction from "../components/Transaction";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="expenses-history">
      <div className="history-heading">History</div>
      <div className="history-seperator"></div>
      {transactions.map((transaction) => (
        <Transaction transaction={transaction} key={transaction.id} />
      ))}
    </div>
  );
}

export default TransactionList;

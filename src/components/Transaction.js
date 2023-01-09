import React from "react";

function Transaction({ transaction }) {
  return (
    <div className="transaction-list">
      <div>{transaction.text}</div>
      <div>{transaction.amount}</div>
    </div>
  );
}

export default Transaction;

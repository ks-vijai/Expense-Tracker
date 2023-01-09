import React from "react";

function Transaction({ transaction }) {
  let sign = transaction.amount < 0 ? "-" : "+";

  return (
    <div
      className={
        transaction.amount < 0
          ? "transaction-list negative-amount"
          : "transaction-list positive-amount"
      }
    >
      <div>{transaction.text}</div>
      <div>
        {sign}Rs{Math.abs(transaction.amount)}
      </div>
    </div>
  );
}

export default Transaction;

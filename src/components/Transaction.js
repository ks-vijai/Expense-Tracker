import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "../App.css";

function Transaction({ transaction }) {
  const { transactions } = useContext(GlobalContext);
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div className="transaction-history">
      <ul className="total-transactions">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={
              transaction.amount < 0
                ? "transaction-list negative-amount"
                : "transaction-list positive-amount"
            }
          >
            <div>{transaction.text}</div>
            <div>
              {transaction.amount < 0 ? "-" : "+"}Rs
              {Math.abs(transaction.amount)}
            </div>
            <button
              onClick={() => {
                deleteTransaction(transaction.id);
              }}
              className="delete-transaction"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transaction;

import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

function AddTransaction() {
  const [transactionCause, setTransactionCause] = useState("");
  const [transactionAmount, setTransactionAmount] = useState();

  const { addTransaction } = useContext(GlobalContext);

  const addNewTransaction = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: transactionCause,
      amount: parseInt(transactionAmount),
    };

    addTransaction(newTransaction);
  };

  return (
    <div>
      <div className="new-transaction">Add new Transaction</div>
      <div className="history-seperator"></div>
      <form onSubmit={(e) => addNewTransaction(e)}>
        <div>
          <label htmlFor="text" className="form-labels">
            Text
          </label>
          <br />
          <input
            type="text"
            value={transactionCause}
            onChange={(e) => setTransactionCause(e.target.value)}
            placeholder="Enter text...."
            className="form-inputs"
          />
        </div>
        <div>
          <label htmlFor="amount" className="form-labels">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(e.target.value)}
            placeholder="Enter Amount...."
            className="form-inputs"
          />
        </div>
        <button className="add-button">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;

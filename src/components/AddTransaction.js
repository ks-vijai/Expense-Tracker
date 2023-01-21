import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddTransaction() {
  const [transactionCause, setTransactionCause] = useState("");
  const [transactionAmount, setTransactionAmount] = useState();

  const { addTransaction } = useContext(GlobalContext);

  const addNewTransaction = (e) => {
    e.preventDefault();

    if (!transactionCause && !transactionAmount) {
      toast.error("Enter Transaction Text and Amount");
    } else if (!transactionCause) {
      toast.error("Enter Transaction Text");
    } else if (!transactionAmount) {
      toast.error("Enter Text and Transaction Amount");
    } else {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text: transactionCause,
        amount: parseInt(transactionAmount),
      };

      addTransaction(newTransaction);
    }
  };

  return (
    <>
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default AddTransaction;

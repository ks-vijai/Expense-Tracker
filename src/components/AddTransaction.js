import React from "react";

function AddTransaction() {
  return (
    <div>
      <div className="new-transaction">Add new Transaction</div>
      <div className="history-seperator"></div>
      <form>
        <div>
          <label htmlFor="text" className="form-labels">
            Text
          </label>
          <br />
          <input
            type="text"
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

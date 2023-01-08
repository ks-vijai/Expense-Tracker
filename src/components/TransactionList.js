import React from "react";

function TransactionList() {
  return (
    <div className="expenses-history">
      <div className="history-heading">History</div>
      <div className="history-seperator"></div>
      <div className="transaction-list">
        <div>Cash</div>
        <div>+500</div>
      </div>
      <div className="transaction-list">
        <div>Cash</div>
        <div>+500</div>
      </div>
    </div>
  );
}

export default TransactionList;

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const totalAmount = amounts
    .reduce((acc, amount) => acc + amount, 0)
    .toFixed(2);

  return (
    <>
      <div className="show-balance">Your Balance</div>
      <div className="balance-amount">Rs {totalAmount}</div>
    </>
  );
}

export default Balance;

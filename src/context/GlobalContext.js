import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

// Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: +500 },
    { id: 2, text: "Pods", amount: -200 },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provide Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

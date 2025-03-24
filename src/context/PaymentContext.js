// context/PaymentContext.js
"use client"
// context/PaymentContext.js
import { createContext, useContext, useState } from "react";

const PaymentContext = createContext(null);

export const PaymentProvider = ({ children }) => {
  const [submitPayment, setSubmitPayment] = useState(null);

  return (
    <PaymentContext.Provider value={{ submitPayment, setSubmitPayment }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }
  return context;
};


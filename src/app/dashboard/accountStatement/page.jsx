"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AccountStatement = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/transactions/statements/{accountid}')
      .then(response => {
        setTransactions(response.data);
      })
      .catch(error => {
        console.error('Error fetching account statement:', error);
      });
  }, []);

  return (
    <div>
      <h2>Account Statement</h2>
      {transactions.map((transaction, index) => (
        <div key={index}>
          <p>Date: {transaction.date}</p>
          <p>Reference: {transaction.reference}</p>
          <p>Motif: {transaction.motif}</p>
          <p>Credit MGA: {transaction.credit} MGA</p>
          <p>Debit MGA: {transaction.debit} MGA</p>
          <p>Solde: {transaction.balance} MGA</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default AccountStatement;


"use client"

import React, { useState, useEffect } from 'react'
import styles from './rigthbar.module.css'
import { getAllAccounts, getLoanInfo } from "../../../../utils/api/data";

const Rightbar = () => {
  const [accounts, setAccounts] = useState([]);
  const [loanInfos, setLoanInfos] = useState([]);

  useEffect(() => {
    getAllAccounts().then((data) => {
      setAccounts(data);
    })
    getAllInfoLoan();
  }, [])

  const getAllInfoLoan = () => {
    let loanLists = [];
    console.log("-----Function Loop-------");
    accounts.forEach(account => {
      getLoanInfo(account.id).then((data) => {
        const loanInfo = {
          loan: data.loan,
          balance: data.balanace,
          loanInterest: data.loanInterest,
          name: account.customerFirstName,
          id: account.id,
        }
        console.log(loanInfo)
        loanLists.push(loanInfo);
      })
    });

    // console.log(loanLists);
    // setLoanInfos(loanLists);
  }

  // console.log(loanInfos);
  
  return (
    <div className={styles.container}>
      <h1>Account Info</h1>
      {
        loanInfos.map((account) => (
          <div key={account.id}>
            <h2>{account.customerFirstName}</h2>
            <div>

            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Rightbar;
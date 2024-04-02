"use client";

import { useEffect, useState } from "react";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";
import { getAllAccounts, sendAccountDataToBackend } from "../../../utils/api/data";

const AccountForm = () => {
  const [accounts, setAccounts] = useState([]);
  const [formData, setFormData] = useState({
    customerFirstName: "",
    customerLastName: "",
    birthdate: "",
    netSalary: "",
    number: "",
    debt: false,
  });

  useEffect(() => {
    getAllAccounts().then((data) => {
      setAccounts(data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const birthDate = new Date(formData.birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    if (
      today <
      new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())
    ) {
      age--;
    }
    if (age < 21) {
      alert("Please, you must be at least 21 years old");
      return;
    }

    sendAccountDataToBackend(formData);
    setFormData({
      customerFirstName: "",
      customerLastName: "",
      birthdate: "",
      netSalary: "",
      number: "",
    });
  };

  return (
    <div>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            id="customerFirstName"
            name="customerFirstName"
            placeholder="First Name"
            value={formData.customerFirstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id="customerLastName"
            name="customerLastName"
            placeholder="Last Name"
            value={formData.customerLastName}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            id="netSalary"
            name="netSalary"
            placeholder="Net Salary"
            value={formData.netSalary}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id="number"
            name="number"
            placeholder="Account Number"
            value={formData.number}
            onChange={handleChange}
            required
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>Accounts List:</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <td><h1>Client name</h1></td>
              <td><h1>Birthdate</h1></td>
              <td><h1>Net Salary</h1></td>
              <td><h1>Account Number</h1></td>
              <td><h1>Debt</h1></td>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account, index) => (
              <tr key={index}>
                <td>{account.customerFirstName} {account.customerLastName}</td>
                <td>{account.birthdate}</td>
                <td>{account.netSalary}</td>
                <td>{account.number}</td>
                <td>{account.debt ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountForm;

import React from "react";
import styles from "@/app/ui/dashboard/sidebar/sidebar.module.css";
import {
  MdAccountBalance,
  MdAccountBalanceWallet,
  MdDashboard,
  MdSupervisedUserCircle,
} from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { GiPayMoney } from "react-icons/gi";
import MenuLink from "./menuLink/menuLink";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Accounts",
        path: "/dashboard/accounts",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Transaction",
        path: "/dashboard/transaction",
        icon: <BiMoneyWithdraw />,
      },
      {
        title: "Transfers",
        path: "/dashboard/transfer",
        icon: <FaMoneyBillTransfer />,
      },
      {
        title: "Balance History",
        path: "/dashboard/balanceHistory",
        icon: <MdAccountBalanceWallet />,
      },
      {
        title: "Money drawal balance",
        path: "/dashboard/balanceMoneyDrawal",
        icon: <MdAccountBalanceWallet />,
      },
      {
        title: "Balance by date",
        path: "/dashboard/balanceByDate",
        icon: <MdAccountBalanceWallet />,
      },
      {
        title: "Account Statement",
        path: "/dashboard/accountStatement",
        icon: <MdAccountBalance />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

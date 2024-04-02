import React from 'react'
import { Inter } from "next/font/google";
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import Navbar from '../ui/dashboard/navbar/navbar'
import styles from '../ui/dashboard/dashboard.module.css'

const inter = Inter({ subsets: ["latin"] });

const layout = ({children}) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          <div className={styles.menu}>
            <Sidebar/>
          </div>
          <div className={styles.content}>
            <Navbar/>
          {children}
          </div>
        </div>
      </body>
    </html>
    
  )
}

export default layout;
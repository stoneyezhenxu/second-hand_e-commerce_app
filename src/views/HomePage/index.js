import React from 'react'
import { Outlet } from 'react-router-dom'
import BottomTabBars from '../Component/BottomTabBars'
import styles from './index.module.css'

export default function HomePage () {

  return <div className={styles.container}>
    {/* nested subcomponent，use Outlet as for placeholder */}
    <div className={styles.middle_body}>
      <Outlet />
    </div>
    {/* tottom tarBar */}
    <div className={styles.bottom_tabbar}>
      <BottomTabBars />
    </div>
  </div >

}

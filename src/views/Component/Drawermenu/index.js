import React, { useState } from "react"
import { SideBar } from 'antd-mobile'
import { useLocation, useNavigate } from "react-router-dom"

import styles from './index.module.css'
import { useEffect } from "react"

// 侧边抽屉组件
export default function Drawermenu () {

  let storage = window.localStorage
  const location = useLocation()
  const { state } = location
  const [categorysData, setCategorysData] = useState([])
  const navigate = useNavigate()
  const [curActiveIndex, setCurActiveIndex] = useState('1')
  const onChangeCallback = (index) => {
    setCurActiveIndex(index)
    navigate('/home', { replace: true, state: { 'curActiveIndex': index } })
  }

  useEffect(() => {

    if (state != null) {
      console.log('Drawermenu curActiveIndex:', state['curActiveIndex'])

      setCurActiveIndex(state['curActiveIndex'])
    }
  }, [location])


  useEffect(() => {
    initCategorysData()
  }, [])  //只执行一次

  const initCategorysData = () => {
    if (storage.getItem('categorysData')) {
      setCategorysData(JSON.parse(storage.getItem('categorysData')))
    }
  }


  console.log('Drawermenu curActiveIndex: ', curActiveIndex)
  return <div>
    <SideBar activeKey={curActiveIndex} onChange={onChangeCallback}>
      {categorysData.map(item => (
        <SideBar.Item key={item.categoryId}
          title={item.title}
          className={styles.sidebar}
        />
      ))}
    </SideBar>
  </div>
}



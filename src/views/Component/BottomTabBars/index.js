import React from 'react'
import { TabBar } from 'antd-mobile'
import { useNavigate, useLocation } from 'react-router-dom'

import styles from './index.module.css'



export default function BottomTabBars () {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  const tabs = [
    {
      key: '/home',
      title: 'Home',
      // icon: <AppOutline />,
      icon: <span className={["iconfont icon-homepage_fill", styles.BottomIcon].join('')}></span>
    },
    {
      key: '/home/post',
      title: 'Post',
      icon: <span className={["iconfont icon-add", styles.BottomIcon].join('')}></span>,
    },
    {
      key: '/home/message',
      title: 'Message',
      icon: <span className={["iconfont icon-message-fill", styles.BottomIcon].join('')}></span>,
    },
    {
      key: '/home/me',
      title: 'Me',
      // icon: <UserOutline />,
      icon: <span className={["iconfont icon-my", styles.BottomIcon].join('')}></span>
    },
  ]

  return (
    <TabBar activeKey={pathname} onChange={value => navigate(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

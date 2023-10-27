import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { List } from 'antd-mobile'
import { getUserName, getAllUserInfos } from '../Utils/global'
import styles from './index.module.css'
import { Image } from 'antd-mobile'
import { List as VirtualizedList, AutoSizer } from 'react-virtualized'
import HeadNav from '../Component/HeadNav'

const sortedMessageByTime = (messagesObj = {}) => {

  if (messagesObj == {}) return {}
  let lastmessageList = Object.keys(messagesObj).map((key) => [key, messagesObj[key].pop()])
  lastmessageList.sort((a, b) => a[1].time < b[1].time ? 1 : -1)
  console.log("lastmessageList: ", lastmessageList)
  return lastmessageList
}

export default function Message () {
  const navigate = useNavigate()
  const [messageObjs, setMessagesObjs] = useState({})
  const [allUserInfos, setallUserInfos] = useState({})
  const [sortedLastMessageList, setSortedLastMessageList] = useState([])
  useEffect(() => {
    let tmpallUserInfos = getAllUserInfos()
    let username = getUserName()
    setMessagesObjs(tmpallUserInfos[username].messageInfos)
    setSortedLastMessageList(sortedMessageByTime(tmpallUserInfos[username].messageInfos))
    setallUserInfos(tmpallUserInfos)

    window.scrollTo(0, 0)

  }, [])

  console.log('messageObjs: ', messageObjs)
  console.log('sortedLastMessageList: ', sortedLastMessageList)

  if (sortedLastMessageList == []) return <HeadNav title='Messages' />

  const rowRenderer = ({ index,
    key,
    style, }) => {

    const item = sortedLastMessageList[index]
    let curUserInfos = allUserInfos[item[0]]

    return <List.Item
      key={key}
      style={style}
      extra={item[1].time}
      onClick={() => {
        navigate('/messagedetails', { replace: true, state: { 'userId': item[0] } })
      }}
      prefix={
        <Image
          src={curUserInfos.avatarUrl}
          style={{ borderRadius: 20 }}
          fit='cover'
          width={60}
          height={60}
        />

      }
      description={item[1].content}
    >
      {item[0]}
    </List.Item>



  }
  return <div className={styles.container}>

    <HeadNav title='Messages' />
    <div className={styles.body}>
      <List >
        <AutoSizer disableHeight>
          {({ width }) => (
            <VirtualizedList
              rowCount={sortedLastMessageList.length}
              rowRenderer={rowRenderer}
              width={width}
              height={sortedLastMessageList.length * 100}
              rowHeight={100}
              overscanRowCount={10}
            />
          )}
        </AutoSizer>
      </List>

    </div>

  </div>
}
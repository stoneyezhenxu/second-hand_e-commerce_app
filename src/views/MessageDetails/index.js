import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './index.module.css'
import { updateAllUserInfos, getUserName, getAllUserInfos } from '../Utils/global'
import { AddCircleOutline, TravelOutline } from 'antd-mobile-icons'
import { List as VirtualizedList, AutoSizer } from 'react-virtualized'
import { Input, List } from 'antd-mobile'
import { getCurrentTimeFromYear2min } from '../Utils/time'
import HeadNav from '../Component/HeadNav'

export default function MessageDetails () {

  const { state } = useLocation()
  const [messageLists, setMessageLists] = useState([])
  const [myAvatarUrl, setmyAvatarUrl] = useState('')
  const [otherAvatarUrl, setotherAvatarUrl] = useState('')
  const [userid, setuserid] = useState('')
  const [inputMessage, setinputMessage] = useState('')

  console.log("state: ", state)
  useEffect(() => {
    window.scrollTo(0, 0)
    if (state) {
      let userId = state.userId
      let allUserInfos = getAllUserInfos()
      let curusername = getUserName()
      if (userId in allUserInfos[curusername]['messageInfos']) {
        let messagelist = allUserInfos[curusername]['messageInfos'][userId]
        setMessageLists(messagelist)
      }

      setuserid(userId)
      setmyAvatarUrl(allUserInfos[curusername].avatarUrl)
      setotherAvatarUrl(allUserInfos[userId].avatarUrl)
      // console.log(`userId:${userId}  messagelist:${messagelist}`)
    }



  }, [state])

  const rowRenderer = ({ index,
    key,
    style, }) => {

    const { obj, time, content } = messageLists[index]

    return obj == 'me' ? (<div key={content} className={styles.leftMessage}>
      <div>{time}</div>
      <div>
        <p>{content}</p>
        <img src={myAvatarUrl} />

      </div>

    </div>) : (<div key={content} className={styles.rightMessage} >
      <div>{time}</div>
      <div>
        <img src={otherAvatarUrl} />
        <p>{content}</p>
      </div>
    </div>)

  }



  const sendMessageCallBack = (message) => {
    console.log('message: ', message)



    let allUserInfos = getAllUserInfos()
    let curusername = getUserName()
    let userId = state.userId

    if ((userId in allUserInfos[curusername]['messageInfos']) == false) {
      allUserInfos[curusername]['messageInfos'][userId] = []
    }

    // 更新自己的数据
    allUserInfos[curusername]['messageInfos'][userId].push({ 'obj': 'me', 'time': getCurrentTimeFromYear2min(), 'content': message })

    //更新对方的数据

    if ((curusername in allUserInfos[userId]['messageInfos']) == false) {
      allUserInfos[userId]['messageInfos'][curusername] = []
    }

    console.log("allUserInfos: ", allUserInfos)

    console.log("curusername: ", curusername)
    console.log("allUserInfos[userId]['messageInfos']", allUserInfos[userId]['messageInfos'])

    allUserInfos[userId]['messageInfos'][curusername].push({ 'obj': 'other', 'time': getCurrentTimeFromYear2min(), 'content': message })


    let messagelist = allUserInfos[curusername]['messageInfos'][userId]
    setMessageLists(messagelist)
    console.log("messagelist: ", messagelist)

    console.log("userId: ", userId)
    console.log("allUserInfos: ", allUserInfos)

    updateAllUserInfos(allUserInfos)


    setinputMessage('')
    window.scrollTo(0, 0)

  }

  if (!state) return <></>
  return <div className={styles.container}>

    <HeadNav title={userid} />
    {messageLists == [] ? '' : <div className={styles.body}>
      <List >
        <AutoSizer disableHeight>
          {({ width }) => (
            <VirtualizedList
              rowCount={messageLists.length}
              rowRenderer={rowRenderer}
              width={width}
              height={messageLists.length * 200}
              rowHeight={200}
              overscanRowCount={10}
            />
          )}
        </AutoSizer>
      </List>
    </div>}
    <div className={styles.sendMessage}>
      <AddCircleOutline fontSize={30} />
      <Input
        placeholder=''
        value={inputMessage}
        onChange={val => {
          setinputMessage(val)
        }}
      />
      <TravelOutline fontSize={30} onClick={() => sendMessageCallBack(inputMessage)} />
    </div>
  </div>
}
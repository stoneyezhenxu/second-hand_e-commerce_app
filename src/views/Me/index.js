import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './index.module.css'
import { getUserName, removeUserName, isAuth, getAllUserInfos } from '../Utils/global'
import { Button, ImageUploader } from "antd-mobile"
import HeadNav from '../Component/HeadNav'
import { UploadImg } from '../Utils/uploadImg'

export default function Me () {

  const location = useLocation()
  const navigate = useNavigate()
  const defaultAvataUrl = 'https://s2.loli.net/2022/10/05/mHKQROAML3vdDC9.png'
  const [fileList, setFileList] = useState([{ url: defaultAvataUrl, }])

  // 设置登录状态state
  const [isLogin, setisLogin] = useState(false)
  const [userInfo, setUserinfo] = useState({
    'avatarUrl': defaultAvataUrl,
    'userName': 'Tourist'
  })



  // 监听页面跳转和logout
  useEffect(() => {
    setisLogin(isAuth())
    window.scrollTo(0, 0)
  }, [location, isLogin])

  useEffect(() => {
    let allUserInfos = getAllUserInfos()
    if (getUserName()) {
      setUserinfo(allUserInfos[getUserName()])
    }
  }, [])





  return <div className={styles.container}>
    <HeadNav title='My Profile' />

    <div className={styles.user}>
      <div className={styles.avata}>
        <img
          src={userInfo.avatarUrl ? userInfo.avatarUrl : defaultAvataUrl}
          alt="avata_img"
          onClick={() => {
          }}
        />
        <div>
          <div>{userInfo.userName ? userInfo.userName : 'Tourist'}</div>
          {/* <Link to="/editprofile">Edit Profile</Link> */}
          <div>{isLogin
            ? (<div className={styles.auth}>
              <Button
                color="success"
                size="small"
                onClick={() => {
                  removeUserName()
                  setisLogin(false)
                  setUserinfo([])
                }}>
                Logout
              </Button>
            </div>) :
            (<div className={styles.edit}>
              <Button
                color="success"
                size="small"
                onClick={() => { navigate(`/login`) }}>
                login
              </Button>
            </div>

            )
          }</div>
        </div>
      </div>
    </div>


    <div className={styles.body}>
      <div className={styles.list}>
        <Button onClick={() => { navigate('/offerhistory', { replace: true }) }}>Offer History</Button>
      </div>
      <div className={styles.list}>
        <Button onClick={() => { navigate('/wishlist', { replace: true }) }}>Wish List</Button>
      </div>
      <div className={styles.list}>
        <Button onClick={() => { navigate('/postlist', { replace: true }) }}>Post List</Button>
      </div>
    </div>

  </div>

}
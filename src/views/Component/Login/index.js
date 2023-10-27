import styles from './index.module.css'
import cicle_logo from '../../../asserts/logo/circle_logo.png'
import apple_logo from '../../../asserts/icon_png/apple.png'
import google_logo from '../../../asserts/icon_png/google.png'
import { LeftOutline } from 'antd-mobile-icons'
import React, { useEffect, useState } from 'react'
import { setUserName, getAllUserInfos, setAllUserInfos } from '../../Utils/global'
import { Form, Input, Button, Toast } from 'antd-mobile'
import {
  useNavigate, useLocation
} from 'react-router-dom'

export default function Register ({ loginCallback }) {
  const navigate = useNavigate()
  const location = useLocation()
  console.log("location: ", location)
  const [allUserInfos, setallUserInfos] = useState({})
  useEffect(() => {
    setallUserInfos(getAllUserInfos())
  }, [])



  const tipsCallbacl = () => {
    Toast.show({
      content: 'this function is coming soon !'
    })
  }

  const summitCallback = ({ username, password }) => {

    //ios keyboard show up will change the  viewport, so we need to reset the viewport
    window.scrollTo(0, 0)

    let curUserInfos = allUserInfos[username]

    if (username.length < 1 || password.length < 1) {
      Toast.show({
        content: 'username or password error!'
      })
    }



    if (curUserInfos) {
      if (password == curUserInfos.password) {
        Toast.show({
          content: 'Login success !',
          duration: 500,
          afterClose: () => {
            setUserName(username)
            navigate('/', { replace: true })
          }
        }
        )


      }
      else {
        Toast.show({
          content: 'password is error !'
        })
      }
    }

    else {
      Toast.show({
        content: 'usename is no exits,please Sign up !'
      })
    }

  }


  return <div className={styles.contanier}>
    <div className={styles.contanierContent}>
      <div className={styles.head_line}>
        <p>Welcome</p>
        <img src={cicle_logo} />
      </div>

      <div onClick={() => {
        window.scrollTo(0, 0)
        navigate('/home')
      }} className={styles.back}>
        <LeftOutline />
      </div>


      <div className={styles.form} >

        <Form
          onFinish={summitCallback}
          footer={
            <Button block type='submit' size='large'>
              Login
            </Button>
          }
        >

          <Form.Item
            name='username'
            label='username'
            className={styles.username}
            rules={[{ required: true, message: 'username is required' }]}
          >
            <Input type='text' placeholder='username' />
          </Form.Item>

          <Form.Item
            name='password'
            label='password'
            rules={[{ required: true, message: 'password is required' }]}
          >
            <Input type='password' placeholder='password' onBlur={() => window.scrollTo(0, 0)} />
          </Form.Item>

        </Form>

      </div>

      <div className={styles.third_login}>
        <div>
          <span>Don't have an account ? </span>
          <span className={styles.sign_up} onClick={() => navigate('/register')}>Sign up</span>
        </div>
        <div className={styles.bottom_line}>
          OrWith
        </div>
        <div className={styles.logo_login} onClick={tipsCallbacl} >
          <div><img src={google_logo} /></div>
          <div>Sign in with Google</div>
        </div>
        <div className={styles.logo_login} onClick={tipsCallbacl}>
          <div>
            <img src={apple_logo} />
          </div>
          <div>Sign in with Apple</div>
        </div>
      </div>
    </div>

  </div>
}
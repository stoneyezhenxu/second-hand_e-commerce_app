import styles from './index.module.css'
import circle_logo from '../../../asserts/logo/circle_logo.png'
import { LeftOutline } from 'antd-mobile-icons'
import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Toast } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { getAllUserInfos, updateAllUserInfos } from '../../Utils/global'

export default function Register () {
  const navigate = useNavigate()
  const [allUserInfos, setallUserInfos] = useState({})
  useEffect(() => {
    setallUserInfos(getAllUserInfos())
  }, [])


  const summitCallback = ({ username, email, password }) => {

    window.scrollTo(0, 0)
    console.log('username: ', username)
    console.log('email: ', email)
    console.log('password: ', password)
    if (username.length < 1 || email.length < 1 || password.length < 1) {
      Toast.show({
        content: "name or email or password can't empty !"
      })
      return
    }



    if (allUserInfos[username]) {
      Toast.show({
        content: 'username already exists!'
      })
    }
    else {



      allUserInfos[username] = {
        'wishList': [],
        'postList': [],
        'avatarUrl': 'https://s2.loli.net/2022/10/05/mHKQROAML3vdDC9.png',
        'offers': [],
        'orders': [],
        'userName': username,
        'userId': username,
        'password': password,
        'email': email,
        'messageInfos': {}
      }


      updateAllUserInfos(allUserInfos)

      Toast.show({
        content: 'register is successful !'
      })
      navigate('/login')
    }




  }



  return <div className={styles.contanier}>

    <div className={styles.contanierContent}>
      <div className={styles.head_line}>
        <p>Sign Up</p>
        <img src={circle_logo} />
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
            <>
              <Button block type='submit' size='large'>
                Register
              </Button>
            </>
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
            name='email'
            label='email'
            className={styles.email}
            rules={[{ required: true, message: 'email is required' }]}
          >
            <Input type='email' placeholder='email' />
          </Form.Item>
          <Form.Item
            name='password'
            label='password'
            rules={[{ required: true, message: 'password is required' }]}
          >
            <Input type='password' placeholder='password' />
          </Form.Item>

          <div>

          </div>
        </Form>
        <div className={styles.tips}>
          <div>Already have an account?
            <span className={styles.login} onClick={() => {
              window.scrollTo(0, 0)
              navigate('/login')
            }}> Log in</span>
          </div>
        </div>
      </div>
    </div>

  </div>
}
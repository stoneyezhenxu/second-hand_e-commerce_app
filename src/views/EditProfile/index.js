import React, { useEffect } from 'react'
import {
  useNavigate,
  useLocation
} from 'react-router-dom'

// import './index.css'
import styles from './index.module.css'
import { NavBar, Space, Toast, Swiper, Avatar, Popup, Modal } from 'antd-mobile'
import { useState } from 'react'






export default function EditProfile () {

  const navigate = useNavigate()
  const { state } = useLocation()
  const [commentsShow, setcommentsShow] = useState(false)
  const [contactShow, setcontactShow] = useState(false)


  return <div>

    Edit Profile

  </div >

}
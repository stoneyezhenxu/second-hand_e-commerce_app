import React from 'react'
import {
  useLocation,
  useNavigate
} from 'react-router-dom'

import { NavBar, Steps, Modal, Button } from 'antd-mobile'

import styles from './index.module.css'
import {
  getUserName, getAllUserInfos, updateAllUserInfos
} from '../Utils/global'

import HeadNav from '../Component/HeadNav'


const { Step } = Steps
export default function CheckYourOffer () {


  const navigate = useNavigate()
  const { state } = useLocation()

  if (!state) return <NavBar onBack={() => navigate(-1)} >Check Your Offer</NavBar>
  let { productInfos, offerDetails } = state
  const { imgs, title, seller } = productInfos
  const { offerPrice, time, stepInfos, itemId } = offerDetails

  return <div className={styles.container}>


    <HeadNav title='Check Your Offer' />
    <div className={styles.c}>
      <div className={styles.ItemContent} >
        <div>
          <p>Seller: {seller}</p>
          <p>{time}</p>
        </div>
        <div>
          <div>
            <img src={imgs[0]} width='100px' height='100px' />
          </div>
          <div>
            <p>{title}</p>
            <p>Offer price:   {offerPrice}</p>
          </div>
        </div>
      </div>

      <div className={styles.steps}>
        <Steps direction='vertical'>
          <Step title='Your Offer is send to seller' description='finish time: 12-01 12:30' status='finish' />
          <Step title='Waiting for seller comfirm' status='process' />
          {stepInfos.status == 0 ? '' : stepInfos.status == 1 ? <Step title='Seller accept your offer' description={stepInfos.time} status='finish' /> : <Step title='Seller reject your offer' description={`finish time: ${stepInfos.time}`} status='error' />}
        </Steps>
      </div>

      <div className={styles.deletcButton}>
        <Button color='primary' onClick={() => {
          Modal.confirm({
            content: 'Are your sure to delete the offer !',
            confirmText: 'Yes',
            cancelText: 'No',
            onConfirm: () => {
              let allUserInfos = getAllUserInfos()
              let username = getUserName()
              allUserInfos[username]['offers'][itemId].isValid = 0
              updateAllUserInfos(allUserInfos)
              navigate('/offerhistory')
            },
            onCancel: () => { }
          })
        }}>Delete the Offer</Button>
      </div>
    </div>

  </div >

}

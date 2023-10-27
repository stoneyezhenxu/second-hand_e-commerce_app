import React, { useEffect, useState } from 'react'
import {
  useNavigate, useLocation
} from 'react-router-dom'

import { Space, Modal, Radio, TextArea, Input, Form, Button } from 'antd-mobile'
import styles from './index.module.css'

import { getAllUserInfos, updateAllUserInfos, getUserName } from '../Utils/global'
import { getCurrentTime } from '../Utils/time'
import HeadNav from '../Component/HeadNav'

export default function Buy () {
  const navigate = useNavigate()
  const { state } = useLocation()
  console.log("buy: state: ", state)


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [state])

  // address infos
  const [deliveryAddress, setDeliveryAddress] = useState('')

  // pickup face-to-face;   delivery
  const [isPickOrDelivery, setIsPickOrDelivery] = useState('pickup')





  const onComfirmedCallback = ({ offerPrice }) => {

    const { productInfos } = state
    const { productId, category, imgs, title, price, desc, seller } = productInfos

    Modal.confirm({
      content: 'Your Offer is Completed !',
      confirmText: 'Continue Shopping',
      cancelText: 'Offer History',
      onConfirm: () => {
        navigate('/home')
      },
      onCancel: () => navigate('/offerhistory')
    })

    let allUserInfos = getAllUserInfos()
    let curUsername = getUserName()
    console.log("buy allUserInfos[seller]['offers'].length:", allUserInfos[curUsername]['offers'].length)



    // add an offer record for curusername (buyer)
    let curtime = getCurrentTime()
    let newOfferObj = {
      'productId': productId,
      'offerPrice': offerPrice,
      'time': curtime,
      'itemId': allUserInfos[curUsername]['offers'].length,
      'stepInfos': { 'status': 0, 'time': curtime },   //0: waiting，1:agree, 2:rejected
      'isValid': 1 // 1:valid，2:not valid 
    }
    // add an order record for seller
    let newOrderObj = {
      'buyer': getUserName(),
      'productId': productId,
      'offerPrice': offerPrice,
      'time': curtime,
      'isPickOrDelivery': isPickOrDelivery,
      'deliveryAddress': deliveryAddress,
      'status': 0,
      'offerId': allUserInfos[curUsername]['offers'].length,
      'itemId': allUserInfos[seller]['orders'].length,
      'isValid': 1 // 1有效，2无效

    }

    allUserInfos[curUsername]['offers'].push(newOfferObj)
    allUserInfos[seller]['orders'].push(newOrderObj)
    updateAllUserInfos(allUserInfos)

    window.scrollTo(0, 0)

  }



  if (!state) return <></>




  const { productInfos } = state
  console.log("productInfos: ", productInfos)
  const { imgs, title, price } = productInfos

  return <div className={styles.container}>

    <HeadNav title='Place an Offer' />
    <div className={styles.body}>
      <div className={styles.bodyCard1}>
        <div>
          <img src={imgs[0]} />
        </div>
        <div>
          <div>{title}</div>
          <div>{price}</div>
        </div>
      </div>

      <div className={styles.bodyCard2}>
        <div>
          Delivery Address
        </div>
        <div>
          <div>
            <Radio.Group defaultValue='pickup' onChange={(val) => setIsPickOrDelivery(val)}>
              <Space direction='vertical'>
                <Radio value='pickup' style={{
                  '--icon-size': '18px',
                  '--font-size': '14px',
                  '--gap': '10px',
                }}>Pick up face-to-face (If you choose
                  this option, please talk to seller first.)</Radio>
                <Radio value='delivery' style={{
                  '--icon-size': '18px',
                  '--font-size': '14px',
                  '--gap': '10px',
                }}>Delivery</Radio>
              </Space>
            </Radio.Group>
          </div>

          <div>
            <TextArea defaultValue={'Please type your address'} value={deliveryAddress} onChange={val => setDeliveryAddress(val)} style={{ '--font-size': '10px' }} showCount />
          </div>

        </div>
      </div>

    </div>


    <div className={styles.bottom}>
      <div className={styles.form}></div>
      <Form
        layout='horizontal'
        onFinish={(value) => onComfirmedCallback(value)}
        footer={
          <Button block type='submit' color='primary' size='large'>
            Comfirmed Offer
          </Button>
        }
      >
        <Form.Item
          label='Asking Price'
          name='askingPrice'
          extra={<a>{price}</a>}
        // rules={[{ required: true, message: 'Asking Price must be required' }]}
        >
        </Form.Item>
        <Form.Item
          label='Offer Price'
          name='offerPrice'
          rules={[{ required: true, message: 'Offer Price must be required' }]}
        >
          <Input onChange={console.log} placeholder='Input the offer price' />
        </Form.Item>
      </Form>




    </div>

  </div>

}
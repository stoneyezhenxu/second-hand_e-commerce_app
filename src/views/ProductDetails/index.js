import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import styles from './index.module.css'
import { Toast, Swiper, Avatar, Popup, TextArea, Form, Button } from 'antd-mobile'
import { useState } from 'react'
import { MessageOutline, UserContactOutline, EyeOutline, CloseOutline } from 'antd-mobile-icons'
import {
  updateAllUserInfos, getUserName, getAllUserInfos,
  getAllProductCommentInfos, updateAllProductCommentInfos,
  updateProductsData, getProductsData
} from '../Utils/global'
import { getCurrentTime } from '../Utils/time'
import HeadNav from '../Component/HeadNav'





export default function ProductDetails () {
  const navigate = useNavigate()
  const { state } = useLocation()
  const [commentsShow, setcommentsShow] = useState(false)
  const [commentList, setCommentList] = useState([])
  const [curUserInfos, setcurUserInfos] = useState({})
  const [allUserInfos, setAllUserInfos] = useState({})
  const [viewcount, setViewcount] = useState(1)



  const updateViewCount = (productId) => {
    let allproductinfos = getProductsData()
    let curviewcount = allproductinfos[productId].viewCount
    allproductinfos[productId].viewCount = curviewcount + 1
    updateProductsData(allproductinfos)
    setViewcount(curviewcount + 1)
  }
  useEffect(() => {
    setAllUserInfos(getAllUserInfos())
    let username = getUserName()
    setcurUserInfos(getAllUserInfos()[username])

  }, [])



  useEffect(() => {
    let allProductCommentInfos = getAllProductCommentInfos()
    if (state['productInfos']) {
      let productId = state['productInfos'].productId
      if (allProductCommentInfos[productId]) {
        setCommentList(allProductCommentInfos[productId])
      }
      updateViewCount(productId)
    }


    window.scrollTo(0, 0)

  }, [state])


  if (!state) return <></>

  let productInfos = state['productInfos']
  const { productId, imgs, title, price, desc, seller } = productInfos
  const addToWishCallback = (productId) => {

    let curUsername = getUserName()
    let allUserInfos = getAllUserInfos()
    if (allUserInfos[curUsername]['wishList'].indexOf(productId) == -1) {
      Toast.show({
        content: 'Add to wishList successfully !',
        afterClose: () => {
          allUserInfos[curUsername]['wishList'].push(productId)
          updateAllUserInfos(allUserInfos)
        },
      })
    }

    else {
      Toast.show({
        content: 'Product is  already in wishlist'
      })
    }



  }



  const CommentPopup = ({ commentsShow, setcommentsShow, productId }) => {

    return (
      <Popup
        visible={commentsShow}
        onMaskClick={() => {
          setcommentsShow(false)
        }}
        position='bottom'
        bodyStyle={{
          height: '40vh',
          backgroundColor: 'skyblue',
          borderTopLeftRadius: '14px',
          borderTopRightRadius: '14px',
          overflowY: 'scroll'

        }}
      >
        <div className={styles.comments}>
          <div className={styles.commentsTop}>
            <MessageOutline fontSize={26} />
            <CloseOutline fontSize={26} onClick={() => {
              setcommentsShow(false)
            }} />
          </div>

          <div className={styles.commentsBody}>
            {commentList.map((item, index) => {

              let commentUserInfos = allUserInfos[item.username]
              console.log("commentUserInfos: ", commentUserInfos)
              return (<div className={styles.commentsItem} key={'commentsItem' + index}>
                <div className={styles.commentsUserInfo}>
                  <img src={commentUserInfos.avatarUrl} />
                  <span>{item.username}</span>
                </div>

                <div className={styles.commentsItemContent}>
                  {item.content}
                </div>

                <div className={styles.commentsItemTime}>
                  {item.time}
                </div>
              </div>)
            }
            )}
          </div>

          <div className={styles.addComment}>
            <Form layout='horizontal'
              onFinish={(value) => addNewCommentCallback(value, productId)}
              footer={
                <Button block type='submit' color='primary' size='medium'>
                  提交
                </Button>
              }
            >
              <Form.Item name='newcomment'>
                <TextArea
                  placeholder='add your comment'
                  maxLength={60}
                  rows={2}
                  showCount
                />
              </Form.Item>

            </Form>

          </div>
        </div>

      </Popup>

    )

  }


  const addNewCommentCallback = ({ newcomment }, productId) => {
    console.log("newcomment: ", newcomment, productId)

    let newcommenObj = {
      'username': curUserInfos.userName,
      'content': newcomment,
      'time': getCurrentTime(),
    }
    let allproductComment = getAllProductCommentInfos()
    if (!allproductComment[productId]) {
      let newAllproductComment = { ...allproductComment, productId: [newcommenObj] }
      updateAllProductCommentInfos(newAllproductComment)
    }
    else {
      updateAllProductCommentInfos(allproductComment[productId].push(newcommenObj))

    }

    setCommentList([...commentList, newcommenObj])
    console.log('commentList: ', commentList)

  }

  return <div className={styles.container}>


    <HeadNav title='ProductDetails' />

    <div className={styles.swiper}>
      <Swiper >
        {imgs.map((item) => {
          return <Swiper.Item key={item}>
            <div className={styles.swiperItem}>
              <img src={item} alt={item} />
            </div>
          </Swiper.Item>
        })}
      </Swiper>
    </div>

    <div className={styles.body}>
      <div className={styles.seller}>
        <Avatar src={curUserInfos.avatarUrl} className={styles.avatar} />
        <span>Seller: {seller} </span>
      </div>

      <div className={styles.dividingLine}></div>

      <div className={styles.title}>
        {title}
      </div>

      <div className={styles.price}>
        {price}
      </div>

      <div className={styles.desc}>
        {desc}
      </div>




    </div>


    <div className={styles.bottom}>

      <div className={styles.messages}>
        <div><UserContactOutline fontSize={26} onClick={() => {
          navigate('/messagedetails', { replace: true, state: { 'userId': seller } })
        }} />
          <span> Contact seller</span>
        </div>

        <div>
          <EyeOutline fontSize={26} />
          <span>{viewcount} views</span>
        </div>
      </div>

      <div className={styles.bottomBlock}>

        <div className={styles.comments} onClick={() => setcommentsShow(true)}>
          <MessageOutline fontSize={26} />
          <div> Comments:
            <span> {commentList.length}</span>
          </div>
          <CommentPopup
            commentsShow={commentsShow}
            setcommentsShow={setcommentsShow}
            productId={productId} />



        </div>

        <div>
          <button onClick={() => addToWishCallback(productId)}>Add to Wish</button>
        </div>

        <div>
          <button onClick={() => { navigate('/buy', { replace: true, state: { 'productInfos': productInfos } }) }}>Buy</button>
        </div>
      </div>
    </div>

  </div >

}
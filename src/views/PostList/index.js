import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './index.module.css'
import { getUserName, getAllUserInfos, getProductsData } from '../Utils/global'
import HeadNav from '../Component/HeadNav'

export default function PostList () {
  const navigate = useNavigate()
  const { state } = useLocation()
  const [postlist, setPostList] = useState([])
  const [productsData, setProductsData] = useState([])
  useEffect(() => {
    let username = getUserName()
    let allUserInfos = getAllUserInfos()
    setPostList(allUserInfos[username]['postList'])
    setProductsData(getProductsData())
  }, [state])


  const PostListContent = () => {
    return <div className={styles.postlistContent}>

      {postlist.map((productID) => {
        let { category, imgs, title, price, seller } = productsData[productID]

        return <div className={styles.postlistItem} key={category + productID}>
          <div>Seller: {seller}</div>
          <div className={styles.postlistItemInfos} onClick={() => { navigate('/productDetails', { replace: true, state: { 'productInfos': productsData[productID] } }) }}>
            <div>
              <div><img src={imgs[0]} /></div>
              <div>{title}</div>
            </div>
            <div>{price}</div>
          </div>
        </div>
      })}
      <div className={styles.totalItems}>Total Items: {postlist.length}</div>
    </div>


  }


  return <div className={styles.container}>

    <HeadNav title='PostListDetails' />
    <div className={styles.body}>
      {postlist.length > 0 ? <PostListContent /> : ''}
    </div>
  </div>

}
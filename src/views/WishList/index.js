import React, { useEffect, useState } from 'react'
import {
  useNavigate, useLocation
} from 'react-router-dom'
import styles from './index.module.css'
import { getUserName, getAllUserInfos, getProductsData } from '../Utils/global'
import HeadNav from '../Component/HeadNav'
export default function WishList () {

  const navigate = useNavigate()
  const { state } = useLocation()
  const [wishlist, setWishList] = useState([])
  const [productsData, setProductsData] = useState([])
  useEffect(() => {
    let username = getUserName()
    let allUserInfos = getAllUserInfos()
    setWishList(allUserInfos[username]['wishList'])
    setProductsData(getProductsData())
  }, [state])


  const WishListContent = () => {
    return <div className={styles.wishlistContent}>
      {wishlist.map((productID) => {
        let { category, imgs, title, price, desc, seller } = productsData[productID]
        return <div className={styles.wishlistItem} key={category + productID}>
          <div>Seller: {seller}</div>
          <div className={styles.wishlistItemInfos} onClick={() => { navigate('/productDetails', { replace: true, state: { 'productInfos': productsData[productID] } }) }}>
            <div>
              <div><img src={imgs[0]} /></div>
              <div>{title}</div>
            </div>
            <div>{price}</div>
          </div>
        </div>
      })}
      <div className={styles.totalItems}>Total Items: {wishlist.length}</div>
    </div>


  }


  return <div className={styles.container}>
    <HeadNav title='WishListDetails' />
    <div className={styles.body}>
      {wishlist.length > 0 ? <WishListContent /> : ''}
    </div>
  </div>

}
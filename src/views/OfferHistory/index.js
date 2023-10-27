import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, CapsuleTabs, Space, Radio } from 'antd-mobile'
import styles from './index.module.css'
import {
  getProductsData, getUserName, getAllUserInfos, getCurrentUserInfos, updateAllUserInfos
} from '../Utils/global'
import { getCurrentTime } from '../Utils/time'
import HeadNav from '../Component/HeadNav'


export default function OfferHistory () {

  const navigate = useNavigate()
  const [curActiveIndex, setCurActiveIndex] = useState('1')
  const [curUserInfos, setCurUserInfos] = useState({})
  const [allProductInfos, setAllProductInfos] = useState({})
  const tarbars = [{ id: 1, title: 'My Offers' }, { id: 2, title: 'Waitting List' }, { id: 3, title: 'My Orders' }]


  useEffect(() => {
    window.scrollTo(0, 0)
    setCurUserInfos(getCurrentUserInfos())
    setAllProductInfos(getProductsData())

  }, [])


  const Middle = ({ curUserInfos, curActiveIndex }) => {

    console.log('curUserInfos: ', curUserInfos)

    let userDatas = []
    switch (Number(curActiveIndex)) {
      case 1:
        userDatas = curUserInfos.offers ? curUserInfos.offers : []
        break
      case 2:
        userDatas = curUserInfos['orders'] ? curUserInfos['orders'] : []
        userDatas = userDatas.filter((item) => item.status == 0)
        break

      case 3:
        userDatas = curUserInfos.orders ? curUserInfos.orders : []
        // 根据status状态过滤，status:0:待处理,1:拒绝,2：接受

        break

      default:
        break
    }

    userDatas = userDatas.filter((item) => item.isValid == 1)


    let statusInfos = { 0: 'Waiting', 1: 'Agree', 2: 'Reject' }

    const waitingListsStatusChangeCallback = (value, offerId, buyer, productId, index) => {
      console.log("waitingListsStatusChangeCallback: ", value, productId, index)

      let newCurUserInfos = { ...curUserInfos }
      let curUername = getUserName()

      let allUserInfos = getAllUserInfos()
      newCurUserInfos['orders'][index].status = Number(value)
      allUserInfos[curUername] = newCurUserInfos

      allUserInfos[buyer]['offers'][offerId].stepInfos = { 'status': Number(value), 'time': getCurrentTime() }

      updateAllUserInfos(allUserInfos)
      setCurUserInfos(newCurUserInfos)
    }

    return userDatas == [] ? '' : <div>
      <Grid columns={1} >
        {userDatas.map((item, index) => {

          let { imgs, title, price, seller } = allProductInfos[item.productId]
          console.log('index: ', index)
          console.log('item: ', item)

          return <Grid.Item key={'iteminfos' + index} onClick={() => {
            if (curActiveIndex == 1) {
              navigate('/checkyouroffer', { replace: true, state: { 'productInfos': allProductInfos[item.productId], 'offerDetails': item } })
            }
          }
          }>
            <div className={styles.ItemContent} >
              <div>
                {curActiveIndex == 1 ? <p>Seller: {seller}</p> : <p>Buyer: {item['buyer']} </p>}

                <p>{item['time']}</p>
              </div>

              <div>
                <div className={styles.ItemContentLeft}>
                  <div><img src={imgs[0]} width='100px' height='100px' /></div>
                  {curActiveIndex == 1 ? <div>Status: {statusInfos[item.stepInfos.status]} </div> :
                    curActiveIndex == 2 ? <div>
                      <Radio.Group onChange={(value) => waitingListsStatusChangeCallback(value, item.offerId, item.buyer, item.productId, item.itemId)}>
                        <Space >
                          <Radio value='1' style={{
                            '--icon-size': '16px',
                            '--font-size': '12px',
                            '--gap': '6px',
                          }}>Agree</Radio>
                          <Radio value='2' style={{
                            '--icon-size': '16px',
                            '--font-size': '12px',
                            '--gap': '6px',
                          }}>Reject</Radio>
                        </Space>
                      </Radio.Group>
                    </div> : curActiveIndex == 3 ? <div>
                      State: {statusInfos[item.status]}
                    </div> : ''}

                </div>

                <div className={styles.ItemContentRight}>
                  <p>{title}</p>
                  <p>Asking price:   {price}</p>
                  <p>Offer price:   {item['offerPrice']}</p>

                </div>

              </div>

            </div>
          </Grid.Item>
        }
        )}
      </Grid>
    </div >

  }



  if (allProductInfos == {}) return <></>



  return <div className={styles.container}>
    <HeadNav title='Offer History' />
    <div className={styles.body}>
      <CapsuleTabs activeKey={curActiveIndex} onChange={(index) => setCurActiveIndex(index)} >
        {
          tarbars.map((item) => {
            return <CapsuleTabs.Tab title={item.title} key={item.id.toString()}>
              <Middle
                key={'middle' + item.id}
                curUserInfos={curUserInfos}
                curActiveIndex={curActiveIndex} />
            </CapsuleTabs.Tab>
          }
          )
        }
      </CapsuleTabs>
    </div>
  </div >

}

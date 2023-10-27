import React, { useState, useEffect } from 'react'
import {
  Grid,
  CapsuleTabs,
  Popup,
  Picker,
  Form,
  Button,
  Space
} from 'antd-mobile'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './index.module.css'
import { TravelOutline, DownOutline } from 'antd-mobile-icons'
import { getCurrentProduct, getProductsData, getCategorysData } from '../Utils/global'
import Drawermenu from '../Component/Drawermenu'

export default function Home () {
  const location = useLocation()
  const navigate = useNavigate()
  const { state } = location
  const [curActiveIndex, setCurActiveIndex] = useState('1')
  const [productsData, setProductsData] = useState([])
  const [categorysData, setCategorysData] = useState([])
  const [isShowDrawermenu, setIsShowDrawermenu] = useState(false)
  const [isShowRefine, setIsShowRefine] = useState(false)
  const [popupDatas, setpopupDatas] = useState({ 'category': [[]], 'price': [[]], 'condition': [[]] })


  useEffect(() => {

    window.scrollTo(0, 0)
    if (state != null) {
      setCurActiveIndex(state['curActiveIndex'])
    }

    setIsShowDrawermenu(false)
    //路由一更新，重新渲染ProductsData数据
    setProductsData(getProductsData())

  }, [location])

  useEffect(() => {
    //初始化CategorysData数据
    let catedatas = getCategorysData()
    setCategorysData(catedatas)

    setpopupDatas(resetPopdatas(catedatas))
  }
    , [])  //只执行一次


  const resetPopdatas = (catedatas) => {

    return {
      'category': [['All', ...catedatas.map((item) => item.title)]],
      'condition': [['All', '95+%', '95%', '90%', '80%', '70%', '60%', '50%', '40%', '30%', '20%',
        '10%']],
      'price': [['All', '0~10€', '11~50€', '51~100€', '101~200€', '201~300€', '301~400€', '401~500€', '501~600€', '600~999€', '1000+€']]
    }


  }

  const onChangeCallback = (index) => {
    setCurActiveIndex(index)

  }

  const productClickCallback = (item) => {

    navigate('/productDetails', {
      replace: true, state: {
        'productInfos': getCurrentProduct(item.productId)
      }
    })
  }

  const Middle = ({ data, category }) => {

    console.log("data: ", data)

    const newData = data.filter((item) => item.category == category)
    return <div className={styles.itemContainer}>
      <Grid columns={3} gap={8}>
        {newData.map((item, index) => <Grid.Item key={item.title + index} onClick={() => productClickCallback(item)}>
          <div className={styles.itemcontent} >
            <img src={item.imgs[0]} width='100px' height='100px' />
            <div>{item.title}</div>
            <p>{item.price}</p>
          </div>
        </Grid.Item>
        )}
      </Grid>
    </div >

  }


  const doFilter = (category = '', price = '', condition = '') => {

    console.log(`doFilter: category=${category}; price=${price}; condition=${condition}`)


    let newproductsData = getProductsData()
    let cateindex = -1

    if (category != 'All') {
      newproductsData = newproductsData.filter((item) => item.category == category)
      cateindex = categorysData.map((item) => item.title).indexOf(category) + 1

    }

    if (price != 'All') {
      let selectPrice = price.substring(0, price.length - 1).split('~')
      newproductsData = newproductsData.filter((item) => {
        let itemprice = Number(item.price.substring(1, item.price.length))
        return itemprice >= Number(selectPrice[0]) && itemprice <= Number(selectPrice[1])
      })
    }

    if (productsData.length != newproductsData.length) {
      setProductsData([...newproductsData])
    }

    if (cateindex != -1 && cateindex != curActiveIndex) {
      console.log("cateindex: ", cateindex)
      setCurActiveIndex(`${cateindex}`)
    }


    setIsShowRefine(false)

  }


  const Refine = () => {



    const RefineFormSummit = (val) => {


      console.log("val: ", val)
      let category = val.Category ? val.Category.preValue : popupDatas.category[0][0]
      let price = val.Price ? val.Price.preValue : popupDatas.price[0][0]
      let condition = val.Condition ? val.Condition.preValue : popupDatas.condition[0][0]

      doFilter(category, price, condition)


    }


    const MobileField = ({
      columns = [['86', '01', '02', '03']],
      value = { preValue: columns[0][0], realValue: '' },
      onChange
    }) => {
      const [visible, setVisible] = useState(false)

      const triggerValue = (changedValue) => {
        onChange?.({ ...value, ...changedValue })
      }

      const onPreValueChange = (value) => {
        const v = value[0]
        if (v === null) return
        triggerValue({ preValue: v })
      }
      return (
        <>
          <Space align='end' onClick={() => setVisible(true)}>
            <div className={styles.refineCateContent}>
              {value.preValue}
            </div>
            <DownOutline />
          </Space>
          <Picker
            columns={columns}
            visible={visible}
            onClose={() => {
              setVisible(false)
            }}
            value={[value.preValue]}
            onConfirm={onPreValueChange}
          />
        </>
      )
    }

    return <div className={styles.popupRefine}>

      <div className={styles.Refineheadline}>
        <u onClick={() => setIsShowRefine(false)}> CANCLE</u>
        <div> Refine search</div>
        <u onClick={() => setpopupDatas(resetPopdatas(categorysData))} > RESET</u>
      </div>

      <div className={styles.Refineform}>
        <Form
          layout='horizontal'
          onFinish={RefineFormSummit}
          initialValues={{
            mobile: { preValue: '86', realValue: '' },
          }}
          footer={
            <Button block type='submit' color='primary' size='large'>
              Refine
            </Button>
          }>
          <Form.Item
            label='Category'
            name='Category'
          >
            <MobileField columns={popupDatas.category} />
          </Form.Item>


          <Form.Item
            label='Price'
            name='Price'
          >
            <MobileField columns={popupDatas.price} />
          </Form.Item>
          {/* 
          <Form.Item
            label='Condition'
            name='Condition'
          >
            <MobileField columns={popupDatas.condition} />
          </Form.Item> */}


          {/* <Form.Item
            label='Location'
            name='Location'
            childElementPosition='right'
          >
            <DownOutline />
          </Form.Item> */}






        </Form>


      </div>


    </div >
  }

  return <div className={styles.container}>

    <div className={styles.mynav}>
      <div className='iconfont icon-menu' onClick={() => {
        setIsShowDrawermenu(!isShowDrawermenu)
      }}> </div>
      <div> Home</div>
      <TravelOutline fontSize={30} onClick={() => {
        setIsShowRefine(!isShowRefine)
      }} />
    </div>

    {isShowDrawermenu ? <Drawermenu /> : <CapsuleTabs activeKey={curActiveIndex} onChange={onChangeCallback} >
      {categorysData.map((item, index) => <CapsuleTabs.Tab title={item.title} key={item.categoryId}>
        <Middle data={productsData} category={item.title} />
      </CapsuleTabs.Tab>)}
    </CapsuleTabs>}



    {/* Refine */}

    <div className={styles.RefinePopup}>
      <Popup
        visible={isShowRefine}
        onMaskClick={() => {
          setIsShowRefine(false)
        }}
        bodyStyle={{ height: '40vh' }}
        bodyClassName={styles.RefinePopupBody}
      >
        <Refine />
      </Popup>
    </div>


  </div>
}
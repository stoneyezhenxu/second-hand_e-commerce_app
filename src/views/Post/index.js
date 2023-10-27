import React, { useRef, useState, useEffect } from 'react'
import {
  Form, Input, Button, TextArea, SideBar, ImageUploader, Dropdown, Toast
} from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { getCategorysData, getProductsData, updateProductsData, getUserName, getAllUserInfos, updateAllUserInfos } from '../Utils/global'
import styles from './index.module.css'
import { UploadImg } from '../Utils/uploadImg'
import HeadNav from '../Component/HeadNav'



export default function Post () {

  const navigate = useNavigate()
  const ref = useRef(null)
  const [categorysData, setCategorysData] = useState([])
  const [isShowSelectCategory, setIsShowSelectCategory] = useState(false)
  const [curActiveIndex, setCurActiveIndex] = useState(1)

  window.scrollTo(0, 0)

  useEffect(() => {
    setCategorysData(getCategorysData())
  }, [])

  const submitCallback = (values) => {
    console.log('Todo form values: ', values)
    let formdataDict = {
      'productId': '', 'productId': '', 'imgs': [], 'title': '', 'price': '', 'desc': '', 'seller': '', 'viewCount': 0
    }

    let productsData = getProductsData()
    let curUserName = getUserName()
    let allUserInfos = getAllUserInfos()
    let newProductId = productsData.length


    formdataDict.productId = newProductId
    formdataDict.category = categorysData[curActiveIndex - 1].title
    formdataDict.price = values.price
    formdataDict.desc = values.desc
    formdataDict.imgs = values.img.map((value) => value.url)
    formdataDict.title = values.name
    formdataDict.seller = curUserName


    allUserInfos[curUserName]['postList'].push(newProductId)
    updateProductsData([...productsData, formdataDict])
    updateAllUserInfos(allUserInfos)
    Toast.show({
      content: 'Post product is successful',
      afterClose: () => {
        navigate('/home', { replace: true })
      },
    })



  }


  const onChangeCallback = (ref, index) => {
    console.log('onChangeCallback index:', index)
    setCurActiveIndex(index)
    setIsShowSelectCategory(false)
    ref.current?.close()
  }

  return <div className={styles.containerPost}>
    <HeadNav title='Post' />

    <div className={styles.bodyForm}>
      <Form
        name='form'
        onFinish={submitCallback}
        footer={
          <Button block type='submit' color='primary' size='large'>
            提交
          </Button>
        }
      >
        <Form.Item name='name' label='ProductsName' rules={[{ required: true }]}>
          <Input placeholder='productsName' onBlur={() => { window.scrollTo(0, 0) }} />
        </Form.Item>

        <Form.Item name='category' label='Category' >
          <Dropdown onChange={() => setIsShowSelectCategory(true)} ref={ref}>
            {curActiveIndex != 1 ? categorysData[curActiveIndex - 1].title : 'Sport & Hobby'}
            <Dropdown.Item key='sorter' title='' >
              {isShowSelectCategory ? <div >
                <SideBar activeKey={curActiveIndex} onChange={(index) => onChangeCallback(ref, index)}>
                  {categorysData.map(item => (
                    <SideBar.Item key={item.categoryId}
                      title={item.title}
                    />
                  ))}
                </SideBar>
              </div> : null}
            </Dropdown.Item>
          </Dropdown>

        </Form.Item>

        <Form.Item name='price' label='Price' rules={[{ required: true }]}>
          <Input placeholder='price ' onBlur={() => { window.scrollTo(0, 0) }} />
        </Form.Item>

        <Form.Item name='desc' label='Description' >
          <TextArea placeholder='description ' onBlur={() => { window.scrollTo(0, 0) }} />
        </Form.Item>

        <Form.Item name='img' label='Upload Images' rules={[{ required: true }]}>
          <ImageUploader
            upload={UploadImg}
            maxCount={3}
            multiple={true}
          />
        </Form.Item>

      </Form>
    </div>

  </div >
}

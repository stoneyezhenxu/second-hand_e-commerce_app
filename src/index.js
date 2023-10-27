import React from 'react'
import ReactDOM from 'react-dom/client'
import Routers from './Routers'
import initData from './asserts/datas/initData'

import './index.css'

// import alibaba iconfont
import './asserts/iconfont/iconfont.css'

//current app version
let appversion = 17
//init data
initData(appversion)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Routers />
)

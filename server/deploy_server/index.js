//npm install express --save-dev  下载express包
//npm install http-proxy-middleware --save-dev  下载代理中间件

const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const { createProxyMiddleware } = require('http-proxy-middleware')
const cors = require('cors')

app.use(cors())


// 加载静态文件 打包好的静态文件放在dist下
app.use(express.static('./build'))

// 设置服务器代理，解决跨域问题
// target：目标地址
app.use('/upload', createProxyMiddleware({ target: 'https://sm.ms/api/v2', changeOrigin: true }))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'))
})

//监听端口
app.listen(8080, (err) => {
  if (err) {
    console.log(err)
    return null
  }

  return console.log('8080 port starting')
})

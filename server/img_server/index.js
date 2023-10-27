var express = require('express')
var multer = require('multer')
var fs = require('fs')
const cors = require('cors')
var app = express()


// 配置跨域请求中间件(服务端允许跨域请求)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*') // 设置允许来自哪里的跨域请求访问（值为*代表允许任何跨域请求，但是没有安全保证）
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS") // 设置允许接收的请求类型
  res.header("Access-Control-Allow-Headers", "Content-Type,request-origin") // 设置请求头中允许携带的参数
  res.header("Access-Control-Allow-Credentials", "true") // 允许客户端携带证书式访问。保持跨域请求中的Cookie。注意：此处设true时，Access-Control-Allow-Origin的值不能为 '*'
  res.header("Access-control-max-age", 10000) // 设置请求通过预检后多少时间内不再检验，减少预请求发送次数,10秒
  next()
})



var upload = multer({
  //设置文件缓存地址
  dest: './temp'
})

//http://139.199.86.158:8100/upload/singleImage
/* 全局常量 */
const HOST = '139.199.86.158'            //服务器地址
const PORT = 8100                 //端口号
const SUFFIXES = {
  //合法后缀
  png: true,
  jpg: true,
  jpeg: true,
  bmp: true,
  webp: true,
  gif: true
}
const MAX_SIZE = 1024 * 1024 * 10             //文件大小上限 10m
const IMAGE_URL = 'img'             //图片url前缀
const IMAGE_DIRECTORY = './imgs'    //本地保存图片路径



app.use('/img', express.static('./imgs'))    //配置静态资源

/* 工具方法 */

//校验后缀
function checkSuffix (suffix) {

  return SUFFIXES[suffix]
}

//校验文件大小
function checkSize (size) {

  return size <= MAX_SIZE
}

//构造返回结果
function resultMessage (code, message, data = null) {

  return {

    code: code,
    message: message,
    data: data
  }
}

//正确返回结果
function ok () {

  return resultMessage(200, 'ok')
}

//带数据的正确返回结果
function ok (data) {

  return resultMessage(200, 'ok', data)
}

//错误返回结果
function err (message) {

  return resultMessage(400, message)
}

//指定长度随机小写字母字符串
function randomStr (len) {

  let name = ''
  while (len-- > 0) {

    name += String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }
  return name
}

//获取随机文件名（当前时间戳-六位随机字符串）
function generateRandomFileName () {

  let name = ''
  name += new Date().getTime()
  name += '-' + randomStr(5)
  return name
}

//删除文件
function deleteFile (file) {

  console.log('删除文件：', file)
  fs.unlinkSync(file)
}

//接受单个文件
app.post('/upload/singleImage', upload.single('file'), (req, res) => {


  console.log(req.file)

  let file = req.file

  if (file == undefined) {

    res.send(err('未检测到文件！'))
    res.end()
    return
  }


  let originalName = file.originalname

  //校验文件名称格式
  if (originalName.split('.').length != 2) {

    res.send(err('图片名称格式错误！'))
    res.end()
    return
  }


  let suffix = originalName.split('.')[1].toLowerCase()

  //校验文件大小
  if (!checkSize(file.size)) {

    res.send(err('图片过大！请确保图片大小在20k*10以内！'))
    res.end()
    return
  }

  //校验文件后缀
  if (!checkSuffix(suffix)) {

    res.send(err('图片格式错误！'))
    res.end()
    return
  }

  //转存文件
  let tempFile = file.path

  let fileName = generateRandomFileName()
  let fullFileName = `${fileName}.${suffix}`
  let filePath = `${IMAGE_DIRECTORY}/${fullFileName}`

  fs.readFile(tempFile, (err, data) => {

    if (err) {

      res.send(err('图片保存错误！'))
      res.end()
      return
    }

    fs.writeFileSync(filePath, data)
  })

  //构造url并返回
  let url = `http://${HOST}:${PORT}/${IMAGE_URL}/${fullFileName}`
  res.send(ok(url))
  res.end()

  //删除缓存文件
  deleteFile(tempFile)
  return
})

//接收多个文件
app.post('/upload/multiImages', upload.array('files', 9), (req, res) => {

  console.log(req.files)

  res.set({

    'content-type': 'application/json; charset=utf-8'
  })

  let files = req.files

  if (files == undefined) {

    res.send(err('未接收到文件！'))
    res.end()
    return
  }

  //返回结果集
  let results = []

  //遍历处理文件
  for (let idx in files) {

    let file = files[idx]
    let tempFile = file.path
    result = {

      name: file.originalname,
      url: '',
      err: ''
    }
    results[idx] = result

    //校验文件名称格式
    let originalName = file.originalname
    if (originalName.split('.').length != 2) {

      result.err = '图片名称格式错误！'
      deleteFile(tempFile)
      continue
    }

    //校验文件后缀
    let suffix = originalName.split('.')[1]
    if (!checkSuffix(suffix)) {

      result.err = '图片类型错误！'
      deleteFile(tempFile)
      continue
    }

    //校验文件大小
    if (!checkSize(file.size)) {

      result.err = '图片过大！请确保图片大小在20k以内！'
      deleteFile(tempFile)
      continue
    }

    //转存文件

    let fileName = generateRandomFileName()
    let fullFileName = `${fileName}.${suffix}`
    let filePath = `${IMAGE_DIRECTORY}/${fullFileName}`

    let flag = true
    fs.readFile(tempFile, (err, data) => {

      if (err) {

        result.err = "图片保存错误！"
        flag = false
      } else {

        fs.writeFileSync(filePath, data)
      }


    })


    //构造url并填写信息列表
    let url = `http://${HOST}:${PORT}/${IMAGE_URL}/${fullFileName}`

    if (flag) {

      result.url = url
    }

    //删除缓存文件
    deleteFile(tempFile)
  }

  //返回信息列表
  res.send(ok(results))
  res.end()

  return
})



// 处理cors跨域问题
// app.use(cors())
var server = app.listen(PORT, () => {

  console.log(`picture hosting service is listening on port ${PORT}`)
})
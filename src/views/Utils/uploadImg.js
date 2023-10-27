
import axios from "axios"

const UploadImg = async (file) => {
  const formData = new FormData()
  formData.append('file', file)
  let res = await axios.post('http://139.199.86.158:8100/upload/singleImage', formData)
  console.log("res: ", res)
  let responseUrl = res ? res.data.data : ''
  console.log("responseUrl: ", responseUrl)
  return { url: responseUrl }
}

export { UploadImg }
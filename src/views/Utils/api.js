import axios from 'axios'

const axios_obj = axios.create({
  timeout: 10000,
  headers: {
    'Authorization': '4bGYiden28ByNxo4idIKXFZrltQdAdxC',
    'Content-Type': 'multipart/form-data'
  }
})


export { axios_obj }
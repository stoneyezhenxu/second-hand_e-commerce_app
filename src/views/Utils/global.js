
const getUserName = () => localStorage.getItem('userName')
const setUserName = (value) => localStorage.setItem('userName', value)
const removeUserName = () => localStorage.removeItem('userName')
const isAuth = () => !!getUserName()
const getAllUserInfos = () => JSON.parse(localStorage.getItem('allUserInfos'))
const updateAllUserInfos = (value) => localStorage.setItem('allUserInfos', JSON.stringify(value))
const getProductsData = () => JSON.parse(localStorage.getItem('productsData'))
const updateProductsData = (value) => localStorage.setItem('productsData', JSON.stringify(value))
const getCurrentUserInfos = () => JSON.parse(localStorage.getItem('allUserInfos'))[getUserName()]
const getCategorysData = () => JSON.parse(localStorage.getItem('categorysData'))
const getAllProductCommentInfos = () => JSON.parse(localStorage.getItem('allProductCommentInfos'))
const updateAllProductCommentInfos = (value) => localStorage.setItem('allProductCommentInfos', JSON.stringify(value))
const getCurProductCommentInfosById = (id) => JSON.parse(localStorage.getItem('allProductCommentInfos'))[id]
const getCurrentProduct = (id) => getProductsData()[id]
export {
  getUserName,
  setUserName,
  removeUserName,
  isAuth,
  getAllUserInfos,
  getProductsData,
  getCurrentProduct,
  updateProductsData,
  updateAllUserInfos,
  getCurrentUserInfos,
  getAllProductCommentInfos,
  updateAllProductCommentInfos,
  getCurProductCommentInfosById,
  getCategorysData
}




import { NavBar } from 'antd-mobile'
import styles from './index.module.css'
import {
  useNavigate,
  useLocation
} from 'react-router-dom'

export default function HeadNav ({ title }) {
  const navigate = useNavigate()
  const location = useLocation()

  return <div className={styles.top_nav}>
    <NavBar onBack={() => {
      // console.log("location: ", location)
      // if (['/messagedetails', '/home', '/productDetails'].includes(location.pathname)) {
      //   navigate('/home')
      // }
      // else
      //   navigate(-1)
      navigate('/home')
    }} >{title}</NavBar>
  </div>

}
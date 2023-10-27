import { Navigate, useLocation, useNavigate } from 'react-router-dom'

import { isAuth } from '../../Utils/global'
const AuthRoute = ({ children }) => {
    const isLogin = isAuth()
    const location = useLocation()

    if (!isLogin) {
        return (
            <Navigate to="/login" replace='true' state={{ from: location }} />
        )
    }
    return children
}

export default AuthRoute
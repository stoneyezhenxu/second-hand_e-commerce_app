import { Skeleton } from 'antd-mobile'
import React, { Suspense, lazy } from 'react'
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom'

const HomePage = lazy(() => import('./views/HomePage'))
const Home = lazy(() => import('./views/Home'))
const Message = lazy(() => import('./views/Message'))
const Post = lazy(() => import('./views/Post'))
const Me = lazy(() => import('./views/Me'))
const Login = lazy(() => import('./views/Component/Login'))
const Register = lazy(() => import('./views/Component/Register'))
const Test = lazy(() => import('./views/Test'))
const ProductDetails = lazy(() => import('./views/ProductDetails'))
const Buy = lazy(() => import('./views/Buy'))
const WishList = lazy(() => import('./views/WishList'))
const PostList = lazy(() => import('./views/PostList'))
const OfferHistory = lazy(() => import('./views/OfferHistory'))
const CheckYourOffer = lazy(() => import('./views/CheckYourOffer'))
const EditProfile = lazy(() => import('./views/EditProfile'))
const MessageDetails = lazy(() => import('./views/MessageDetails'))
const AuthRoute = lazy(() => import('./views/Component/AuthRoute'))



const Routers = () => {
    return (
        <HashRouter>
            {/* setup loading page */}
            <Suspense fallback={<Loading />}>
                <Routes>
                    {/* default /home page */}
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<HomePage />} >
                        <Route path="/home" element={<Home />} />
                        <Route path="/home/message" element={<AuthRoute><Message /></AuthRoute>} />
                        <Route path="/home/post" element={<AuthRoute><Post /></AuthRoute>} />
                        <Route path="/home/me" element={<Me />} />
                    </Route>
                    <Route path='/login' element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/productDetails" element={<AuthRoute> <ProductDetails /></AuthRoute>} />
                    <Route path="/buy" element={<Buy />} />
                    <Route path="/wishlist" element={<AuthRoute><WishList /></AuthRoute>} />
                    <Route path="/postlist" element={<AuthRoute><PostList /></AuthRoute>} />
                    <Route path="/offerhistory" element={<AuthRoute><OfferHistory /></AuthRoute>} />
                    <Route path="/checkyouroffer" element={<CheckYourOffer />} />
                    <Route path="/editprofile" element={<AuthRoute><EditProfile /></AuthRoute>} />
                    <Route path="/messagedetails" element={<AuthRoute><MessageDetails /></AuthRoute>} />
                </Routes>
            </Suspense>
        </HashRouter>
    )
}

const Loading = () => {
    return (
        <>
            <Skeleton.Title animated={true} />
            <Skeleton.Paragraph animated={true} />
        </>
    )
}


export default Routers
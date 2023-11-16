import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
export default function Navbar({ isLogin, setIsLogin }) {
    const items = useSelector(state => state.cart.items);
    return (
        <>
            {
                isLogin ? 
                <nav>
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div className='nav_right'>
                        {/* <a>Cart</a> */}
                        <Link to="/Cart">
                            Cart
                            {
                                items.length !== 0 && items.length
                            }
                        </Link>
                        <a onClick={() => {
                            setIsLogin(false)
                            sessionStorage.removeItem('isLogin')}}>
                                Logout</a>
                    </div>
                </nav>
                :
                <nav className='login'>
                    <div className='nav_right'>
                        <a>Login</a>
                    </div>
                </nav>              
            }
        </>
    )
}
// hero section
// delete button
// search
// category filtering
// 
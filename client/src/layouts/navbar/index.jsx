import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BasketContext } from '../../context/BasketContext'
import { wishlistContext } from '../../context/WishlistContext'
import { userContext } from '../../context/userContext'
import "./index.scss"

function Navbar() {

    const { token, setToken, decodedToken, setDecodedToken, removeToken } = useContext(userContext)
    const [open, setOpen] = useState(false)
    const { productCount } = useContext(BasketContext)
    const { wish } = useContext(wishlistContext)

    let wishCount = wish.length;

    return (
        <nav>
            <div className='container'>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-between align-items-center">
                        <NavLink to={"/"}><h2>Exclusive</h2></NavLink>
                        <menu>
                            <NavLink to={"/"}>Home</NavLink >
                            <NavLink to={"/contact"}>Contact</NavLink >
                            <NavLink to={"/about"}>About</NavLink >
                            <NavLink to={"/signup"}>Sign up</NavLink >
                        </menu>
                        <div className="input">
                            <input type="text" placeholder='What are you looking for?' />
                            <i className='fa-solid fa-magnifying-glass'></i>
                        </div>
                        <div className="items">
                            <NavLink className={"wish"} to={"/wishlist"}>
                                <i className='fa-regular fa-heart'></i>
                                <span className='wishCount'>{wishCount}</span>
                            </NavLink>
                            <NavLink to={"/shop"}>
                                <div div className="basketIcon">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    <span className=' productCount'>{productCount}</span>
                                </div>
                            </NavLink>
                            {decodedToken ?
                                <div className='logout'>
                                    <NavLink to={"/user"} className="user">
                                        <i class="fa-regular fa-user"></i>
                                    </NavLink>
                                    <span>{decodedToken.username}</span>
                                    <div onClick={removeToken} className="exit">
                                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                        <button>log out</button>
                                    </div>
                                </div>
                                :
                                <NavLink to={"/login"} className="login">
                                    <i class="fa-regular fa-user"></i>
                                </NavLink>
                            }
                            {decodedToken && decodedToken.role === "Admin" ? <NavLink to={"/admin"} >Admin</NavLink> : null}
                        </div>
                    </div>
                </div >
            </div >
        </nav >
    )
}

export default Navbar
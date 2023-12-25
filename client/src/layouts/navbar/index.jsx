import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BasketContext } from '../../context/BasketContext'
import { wishlistContext } from '../../context/WishlistContext'
import "./index.scss"
import { userContext } from '../../context/userContext'
import UseTheme from '../../hooks/useTheme'

function Navbar() {

    const { theme, AddDarkTheme, RemoveDarkTheme } = UseTheme()
    const { user, setUser } = useContext(userContext)
    const [open, setOpen] = useState(false)
    const { basket, setBasket, AddToBasket, RemoveFromBasket, CheckCount, decreaseCount, increaseCount, totalPrice, setTotalPrice, productCount } = useContext(BasketContext)
    const { wish } = useContext(wishlistContext)
    const subTotal = basket.reduce((acc, x) => acc + x.price * x.count, 0)

    let wishCount = wish.length;

    return (
        <nav>
            <div className='container'>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-between align-items-center">
                        <h2>Exclusive</h2>
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
                            <div className='basket' >
                                <div className="basketIcon">
                                    <i class="fa-solid fa-cart-shopping" onClick={() => setOpen(!open)}></i>
                                    <span className=' productCount'>{productCount}</span>
                                </div>
                                <div className={`subBasket ${open ? "active" : "subBasket"}`}>
                                    {basket.length === 0 ?
                                        <div className='empty'>
                                            <h2 className='d-flex align-self-center'>Nothing here!</h2>
                                        </div>
                                        : basket.map((x, id) => <>
                                            <div className="cart" key={id}>
                                                <div className="imgbox">
                                                    <img src={x.image} alt="" />
                                                </div>
                                                <div className="info">
                                                    <h6>{x.name}</h6>
                                                    <span className='price'><strong>Price: </strong>{x.price}</span>
                                                </div>
                                                <div className="right">
                                                    <div className="btn" onClick={() => RemoveFromBasket(x)}>x</div>
                                                    <div className="counter">
                                                        <button onClick={() => increaseCount(x)}>+</button>
                                                        <span className='count'>{CheckCount(x)}</span>
                                                        <button onClick={() => decreaseCount(x)}>-</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                        )
                                    }
                                    < div className="total">
                                        <h3>Subtotal</h3>
                                        <span className='totalPrice'>${parseFloat(subTotal)}</span>
                                    </div>
                                </div>
                            </div>
                            {user ?
                                <div className='logout'>
                                    <NavLink to={"/user"} className="user">
                                        <i class="fa-regular fa-user"></i>
                                    </NavLink>
                                    <span>{user.name}</span>
                                    <div onClick={() => setUser(null)} className="exit">
                                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                        <button>log out</button>
                                    </div>
                                </div>
                                :
                                <NavLink to={"/login"} className="login">
                                    <i class="fa-regular fa-user"></i>
                                </NavLink>
                            }
                            <div className='changeTheme'>
                                <input type="checkbox" className="checkbox" id="checkbox" />
                                <label htmlFor="checkbox" className="checkbox-label">
                                    <i className="fas fa-moon" onClick={AddDarkTheme}></i>
                                    <i className="fas fa-sun" onClick={RemoveDarkTheme}></i>
                                    <span className="ball"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </nav>
    )
}

export default Navbar
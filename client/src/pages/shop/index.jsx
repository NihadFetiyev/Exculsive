import React, { useContext } from 'react'
import "./index.scss"
import Button from '../../components/button'
import { BasketContext } from '../../context/BasketContext'
import UseTheme from '../../hooks/useTheme'
import { NavLink } from 'react-router-dom'

function ShopPage() {
    const [theme, AddDarkTheme, RemoveDarkTheme] = UseTheme()
    const { basket, setBasket, AddToBasket, RemoveFromBasket, CheckCount, decreaseCount, increaseCount, totalPrice, setTotalPrice, productCount } = useContext(BasketContext)
    const subTotal = basket.reduce((acc, x) => acc + x.price * x.count, 0)

    return (
        <section id='shopPage'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <NavLink to={"/"}>
                            <span className='home'>Home /</span>
                        </NavLink>
                        <span>Cart</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mb-4">
                        <ul>
                            <li>Product</li>
                            <li>Name</li>
                            <li>Price</li>
                            <li>Quantity</li>
                            <li>Subtotal</li>
                        </ul>
                        {basket.length === 0 ?
                            <div className='empty'>
                                <h2 className='d-flex align-self-center'>Nothing here!</h2>
                            </div> :
                            basket.map((x, id) =>
                                <>
                                    <ul key={id}>
                                        <i onClick={() => RemoveFromBasket(x)} className="fa-solid fa-square-xmark"></i>
                                        <li>
                                            <div className="imgbox">
                                                <img src={x.image} alt="" />
                                            </div>
                                        </li>
                                        <li>{x.name}</li>
                                        <li>${x.price}</li>
                                        <li>
                                            <div className="counter">
                                                <button onClick={() => increaseCount(x)}>+</button>
                                                <span className='count'>{CheckCount(x)}</span>
                                                <button onClick={() => decreaseCount(x)}>-</button>
                                            </div>
                                        </li>
                                        <li>${parseFloat(subTotal)}</li>
                                    </ul>
                                </>
                            )
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-between mb-5">
                        <div className='button'>Return To Shop</div>
                        <div className='button'>Update Cart</div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-7">
                        <div className="coupon">
                            <span>Coupon Code</span>
                            <Button children={"Apply Coupon"} />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="total">
                            <h3>Cart Total</h3>
                            <ul className='subtotal'>
                                <li>
                                    <span>Subtotal:</span>
                                    <span>${parseFloat(subTotal)}</span>
                                </li>
                                <li>
                                    <span>Shipping:</span>
                                    <span>Free</span>
                                </li>
                                <li>
                                    <span>Total:</span>
                                    <span>${parseFloat(subTotal)}</span>
                                </li>
                            </ul>
                            <div className="process">
                                <NavLink to={"/checkout"}>
                                    <Button children={"Procees to checkout"} />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShopPage
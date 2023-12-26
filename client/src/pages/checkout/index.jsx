import React, { useContext, useState } from 'react'
import "./index.scss"
import UseTheme from '../../hooks/useTheme'
import { NavLink } from 'react-router-dom'
import { BasketContext } from '../../context/BasketContext'

import CashByCard from '../../assets/images/CashByCard.png'
import Button from '../../components/button'

function Checkout() {
  const [show, setshow] = useState(1)
  function showButton(index) {
    setshow(index)
  }
  const [theme, AddDarkTheme, RemoveDarkTheme] = UseTheme()
  const { basket, setBasket, AddToBasket, RemoveFromBasket, CheckCount, decreaseCount, increaseCount, totalPrice, setTotalPrice, productCount } = useContext(BasketContext)
  const subTotal = basket.reduce((acc, x) => acc + x.price * x.count, 0)

  return (
    <section id='checkout'>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-3 py-5">
            <NavLink to={"/"}>
              <span className='home'>Home /</span>
            </NavLink>
            <NavLink to={"/user"}>
              <span className='home'>My Account /</span>
            </NavLink>
            <NavLink to={"/detail"}>
              <span className='home'>Product/</span>
            </NavLink>
            <NavLink to={"/shop"}>
              <span className='home'>View Cart/</span>
            </NavLink>
            <span>CheckOut</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2>Billing Details</h2>
            <ul className='box'>
              <li>
                <span>First Name*</span>
                <div className="minibox"></div>
              </li>
              <li>
                <span>Company Name</span>
                <div className="minibox"></div>
              </li>
              <li>
                <span>Street Address*</span>
                <div className="minibox"></div>
              </li>
              <li>
                <span>Apartment, floor, etc. (optional)</span>
                <div className="minibox"></div>
              </li>
              <li>
                <span>Town/City*</span>
                <div className="minibox"></div>
              </li>
              <li>
                <span>Phone Number*</span>
                <div className="minibox"></div>
              </li>
              <li>
                <span>Email Address*</span>
                <div className="minibox"></div>
              </li>
            </ul>
            <div className="input">
              <input type="checkbox" />
              <span>Save this information for faster check-out next time</span>
            </div>
          </div>
          <div className="col-md-6">
            {basket.map((x, id) =>
              <>
                <ul className='basket' key={id}>
                  <li className='imgName'>
                    <div className="imgbox">
                      <img src={x.image} alt="" />
                    </div>
                    <li>{x.name}</li>
                  </li>
                  <li>${x.price}</li>
                </ul>
              </>
            )}
            <div className="subtotal">
              <div className="totalBox">
                <span>Subtotal:</span>
                <span>${parseFloat(subTotal)}</span>
              </div>
              <div className="totalBox">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="totalBox">
                <span>Total:</span>
                <span>${parseFloat(subTotal)}</span>
              </div>
              <div className="cash">
                <div className="bank">
                  <span className="round" onClick={()=>setshow(1)}>
                    <div className={show===1 ? "miniround display" : "miniround"}></div>
                  </span>
                  <span>Bank</span>
                </div>
                <div className="svg">
                  <img src={CashByCard} alt="" />
                </div>
              </div>
              <div className="bank">
                <span className='round' onClick={()=>setshow(2)}>
                  <div className={show===2 ? "miniround display" : "miniround"}></div>
                </span>
                <span>Cash on delivery</span>
              </div>
              <div className="coupon">
                <div className="code">Coupon Code</div>
                <Button children={"Apply Coupon"} />
              </div>
              <div className="order">
                <Button children={"Place Order"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout
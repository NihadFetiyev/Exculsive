import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import "./index.scss"
import { wishlistContext } from '../../context/WishlistContext'
import { BasketContext } from '../../context/BasketContext';
function WishList() {

  const { basket, setBasket, AddToBasket } = useContext(BasketContext)
  const { wish, setWish, addTOWish, deleteFromWish } = useContext(wishlistContext)

  // let wishCount = wish.length;
  return (
    <main>
      <section id='wishlist'>
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-between align-items-center mb-5">
              {/* <h3>Wishlist<span>({wishCount})</span></h3> */}
              <button>Move All To Bag</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex flex-wrap gap-3">
              {wish.length === 0 ?
                <div className="empty">
                  <h2>Empty wishlist</h2>
                </div>
                :
                wish.map((item, id) =>
                  <div className="cart" key={id}>
                    <div className="imgbox">
                      <div className="trash" onClick={() => deleteFromWish(item)}>
                        <i class="fa-solid fa-trash-can"></i>
                      </div>
                      <img src={item.image} alt="" />
                      <span>-{item.discount}%</span>
                      <div className="add" onClick={() => AddToBasket(item)}>Add To Card</div>
                    </div>
                    <div className="subtitle">
                      <h6>{item.name}</h6>
                      <span className='price'>${item.discountPrice}</span><del>${item.price}</del>
                    </div>
                  </div>
                )}

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default WishList
import React from 'react'
import "./index.scss"

const ServiceSection = () => {
  return (
    <section id='service'>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className="cart">
              <div className="icon">
                <i class="fa-solid fa-truck-fast"></i>
              </div>
              <h3>FREE AND FAST DELIVERY</h3>
              <p>Free delivery for all orders over $140</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="cart">
              <div className="icon">
                <i class="fa-solid fa-headphones-simple"></i>
              </div>
              <h3>24/7 CUSTOMER SERVICE</h3>
              <p>Friendly 24/7 customer support</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="cart">
              <div className="icon">
                <i class="fa-regular fa-square-check"></i>
              </div>
              <h3>MONEY BACK GUARANTEE</h3>
              <p>We reurn money within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection   
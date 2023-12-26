import React from 'react'
import "./index.scss"
import Button from '../../components/button'
import UseTheme from '../../hooks/useTheme'
import { NavLink } from 'react-router-dom'
function Contact() {
  const [theme, AddDarkTheme, RemoveDarkTheme] = UseTheme()
  return (
    <main>
      <section id='contact'>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-3 py-5">
              <NavLink to={"/"}>
                <span className='home'>Home /</span>
              </NavLink>
              <span>Contact</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="leftSide">
                <div className="topSide">
                  <div className="phone">
                    <div className="icon">
                      <i class="fa-solid fa-phone"></i>
                    </div>
                    <span>Call To Us</span>
                  </div>
                  <p>We are available 24/7, 7 days a week.</p>
                  <p>Phone: +8801611112222</p>
                </div>
                <div className="bottomSide">
                  <div className="email">
                    <div className="icon">
                      <i class="fa-regular fa-envelope"></i>
                    </div>
                    <span>Write To US</span>
                  </div>
                  <p>Fill out our form and we will contact you within 24 hours.</p>
                  <p>Emails: customer@exclusive.com</p>
                  <p>Emails: support@exclusive.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <form action="">
                <div className="input">
                  <input type="text" placeholder='Your Name' />
                  <input type="email" placeholder='Your Email' />
                  <input type="tel" placeholder='Your Phone' />
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                <div className="button d-flex justify-content-end">
                  <Button>
                    <a href="#">Send Massage</a>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
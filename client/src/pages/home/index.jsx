import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import axios from "axios";
import React, { useContext, useEffect, useState } from 'react';
import "./index.scss";
import { BasketContext } from '../../context/BasketContext';
import iphone from "../../assets/images/iphone.png"
import apple from "../../assets/images/apple.png"
import arrowRight from "../../assets/images/arrow-right.png"
import Button from "../../components/button"
import Title from '../../components/title';

function Home() {

  const [product, setProduct] = useState([])
  const [data, setData] = useState({})
  const [openMan, setOpenMan] = useState(false)
  const [openLife, setOpenLife] = useState(false)
  // const [rotate, setRotate] = useState(false) 


  const { basket, setBasket, AddToBasket } = useContext(BasketContext)

  const GetProducts = async () => {
    const response = await axios.get("http://localhost:4000/products")
    setProduct(response.data)
    console.log(response.data);
  }

  useEffect(() => {
    GetProducts()
  }, [])

  let time = new Date().toLocaleTimeString()

  const [ctime, setTime] = useState(time)
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime);
  return (
    <main>
      <section id='voucher'>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <ul className='sideBar'>
                <li className='man' >
                  <a href="#" onClick={() => setOpenMan(!openMan)}>Men's Fathion

                    <ul className={openMan ? "subMAn subOpenMan" : "subMAn"}>
                      <li><a href="#">True Man</a></li>
                      <li><a href="#">Lying Man</a></li>
                      <li><a href="#">Cheating Man</a></li>
                      <li><a href="#">Generous Man</a></li>
                    </ul>
                  </a>
                  <svg className={openMan ? "svg rotate" : "svg"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z" fill="black" />
                  </svg>
                </li>
                <li className='life'>
                  <a href="#" onClick={() => setOpenLife(!openLife)}>Home Lifestyle

                    <ul className={openLife ? "subLife subOpenLife" : "subLife"}>
                      <li><a href="#">Real Life</a></li>
                      <li><a href="#">Dream Life</a></li>
                      <li><a href="#">Fake Life</a></li>
                    </ul>
                  </a>
                  <svg className={openLife ? "svg rotate" : "svg"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z" fill="black" />
                  </svg>
                </li>
                <li>
                  <a href="#">Electronics</a>
                </li>
                <li>
                  <a href="#">Home & Lifestyle</a>
                </li>
                <li>
                  <a href="#">Medicine</a>
                </li>
                <li>
                  <a href="#">Sports & Outdoor</a>
                </li>
                <li>
                  <a href="#">Baby's & Toys</a>
                </li>
                <li>
                  <a href="#">Groceries & Pets</a>
                </li>
                <li>
                  <a href="#">Electronics</a>
                </li>
              </ul>
            </div>
            <div className="col-md-9">
              <Splide aria-label="My Favorite Images"

                options={{
                  rewind: true,
                  gap: 0,
                  isNavigation: true,
                  pagination: true,
                  arrows: false,
                  interval: 3000,
                  autoplay: true,
                  loop: true,
                  type: 'loop',
                  infinity: true,
                  cover: true,
                }}
              >
                <SplideSlide>
                  <div className="slider">
                    <div className="title">
                      <div className="apple">
                        <img src={apple} alt="" />
                        <h5>iPhone 14 Series</h5>
                      </div>
                      <h1>Up to 10% off Voucher</h1>
                      <div className="showNow">
                        <button>Shop Now</button>
                        <img src={arrowRight} alt="" />
                      </div>
                    </div>
                    <div className="imgbox">
                      <img src={iphone} alt="Image 1" />
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="slider">
                    <div className="title">
                      <div className="apple">
                        <img src={apple} alt="" />
                        <h5>iPhone 14 Series</h5>
                      </div>
                      <h1>Up to 10% off Voucher</h1>
                      <div className="showNow">
                        <button>Shop Now</button>
                        <img src={arrowRight} alt="" />
                      </div>
                    </div>
                    <div className="imgbox">
                      <img src={iphone} alt="Image 1" />
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="slider">
                    <div className="title">
                      <div className="apple">
                        <img src={apple} alt="" />
                        <h5>iPhone 14 Series</h5>
                      </div>
                      <h1>Up to 10% off Voucher</h1>
                      <div className="showNow">
                        <button>Shop Now</button>
                        <img src={arrowRight} alt="" />
                      </div>
                    </div>
                    <div className="imgbox">
                      <img src={iphone} alt="Image 1" />
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="slider">
                    <div className="title">
                      <div className="apple">
                        <img src={apple} alt="" />
                        <h5>iPhone 14 Series</h5>
                      </div>
                      <h1>Up to 10% off Voucher</h1>
                      <div className="showNow">
                        <button>Shop Now</button>
                        <img src={arrowRight} alt="" />
                      </div>
                    </div>
                    <div className="imgbox">
                      <img src={iphone} alt="Image 1" />
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="slider">
                    <div className="title">
                      <div className="apple">
                        <img src={apple} alt="" />
                        <h5>iPhone 14 Series</h5>
                      </div>
                      <h1>Up to 10% off Voucher</h1>
                      <div className="showNow">
                        <button>Shop Now</button>
                        <img src={arrowRight} alt="" />
                      </div>
                    </div>
                    <div className="imgbox">
                      <img src={iphone} alt="Image 1" />
                    </div>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </section>
      <section id='flashSales'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Title>Title's</Title>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="topSide">
                <div className="leftSide">
                  <h3>Flash Sales</h3>
                  <div className="clock">{ctime}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Splide hasTrack={false} aria-label="..."
                options={{
                  pagination: false,
                  perMove: 1,
                  type: 'loop',
                  perPage: 4,
                  gap: '1rem',
                  infinity: true,
                  breakpoints: {
                    576: {
                      perPage: 1,
                    },
                    768: {
                      perPage: 2,
                    },
                    992: {
                      perPage: 3,
                      focus: 'center',
                    },
                    1200: {
                      perPage: 3,
                      focus: 'none',
                    },
                  }

                }}

              >
                <SplideTrack>
                  {product && product.map((item) => (
                    <SplideSlide>
                      <div className="cart">
                        <div className="imgbox">
                          <img src={item.image} alt="" />
                          <span>-{item.discount}%</span>
                          <div className="items">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="17" cy="17" r="17" fill="white" />
                              <path d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="17" cy="17" r="17" fill="white" />
                              <path d="M26.257 15.962C26.731 16.582 26.731 17.419 26.257 18.038C24.764 19.987 21.182 24 17 24C12.818 24 9.23601 19.987 7.74301 18.038C7.51239 17.7411 7.38721 17.3759 7.38721 17C7.38721 16.6241 7.51239 16.2589 7.74301 15.962C9.23601 14.013 12.818 10 17 10C21.182 10 24.764 14.013 26.257 15.962V15.962Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                          <div className="add" onClick={() => AddToBasket(item)}>Add To Card</div>
                        </div>
                        <div className="subtitle">
                          <h6>{item.name}</h6>
                          <span className='price'>{item.discountPrice}</span><del>{item.price}</del>
                          <div className="rate">
                            <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.673 10.1717C17.7437 9.36184 17.1709 7.65517 15.8284 7.65517H13.3992C12.7853 7.65517 12.243 7.25521 12.0617 6.66868L11.3375 4.32637C10.9309 3.01106 9.0691 3.01106 8.66246 4.32637L7.93832 6.66868C7.75699 7.25521 7.21469 7.65517 6.60078 7.65517H4.12961C2.79142 7.65517 2.21592 9.35274 3.27822 10.1665L5.39469 11.7879C5.85885 12.1435 6.05314 12.7501 5.88196 13.3092L5.11296 15.8207C4.71416 17.1232 6.22167 18.1704 7.30301 17.342L9.14861 15.9281C9.65097 15.5432 10.349 15.5432 10.8514 15.9281L12.6807 17.3295C13.7636 18.159 15.2725 17.1079 14.8696 15.8046L14.09 13.2827C13.9159 12.7198 14.113 12.1081 14.5829 11.7526L16.673 10.1717Z" fill="#FFAD33" />
                              <path d="M36.673 10.1717C37.7437 9.36184 37.1709 7.65517 35.8284 7.65517H33.3992C32.7853 7.65517 32.243 7.25521 32.0617 6.66868L31.3375 4.32637C30.9309 3.01106 29.0691 3.01106 28.6625 4.32637L27.9383 6.66868C27.757 7.25521 27.2147 7.65517 26.6008 7.65517H24.1296C22.7914 7.65517 22.2159 9.35274 23.2782 10.1665L25.3947 11.7879C25.8588 12.1435 26.0531 12.7501 25.882 13.3092L25.113 15.8207C24.7142 17.1232 26.2217 18.1704 27.303 17.342L29.1486 15.9281C29.651 15.5432 30.349 15.5432 30.8514 15.9281L32.6807 17.3295C33.7636 18.159 35.2725 17.1079 34.8696 15.8046L34.09 13.2827C33.9159 12.7198 34.113 12.1081 34.5829 11.7526L36.673 10.1717Z" fill="#FFAD33" />
                              <path d="M56.673 10.1717C57.7437 9.36184 57.1709 7.65517 55.8284 7.65517H53.3992C52.7853 7.65517 52.243 7.25521 52.0617 6.66868L51.3375 4.32637C50.9309 3.01106 49.0691 3.01106 48.6625 4.32637L47.9383 6.66868C47.757 7.25521 47.2147 7.65517 46.6008 7.65517H44.1296C42.7914 7.65517 42.2159 9.35274 43.2782 10.1665L45.3947 11.7879C45.8588 12.1435 46.0531 12.7501 45.882 13.3092L45.113 15.8207C44.7142 17.1232 46.2217 18.1704 47.303 17.342L49.1486 15.9281C49.651 15.5432 50.349 15.5432 50.8514 15.9281L52.6807 17.3295C53.7636 18.159 55.2725 17.1079 54.8696 15.8046L54.09 13.2827C53.9159 12.7198 54.113 12.1081 54.5829 11.7526L56.673 10.1717Z" fill="#FFAD33" />
                              <path d="M76.673 10.1717C77.7437 9.36184 77.1709 7.65517 75.8284 7.65517H73.3992C72.7853 7.65517 72.243 7.25521 72.0617 6.66868L71.3375 4.32637C70.9309 3.01106 69.0691 3.01106 68.6625 4.32637L67.9383 6.66868C67.757 7.25521 67.2147 7.65517 66.6008 7.65517H64.1296C62.7914 7.65517 62.2159 9.35274 63.2782 10.1665L65.3947 11.7879C65.8588 12.1435 66.0531 12.7501 65.882 13.3092L65.113 15.8207C64.7142 17.1232 66.2217 18.1704 67.303 17.342L69.1486 15.9281C69.651 15.5432 70.349 15.5432 70.8514 15.9281L72.6807 17.3295C73.7636 18.159 75.2725 17.1079 74.8696 15.8046L74.09 13.2827C73.9159 12.7198 74.113 12.1081 74.5829 11.7526L76.673 10.1717Z" fill="#FFAD33" />
                              <path d="M96.673 10.1717C97.7437 9.36184 97.1709 7.65517 95.8284 7.65517H93.3992C92.7853 7.65517 92.243 7.25521 92.0617 6.66868L91.3375 4.32637C90.9309 3.01106 89.0691 3.01106 88.6625 4.32637L87.9383 6.66868C87.757 7.25521 87.2147 7.65517 86.6008 7.65517H84.1296C82.7914 7.65517 82.2159 9.35274 83.2782 10.1665L85.3947 11.7879C85.8588 12.1435 86.0531 12.7501 85.882 13.3092L85.113 15.8207C84.7142 17.1232 86.2217 18.1704 87.303 17.342L89.1486 15.9281C89.651 15.5432 90.349 15.5432 90.8514 15.9281L92.6807 17.3295C93.7636 18.159 95.2725 17.1079 94.8696 15.8046L94.09 13.2827C93.9159 12.7198 94.113 12.1081 94.5829 11.7526L96.673 10.1717Z" fill="#FFAD33" />
                            </svg>
                            <span className='comment'>({item.comment})</span>
                          </div>
                        </div>
                      </div>
                    </SplideSlide>
                  ))}
                </SplideTrack>
                <div className="splide__arrows">
                  <button className="splide__arrow splide__arrow--prev"><i className='fa-solid fa-arrow-right'></i></button>
                  <button className="splide__arrow splide__arrow--next"><i className='fa-solid fa-arrow-left'></i></button>
                </div>
              </Splide>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center mt-5">
              <Button>
                <a href="#">View All Products</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section id='arrival'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="top">
                <Title>Featured
                </Title>
                <h3>New Arrival</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="imgbox">
                <div className="leftTitle">
                  <h3>PlayStation 5</h3>
                  <p>Black and White version of the PS5 coming out on sale.</p>
                  <button>Shop Now</button>
                </div>
                <img src="https://s3-alpha-sig.figma.com/img/1c36/0f79/0c1817d3afa266b3c9f8c81ff0ed4428?Expires=1704067200&Signature=bxvzKJAYPrwP2vjNiqjZlRMETJxGW5pga1AR66eCa3Uoi11~tASAcfn5P1iWo0OF1rdV63MN9uQk5D7iHR0FdDcz3S4Lxq4fG5rsuuToRP6-Rr2Tlh2fy1xZS7EDKcjF-rh3rTUf8ACKe21S6tBEJ9idPePQ768DPdYBPCBGASQpQTY1QRmDY3fqbFTazjC7Powi0VfYwjU4NIdeqnvzKFrEBIVtNw0QaHI0h~GWQj2rAnHIZXYu1P2N30KXXmx9RYwPagYDuZhvVUBJqLgw4bPP3c5htAWnNsmtjFAgmqQfzEmCCjSIwT8TLxrJCw53lSGuAJRsZXArvOwzmta3vg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row">
                <div className="col-md-12 col-lg-12 mb-4">
                  <div className="rightTop">
                    <div className="rightTitle">
                      <h3>PlayStation</h3>
                      <p>Featured woman collections that give you another vibe.</p>
                      <button>Shop Now</button>
                    </div>
                    <div className="imgbox">
                      <img src="data:image/jpeg;base64,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" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="imgbox">
                    <div className="leftTitle">
                      <h3>Speakers</h3>
                      <p>Amazon wireless speakers</p>
                      <button>Shop Now</button>
                    </div>
                    <img src="https://s3-alpha-sig.figma.com/img/e565/9d57/2977438364a41d7e8c9d1e9a794d43ed?Expires=1704067200&Signature=ZEZvhdKP-wq506pmDCWI2-oJj9ORtoKWPPmKMDhH~cigT2wAE8eL4iTMUcadbcwoGuy3NlfgYnpb5lHRaL6LUljAjm-6uVAOSeJF1mve12qhaCjg0mu97~uq~W-wVYzenX4t83YyMIZ8-lHiCk3XpsNM8-Y9j~ofVGUxkPtaAGfQ7kmpD-7avi3At8XzA8Lz-QdHMG7PE782lhkuDd65oDsWabTfRHeA13e2hrzPHq1Nh3Ztc2No7HMD4X0Yx4AE59RP2Xy~alx6QIwZmRi2XX0MFtwyiR6ffsQT21AykF4GalSLCTMIsZqdIO1rCH30Tk0C7PXgSlniA-mP9vAIkQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="imgbox">
                    <div className="leftTitle">
                      <h3>Perfume</h3>
                      <p>GUCCI INTENSE OUD EDP</p>
                      <button>Shop Now</button>
                    </div>
                    <img src="https://s3-alpha-sig.figma.com/img/1531/5cd1/5102562cf220504d288fa568eaa816dd?Expires=1704067200&Signature=CWjDyb7Wjno6bitoiuIcvo-tcczgtsJuwnQzQAWlpIQW7qqFmDUTKjamR02beoXHj9Jae4v7J37djr-YV6DXv4qBymE1~9XDOJUctoMetMdPF0Fi~EIUevh2UAWr4L0OKLKsY-Q2zbLjN2-LVbj~6POYr1JPkzEhoZncHbE3A9w0NwhI8H77s2LQUJk~iSbpjV2kbK77rpMuThxFZOd02Sbz0mHB1vPi5IUuRUbTynHKYvtTfUHZMB4xvCJXHO5j-0uJY7MVnQhRtGS0ijycg6~0S1kG5g88S1G9~sVD7d1yzbVk7gGgBVLHHWWATzUttfTx8pyYLVQklSaQAwxl7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
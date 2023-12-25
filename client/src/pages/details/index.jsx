import React, { useState } from 'react'
import "./index.scss"
import Button from "../../components/button"

function Detail() {
  const [count, setcount] = useState(0)
  const [image, setImage] = useState(1)

  function ShowImage(index) {
    setImage(index)
  }
  function decrease() {
    if (count === 1) {
      return
    }
    setcount(count - 1)
  }
  function increase() {
    if (count === 10) {
      return
    }
    setcount(count + 1)
  }

  return (
    <main>
      <section id='detail'>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12 col-md-12 d-flex gap-3 flex-wrap">
              <div className="controller">
                <div className='image' onClick={() => ShowImage(1)}>
                  <img src="https://s3-alpha-sig.figma.com/img/1490/1cca/de638588f27b571d7565fbaacfe57243?Expires=1704067200&Signature=C7S57kUw0kezddtJccSTQsg2FWhK5lLKfpK6LBGsYuEBK~PBoyvXoiL4WL3zmr3Ijtd11o7zNyPpXKy49fJZAr6lqS8FgR09y3-8jT0L8xwcB7RbL23j8NebDYGo9PHauEln3czcE8ISzRgi3Urbzu~AG67xnJfdsTWzozz5JE~gNrie2d6xGcC3SR3k2DnuG1wyAwqHfnbds9z~H9PpMrNJxyzqfiyl-p9RcpFosbRSOxKgz7AeIpJAAiddVVOUHe2fG5iTTnbTVh0-53FnS9Od1WSEYxpvWb5lhUKiJdneIVu1UaMuR1a1x6xd2PgE3Lln47Z1F79aH~KjCpxbKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
                <div className='image' onClick={() => ShowImage(2)}>
                  <img src="https://s3-alpha-sig.figma.com/img/ca92/325b/4d31381f7fe4841786f4511bd4849d87?Expires=1704067200&Signature=cz95Mntp1CZJToFlwERgB-XXV2RBY14lQGRJWx4Qhe1K-X-ZmD1IMqqTzMoKiPmzfHsMYAi7JEf3C5ece1OVTcMdF~mLl72saBkSR-VSYgutw6G~HGZPWS6qjLB7-dtVJBAFltsy~13kWITvH55oj5B6YZppROb4BnXyWD-xNx2dqSggby9khYNZezp9fx6FUl-EcVAczL3mrhK~0vDBVanyBtQK9PyqirxNE4zEaCp3FbURiygYEhhEKA~l0rN72nv9J4QV03Rml9vZCbYGy7XDPP5r8DR~6VwcyO1MDEgN-2Cm9rbb0UTgCk~99jBt0ytbR38tCxFi56CzHmFH7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
                <div className='image' onClick={() => ShowImage(3)}>
                  <img src="https://s3-alpha-sig.figma.com/img/bdcf/fcaa/9b23a76cbe02748d2090a0b9a11cf0a5?Expires=1704067200&Signature=CFAs0fEFjkKd8YTRFkLjf6BNQI-7j7o-0EkA~wxnInuixWAq1rCJvpMfel4qc-lbKBSiL5C3RWke8pdmzl0U-giaF0ZBr8xRjCSVcyL3880t2Dh5iyjzr3K6apnh-ziAq-DBl1uD8vB29nyqIBD~tUjDuoXYL3dZcu6IdcPp6yvh~tCjgmKfhWxVuxcb3FF30NqQO415ip6C6JGEpa5HR239D8RHT6E~qtvpxlWyQM7bDP1b3P-vOqKUzyiJyYDLC-ouE9LfTgSb7QLAR7QiTw0JEVcu-cYh9BQh88ZbREN-sV1spXMnG6K42OpCZvS69KaBrlsEbZlk7Yihg~BO0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
                <div className='image' onClick={() => ShowImage(4)}>
                  <img src="https://s3-alpha-sig.figma.com/img/f109/e9ce/a445f7c73ec2a2153e0e149e85ee9d28?Expires=1704067200&Signature=Te1wcW5iiujGNK4dWay413kq~aOoCWSSVOUHjp-bLXpwws-QNEykl5ncpRjmtjiNDVNjjgRgGcuJ-uTx~zUiueNNCJRkNv3Tfi874SJuLajORgJrruoHZaNNIhmrGhCxSDkxN03OiagBIW5QidyWvsdpYlPCA3hZ4zyB50FBrBFnXrkSqblzwVw0IhzxEAnrFbYM0~Pz8qXD9rXPjcb2tlFfklKE4uuSYNqlB8aFiM6QHxd0i2su-fhY~PJy3nsPsXbUTfcUiIRS2oQsjnBgT3hITgOm1SpZNxUl~TvA3ZmvyxNUqOkmmFqVOqjwOkVZtQeuqViYF52eskhCXYlOaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
              </div>
              <div className="content">
                <div className={image === 1 ? "imgbox activeImage" : "imgbox"}>
                  <img src="https://s3-alpha-sig.figma.com/img/1490/1cca/de638588f27b571d7565fbaacfe57243?Expires=1704067200&Signature=C7S57kUw0kezddtJccSTQsg2FWhK5lLKfpK6LBGsYuEBK~PBoyvXoiL4WL3zmr3Ijtd11o7zNyPpXKy49fJZAr6lqS8FgR09y3-8jT0L8xwcB7RbL23j8NebDYGo9PHauEln3czcE8ISzRgi3Urbzu~AG67xnJfdsTWzozz5JE~gNrie2d6xGcC3SR3k2DnuG1wyAwqHfnbds9z~H9PpMrNJxyzqfiyl-p9RcpFosbRSOxKgz7AeIpJAAiddVVOUHe2fG5iTTnbTVh0-53FnS9Od1WSEYxpvWb5lhUKiJdneIVu1UaMuR1a1x6xd2PgE3Lln47Z1F79aH~KjCpxbKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
                <div className={image === 2 ? "imgbox activeImage" : "imgbox"}>
                  <img src="https://s3-alpha-sig.figma.com/img/ca92/325b/4d31381f7fe4841786f4511bd4849d87?Expires=1704067200&Signature=cz95Mntp1CZJToFlwERgB-XXV2RBY14lQGRJWx4Qhe1K-X-ZmD1IMqqTzMoKiPmzfHsMYAi7JEf3C5ece1OVTcMdF~mLl72saBkSR-VSYgutw6G~HGZPWS6qjLB7-dtVJBAFltsy~13kWITvH55oj5B6YZppROb4BnXyWD-xNx2dqSggby9khYNZezp9fx6FUl-EcVAczL3mrhK~0vDBVanyBtQK9PyqirxNE4zEaCp3FbURiygYEhhEKA~l0rN72nv9J4QV03Rml9vZCbYGy7XDPP5r8DR~6VwcyO1MDEgN-2Cm9rbb0UTgCk~99jBt0ytbR38tCxFi56CzHmFH7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
                <div className={image === 3 ? "imgbox activeImage" : "imgbox"}>
                  <img src="https://s3-alpha-sig.figma.com/img/bdcf/fcaa/9b23a76cbe02748d2090a0b9a11cf0a5?Expires=1704067200&Signature=CFAs0fEFjkKd8YTRFkLjf6BNQI-7j7o-0EkA~wxnInuixWAq1rCJvpMfel4qc-lbKBSiL5C3RWke8pdmzl0U-giaF0ZBr8xRjCSVcyL3880t2Dh5iyjzr3K6apnh-ziAq-DBl1uD8vB29nyqIBD~tUjDuoXYL3dZcu6IdcPp6yvh~tCjgmKfhWxVuxcb3FF30NqQO415ip6C6JGEpa5HR239D8RHT6E~qtvpxlWyQM7bDP1b3P-vOqKUzyiJyYDLC-ouE9LfTgSb7QLAR7QiTw0JEVcu-cYh9BQh88ZbREN-sV1spXMnG6K42OpCZvS69KaBrlsEbZlk7Yihg~BO0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
                <div className={image === 4 ? "imgbox activeImage" : "imgbox"}>
                  <img src="https://s3-alpha-sig.figma.com/img/f109/e9ce/a445f7c73ec2a2153e0e149e85ee9d28?Expires=1704067200&Signature=Te1wcW5iiujGNK4dWay413kq~aOoCWSSVOUHjp-bLXpwws-QNEykl5ncpRjmtjiNDVNjjgRgGcuJ-uTx~zUiueNNCJRkNv3Tfi874SJuLajORgJrruoHZaNNIhmrGhCxSDkxN03OiagBIW5QidyWvsdpYlPCA3hZ4zyB50FBrBFnXrkSqblzwVw0IhzxEAnrFbYM0~Pz8qXD9rXPjcb2tlFfklKE4uuSYNqlB8aFiM6QHxd0i2su-fhY~PJy3nsPsXbUTfcUiIRS2oQsjnBgT3hITgOm1SpZNxUl~TvA3ZmvyxNUqOkmmFqVOqjwOkVZtQeuqViYF52eskhCXYlOaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12">
              <h2>Havic HV G-92 Gamepad</h2>
              <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.673 10.1717C17.7437 9.36184 17.1709 7.65517 15.8284 7.65517H13.3992C12.7853 7.65517 12.243 7.25521 12.0617 6.66868L11.3375 4.32637C10.9309 3.01106 9.0691 3.01106 8.66246 4.32637L7.93832 6.66868C7.75699 7.25521 7.21469 7.65517 6.60078 7.65517H4.12961C2.79142 7.65517 2.21592 9.35274 3.27822 10.1665L5.39469 11.7879C5.85885 12.1435 6.05314 12.7501 5.88196 13.3092L5.11296 15.8207C4.71416 17.1232 6.22167 18.1704 7.30301 17.342L9.14861 15.9281C9.65097 15.5432 10.349 15.5432 10.8514 15.9281L12.6807 17.3295C13.7636 18.159 15.2725 17.1079 14.8696 15.8046L14.09 13.2827C13.9159 12.7198 14.113 12.1081 14.5829 11.7526L16.673 10.1717Z" fill="#FFAD33" />
                <path d="M36.673 10.1717C37.7437 9.36184 37.1709 7.65517 35.8284 7.65517H33.3992C32.7853 7.65517 32.243 7.25521 32.0617 6.66868L31.3375 4.32637C30.9309 3.01106 29.0691 3.01106 28.6625 4.32637L27.9383 6.66868C27.757 7.25521 27.2147 7.65517 26.6008 7.65517H24.1296C22.7914 7.65517 22.2159 9.35274 23.2782 10.1665L25.3947 11.7879C25.8588 12.1435 26.0531 12.7501 25.882 13.3092L25.113 15.8207C24.7142 17.1232 26.2217 18.1704 27.303 17.342L29.1486 15.9281C29.651 15.5432 30.349 15.5432 30.8514 15.9281L32.6807 17.3295C33.7636 18.159 35.2725 17.1079 34.8696 15.8046L34.09 13.2827C33.9159 12.7198 34.113 12.1081 34.5829 11.7526L36.673 10.1717Z" fill="#FFAD33" />
                <path d="M56.673 10.1717C57.7437 9.36184 57.1709 7.65517 55.8284 7.65517H53.3992C52.7853 7.65517 52.243 7.25521 52.0617 6.66868L51.3375 4.32637C50.9309 3.01106 49.0691 3.01106 48.6625 4.32637L47.9383 6.66868C47.757 7.25521 47.2147 7.65517 46.6008 7.65517H44.1296C42.7914 7.65517 42.2159 9.35274 43.2782 10.1665L45.3947 11.7879C45.8588 12.1435 46.0531 12.7501 45.882 13.3092L45.113 15.8207C44.7142 17.1232 46.2217 18.1704 47.303 17.342L49.1486 15.9281C49.651 15.5432 50.349 15.5432 50.8514 15.9281L52.6807 17.3295C53.7636 18.159 55.2725 17.1079 54.8696 15.8046L54.09 13.2827C53.9159 12.7198 54.113 12.1081 54.5829 11.7526L56.673 10.1717Z" fill="#FFAD33" />
                <path d="M76.673 10.1717C77.7437 9.36184 77.1709 7.65517 75.8284 7.65517H73.3992C72.7853 7.65517 72.243 7.25521 72.0617 6.66868L71.3375 4.32637C70.9309 3.01106 69.0691 3.01106 68.6625 4.32637L67.9383 6.66868C67.757 7.25521 67.2147 7.65517 66.6008 7.65517H64.1296C62.7914 7.65517 62.2159 9.35274 63.2782 10.1665L65.3947 11.7879C65.8588 12.1435 66.0531 12.7501 65.882 13.3092L65.113 15.8207C64.7142 17.1232 66.2217 18.1704 67.303 17.342L69.1486 15.9281C69.651 15.5432 70.349 15.5432 70.8514 15.9281L72.6807 17.3295C73.7636 18.159 75.2725 17.1079 74.8696 15.8046L74.09 13.2827C73.9159 12.7198 74.113 12.1081 74.5829 11.7526L76.673 10.1717Z" fill="#FFAD33" />
                <path opacity="0.25" d="M96.673 10.1717C97.7437 9.36184 97.1709 7.65517 95.8284 7.65517H93.3992C92.7853 7.65517 92.243 7.25521 92.0617 6.66868L91.3375 4.32637C90.9309 3.01106 89.0691 3.01106 88.6625 4.32637L87.9383 6.66868C87.757 7.25521 87.2147 7.65517 86.6008 7.65517H84.1296C82.7914 7.65517 82.2159 9.35274 83.2782 10.1665L85.3947 11.7879C85.8588 12.1435 86.0531 12.7501 85.882 13.3092L85.113 15.8207C84.7142 17.1232 86.2217 18.1704 87.303 17.342L89.1486 15.9281C89.651 15.5432 90.349 15.5432 90.8514 15.9281L92.6807 17.3295C93.7636 18.159 95.2725 17.1079 94.8696 15.8046L94.09 13.2827C93.9159 12.7198 94.113 12.1081 94.5829 11.7526L96.673 10.1717Z" fill="black" />
              </svg>
              <span className='comment'>(150 Reviews)</span>
              <span className='stock'>In Stock</span>
              <h4>$192.00</h4>
              <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
              <span className='colours'>Colours:</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="6" fill="#A0BCE0" />
                <circle cx="10" cy="10" r="9" stroke="black" stroke-width="2" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="10" fill="#E07575" />
              </svg>
              <div className="box">
                <span className='size'>Size:</span>
                <div className="minibox">XS</div>
                <div className="minibox">S</div>
                <div className="minibox">M</div>
                <div className="minibox">L</div>
                <div className="minibox">XL</div>
              </div>
              <div className="buyNow">
                <div className="counter">
                  <button onClick={decrease}>-</button>
                  <span className='count'>{count}</span>
                  <button onClick={increase}>+</button>
                </div>
                <Button children={"Buy Now"} />
                <i className='fa-regular fa-heart'></i>
              </div>
              <div className="delivery">
                <div className="icon">
                  <i class="fa-solid fa-truck-fast"></i>
                </div>
                <div className="title">
                  <h3>Free Delivery</h3>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className="delivery">
                <div className="icon">
                  <i class="fa-solid fa-rotate-left"></i>
                </div>
                <div className="title">
                  <h3>Return Delivery</h3>
                  <p>Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Detail
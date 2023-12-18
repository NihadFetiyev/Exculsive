import React from 'react'
import Button from '../../components/button'
import "./index.scss"
function Error() {
  return (
    <section id='error'>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
            <h1>404 Not Found</h1>
            <p>Your visited page not found. You may go home page.</p>
            <Button />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Error
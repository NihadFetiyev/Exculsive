import React from 'react'
import Button from '../../components/button'
import "./index.scss"
import UseTheme from '../../hooks/useTheme'
import { NavLink } from 'react-router-dom'
function Error() {
  
  const [theme, AddDarkTheme, RemoveDarkTheme] = UseTheme()
  return (
    <section id='error'>
      <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5">
              <NavLink to={"/"}>
                <span className='home'>Home /</span>
              </NavLink>
              <span>Error</span>
            </div>
          </div>
        <div className="row">
          <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
            <h1>404 Not Found</h1>
            <p>Your visited page not found. You may go home page.</p>
            <Button>
              <NavLink to={"/"}>Back to home page</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Error
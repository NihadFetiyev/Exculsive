import React, { useContext } from 'react'
import "./index.scss"
import { userContext } from '../../context/userContext'
import { NavLink } from 'react-router-dom'
import Button from '../../components/button'

function UserPage() {

  const { user } = useContext(userContext)
  return (
    <main>
      <section id='userPage'>
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-end mb-5">
              <div className="welcome gap-1 d-flex  align-items-end">
                <label>Welcome!</label>
                <h4>{user.name}!</h4>
              </div>
            </div>
            <div className="col-md-4">
              <ul>
                <h3>Manage My Account</h3>
                <li>My Profile</li>
                <li>Address Book</li>
                <li>My Payment Options</li>
              </ul>
              <ul>
                <h3>My Orders</h3>
                <li>My Returns</li>
                <li>My Cancellations</li>
              </ul>
              <h3>
                <NavLink to="/wishlist">My wishlist</NavLink>
              </h3>
            </div>
            <div className="col-md-8">
              <h4>Edit Your Profile</h4>
              <div className="biography">
                <div className="name">
                  <div className="box">
                    <div className="input">
                      <label>First Name</label>
                      <div className="minibox">{user.name}</div>
                    </div>
                    <div className="input">
                      <label>Last Name</label>
                      <div className="minibox">Fatiyev</div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="input">
                      <label>Email</label>
                      <div className="minibox">rimel1111@gmail.com</div>
                    </div>
                    <div className="input">
                      <label>Address </label>
                      <div className="minibox">Kingston, 5236, United State</div>
                      </div>
                  </div>
                  <div className="password">
                    <div className="passwordbox">{user.password}</div>
                    <div className="passwordbox">New Passwod</div>
                    <div className="passwordbox">Confirm New Passwod</div>
                  </div>
                  <div className="buttons">
                    <button>Cancel</button>
                    <Button children={"Save Changes"}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main >
  )
}

export default UserPage
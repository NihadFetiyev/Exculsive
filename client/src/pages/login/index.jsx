import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../../context/userContext'
import UseTheme from '../../hooks/useTheme'
import "./index.scss"
import { jwtDecode } from 'jwt-decode'

function Login() {
  const [theme, AddDarkTheme, RemoveDarkTheme] = UseTheme()
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const { setToken, setDecodedToken } = useContext(userContext)
  const navigate = useNavigate()


  const HandleLogin = async (e) => {
    e.preventDefault()
    await fetch("http://localhost:3000/login",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ username: name, password: password })
      }
    )
      .then(res => res.json())
      .then(data => {
        
        const decoded = jwtDecode(data)


        setToken(data)
        setDecodedToken(decoded)

        navigate("/")

        console.log(data)
        console.log(decoded);
      }
      )
      .catch(err => console.log(err))
  }

  function handleChange(e, stateChanger) {
    stateChanger(e.target.value)
  }

  return (
    <main>
      <section id='login'>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-7 mb-4">
              <div className="imgbox">
                <img src="https://s3-alpha-sig.figma.com/img/75f3/94c0/a1c7dc5b68a42239311e510f54d8cd59?Expires=1704067200&Signature=arb0jdLVeBEtmb-xK1CHLqsyvaaanspdkF96H9VfCfasKDpQswfOAhuSccak3p3W8vRvsIqch6F67X1Dyl9BcAQekKWqekSnzpxeu3xQi80xP1K7HoABf7sZFGXnBFhS~ulkdvZNYrBSPQV7rpbqEgKEyXM4hcw-a0VKs2vsaiJlTfImJYw3JAdF0rgYvUdQ1LxVvWkwgDLVHn~mWmyraEd7vcowLOjYYM~7V0l6~U15qKMR27WHOFLp1YhkwWeTfadhwp6n9XisXqTxlabJ0mOP7o3QYWjPjwI-xpPyCA~Qd-gj89CJNStUR69aD0L7RwfGpjCKluM-TGTacyrlDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
            </div>
            <div className="col-md-12 col-lg-5">
              <div className="rightSide">
                <h2>Log in to Exclusive</h2>
                <h3>Enter your details below</h3>
                <form action="#" onSubmit={HandleLogin}>
                  <input type="text" placeholder='Name' value={name} onChange={e => handleChange(e, setName)} />
                  <input type="text" placeholder='Email or Phone Number' value={password} onChange={e => handleChange(e, setPassword)} />
                  <div className="login">
                    <button>login</button>
                    <span className='forget'>Forget Password?</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Login
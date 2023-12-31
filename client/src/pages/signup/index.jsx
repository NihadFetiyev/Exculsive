import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UseTheme from '../../hooks/useTheme'
import "./index.scss"

function Signup() {
  const [theme, AddDarkTheme, RemoveDarkTheme] = UseTheme()
  const [inpUser, setinpUser] = useState()
  const [InpPassword, setInpPassword] = useState()
  const navigate = useNavigate()
  function HandleSignUp(e) {
    e.preventDefault()
    fetch("http://localhost:3000/register",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: inpUser, password: InpPassword }),
      }
    )
      .then(res => res.json())
      .then(data => {
        navigate("/login")
        console.log(data);
      }
      )
      .catch(err => console.log(err))
  }

  return (
    <main>
      <section id='signUp'>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-7 d-flex align-items-center mb-4">
              <div className="imgbox">
                <img src="https://s3-alpha-sig.figma.com/img/75f3/94c0/a1c7dc5b68a42239311e510f54d8cd59?Expires=1704067200&Signature=arb0jdLVeBEtmb-xK1CHLqsyvaaanspdkF96H9VfCfasKDpQswfOAhuSccak3p3W8vRvsIqch6F67X1Dyl9BcAQekKWqekSnzpxeu3xQi80xP1K7HoABf7sZFGXnBFhS~ulkdvZNYrBSPQV7rpbqEgKEyXM4hcw-a0VKs2vsaiJlTfImJYw3JAdF0rgYvUdQ1LxVvWkwgDLVHn~mWmyraEd7vcowLOjYYM~7V0l6~U15qKMR27WHOFLp1YhkwWeTfadhwp6n9XisXqTxlabJ0mOP7o3QYWjPjwI-xpPyCA~Qd-gj89CJNStUR69aD0L7RwfGpjCKluM-TGTacyrlDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
            </div>
            <div className="col-md-12 col-lg-5">
              <div className="rightSide">
                <h2>Create an account</h2>
                <h3>Enter your details below</h3>
                <form action="" onSubmit={HandleSignUp}>
                  <input type="text" placeholder='Name'value={inpUser} onChange={(e) => setinpUser(e.target.value)} />
                  <input type="text" placeholder='Email or Phone Number' />
                  <input type="password" placeholder='Password'  value={InpPassword} onChange={(e) => setInpPassword(e.target.value)} />
                  <button>Create Account</button>
                  <div className="google">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <g clip-path="url(#clip0_2216_3336)">
                        <path d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z" fill="#4285F4" />
                        <path d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z" fill="#34A853" />
                        <path d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z" fill="#FBBC04" />
                        <path d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z" fill="#EA4335" />
                      </g>
                      <defs>
                        <clipPath id="clip0_2216_3336">
                          <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Sign up with Google</span>
                  </div>
                  <div className="account">
                    <span className='already'>Already have account?</span>
                    <span className='login'>Sign   In</span>
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

export default Signup
import React from 'react'
import "./index.scss"
const Title = ({children}) => {
  return (
    <div className="title">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 20 40" fill="none">
        <rect width="20" height="40" rx="4" fill="#DB4444" />
      </svg>
      <h2>{children}</h2>
    </div>
  )
}

export default Title
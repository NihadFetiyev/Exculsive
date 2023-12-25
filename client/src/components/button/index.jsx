import React from 'react'
import "./index.scss"
function Button({children,data}) {
  return (
    <div className="btn" style={data && {background:data.background,fontSize:data.fontsize, width:data.width, padding:data.padding, height:data.height}}>
      <a href="/">{children}</a>
    </div>
  )
}

export default Button
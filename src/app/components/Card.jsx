import React from 'react'

const Card = ({children}) => {
    const style={
        display: "flex",
        flex: "1",
        height: "300px",
        width: "300px",
        background: "#ededed",
        // margin: "0 0 10px 0",
        alignItems: "center",
        justifyContent: "center",
    }
  return (
    <div style={style}>{children}</div>
  )
}

export default Card
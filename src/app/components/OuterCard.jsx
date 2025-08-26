import React from 'react'

const OuterCard = ({children}) => {
    const style={
        height: "300px",
        width: "300px",
        background: "#ededed",
        margin: "0 10px;",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap:'10px'
    }
  return (
    <OuterCard style={style}>{children}</OuterCard>
  )
}

export default OuterCard
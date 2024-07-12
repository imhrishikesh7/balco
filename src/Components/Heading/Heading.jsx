import React from 'react'

const Heading = ({ theme , fval, text }) => {
  return (
    <h1 className={`h-component fw-bold my-3 text-${theme} fs-${fval}`}>{text}</h1>
  )
}

export default Heading
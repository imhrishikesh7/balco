import React from 'react'
import './Paragraph.css'

const Paragraph = ({ theme , p}) => {
  return (
    <div className='p-component fs-6'>
    {p.map((paragraph, index) => (
      <React.Fragment key={index}>
        <p className={`text-${theme}`}>{paragraph}</p>
      </React.Fragment>
    ))}
  </div>
  )
}

export default Paragraph
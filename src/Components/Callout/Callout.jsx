import React from 'react';
import './Callout.css';

const Callout = ({ value1, value2 }) => {
  return (
    <div className='callout-component mb-1'>
        <h4 className='callout-val1 text-blue'>{value1}</h4>
        <span className='callout-val2 fs-6 fw-bold'>{value2}</span>
    </div>
  )
}

export default Callout
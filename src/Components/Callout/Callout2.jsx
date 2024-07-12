import React from 'react';
import './Callout.css';

const Callout2 = ({ value1, value2 }) => {
  return (
    <div className='callout-component2 mb-1 mx-2'>
        <h1 className='callout-val1 text-blue'>{value1}</h1>
        <span className='callout-val2 p-component'>{value2}</span>
    </div>
  )
}

export default Callout2
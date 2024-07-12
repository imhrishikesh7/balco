import React from 'react'

const Profiles = () => {
    return (
        <div className='marginal row top-spacer bg-profiles'>
            <div className='col-md-6'>
            <h2 className='mb-4'>Profiles of the Board of Directors</h2>
                
                <img src="./business-overview/Balco1.png" className='img-fluid ' alt="" />
            </div>
            <div className='col-md-6'>
            <h2 className='h-component'>{`\u000a`}</h2>

                <img src="./business-overview/Balco2.png " className='img-fluid' alt="" />
            </div>
            <div className='col-md-6 mt-5 m-auto'>
                <img src="./business-overview/Balco3.png" className='img-fluid' alt="" />
            </div>
        </div>
    )
}

export default Profiles
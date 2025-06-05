import React from 'react'
import AddServices from '../components/AddServices'
import ServiceList from '../components/ServiceList'


const Services = () => {
  return (
    <>
        <div className='container d-flex justify-content-between mt-5'>
            <h1>SERVICES | <span>Services Management</span></h1>
            <AddServices/>
        </div>
        <div className='container'>
          <ServiceList/>
        </div>
    </>
  )
}

export default Services
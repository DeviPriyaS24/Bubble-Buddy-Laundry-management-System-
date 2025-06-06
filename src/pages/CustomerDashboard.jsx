import React from 'react'
import CustomerProfile from '../components/CustomerProfile'
import PlaceOrder from '../components/PlaceOrder'

const CustomerDashboard = () => {
  return (
    <>
      <div className='d-flex'>
          <CustomerProfile/>
          <PlaceOrder/>
      </div>
    </>
  )
}

export default CustomerDashboard
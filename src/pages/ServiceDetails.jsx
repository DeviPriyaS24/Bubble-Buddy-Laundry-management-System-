import React from 'react'

const ServiceDetails = () => {
  return (
    <>
        <div className='container mt-5' style={{minHeight:"85vh"}}>
            <div className="row">
                <div className="col">
                    <img className='img-fluid rounded-5 shadow' src="https://st3.depositphotos.com/12985848/18407/i/450/depositphotos_184077202-stock-photo-clothes-hangers-washing-machine-home.jpg" alt="" />
                    <h1 className='text-center fw-bolder'>Washing Service</h1>
                </div>
                <div className="col">
                    <h3>Price: <span className='text-warning'>1000</span></h3>
                    <h3>Service Category : <span>cat</span></h3>
                    <h3>Description : <span>desc</span></h3>
                    <h3>Estimated time : <span className='text-success'>2 days</span></h3>
                    <h4>Allowed clothing items : <span>Jeans</span></h4>
                    <h4>Fabrics supported : <span>cotton</span></h4>
                </div>
            </div>
        </div>
    </>
  )
}

export default ServiceDetails
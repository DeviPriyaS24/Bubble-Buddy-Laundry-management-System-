import React from 'react'

const ServiceDetails = () => {
  return (
    <>
        <div className='container mt-5' style={{minHeight:"85vh"}}>
            <div className="row">
                <div className="col">
                    <img className='serviceDet-img img-fluid rounded-5 shadow' src="https://st3.depositphotos.com/12985848/18407/i/450/depositphotos_184077202-stock-photo-clothes-hangers-washing-machine-home.jpg" alt="" />
                    <h1 className='serviceDet-h1 text-center fw-bolder'>Washing Service</h1>
                </div>
                <div className="col">
                    <h4>Price: <span className='text-warning fw-bolder'>1000</span></h4>
                    <hr />
                    <h4>Service Category : <span className='text-secondary fw-bolder'>cat</span></h4>
                    <hr />
                    <h4>Description : <span className='text-secondary fw-bolder'>desc</span></h4>
                    <hr />
                    <h4>Estimated time : <span className='text-success fw-bolder'>2 days</span></h4>
                    <hr />
                    <h4>Allowed clothing items : <span className='text-secondary fw-bolder'>Jeans</span></h4>
                    <hr />
                    <h4>Fabrics supported : <span className='text-secondary fw-bolder'>cotton</span></h4>
                </div>
            </div>
        </div>
    </>
  )
}

export default ServiceDetails
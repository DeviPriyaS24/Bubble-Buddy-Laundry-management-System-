import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const ActiveOrders = () => {
  return (
    <>
        <div className='container-fluid mt-3'>
            <h1>Order Status | Active Service Orders</h1>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Order id</th>
          <th>Status</th>
          <th>Payment</th>
          <th>View Details</th>
        </tr>
      </thead>
      <tbody className='fw-bolder'>
        <tr>
          <td>1</td>
          <td>1001</td>
          <td><span className='text-warning'>Pending</span></td>
          <td><span className='text-success'>completed</span></td>
          <td><Button>CheckOut</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>1010</td>
          <td><span className='text-success'>washing</span></td>
          <td><span className='text-danger'>pending</span></td>
          <td><Button>CheckOut</Button></td>
        </tr>
      </tbody>
    </Table>
        </div>
    </>
  )
}

export default ActiveOrders
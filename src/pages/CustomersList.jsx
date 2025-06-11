import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const CustomersList = () => {
  return (
    <>
        <div className='container-fluid mt-3 fw-bolder'>
            <h2 className='text-center fw-bolder text-primary' style={{textDecoration:"underline"}}>Manage Customers</h2>
            <Table striped bordered hover variant="light">
      <thead>
        <tr className='text-center fs-5' style={{textDecoration:"underline"}}>
          <th>#</th>
          <th>Customer Name</th>
          <th>Email</th>
          <th>Date of Birth</th>
          <th>Phone</th>
          <th>Gender</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>1</td>
          <td>Sreelekshmi</td>
          <td>sree123@gmail.com</td>
          <td>01/07/2002</td>
          <td>9907106671</td>
          <td>Female</td>
          <td><Button className='bg-danger border-0'><i class="fa-solid fa-trash"></i></Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Shiva</td>
          <td>shiva24@gmail.com</td>
          <td>30/11/2002</td>
          <td>9089786756</td>
          <td>Male</td>
          <td><Button className='bg-danger border-0'><i class="fa-solid fa-trash"></i></Button></td>
        </tr>
      </tbody>
    </Table>
        </div>
    </>
  )
}

export default CustomersList
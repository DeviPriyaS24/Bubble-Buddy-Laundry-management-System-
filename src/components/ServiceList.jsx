import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


const ServiceList = () => {
  return (
    <>
        <div className='mt-4'>
            <h1 className='text-center' style={{textDecoration:"underline"}}>AVAILABLE SERVICES</h1>
            <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Service Name</th>
          <th>Service Category</th>
          <th>Description</th>
          <th>Price</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>1</td>
          <td><Link>Washing</Link></td>
          <td>Urgent</td>
          <td>service 1 desc</td>
          <td>1000</td>
          <td><Button className='bg-warning border-0'><i class="fa-solid fa-pen-to-square"></i></Button></td>
          <td><Button className='bg-danger border-0'><i class="fa-solid fa-trash"></i></Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td><Link>Folding</Link></td>
          <td>Normal</td>
          <td>service2 desc</td>
          <td>150</td>
          <td><Button className='bg-warning border-0'><i class="fa-solid fa-pen-to-square"></i></Button></td>
          <td><Button className='bg-danger border-0'><i class="fa-solid fa-trash"></i></Button></td>
        </tr>
      </tbody>
    </Table>
        </div>
    </>
  )
}

export default ServiceList
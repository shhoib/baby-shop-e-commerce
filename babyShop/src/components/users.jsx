import React, { useContext } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap';
import Sidebar from './sidebar';
import { context } from '../store/context';
import Table from 'react-bootstrap/Table';



const Users = () => {

  const data = useContext(context);
  const { signin } = data
  // console.log(signin);

  return (

    <div className='rightside'>
      <div >
        <Form className='d-flex justify-content-center' inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2 m-4 srchbar" />
          <Button variant="dark srchbtn m-4">Search</Button>
        </Form>
      </div>

      <div>
       
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>UserName</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
            {signin.map((item) => (

              <tr>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>
              ))}
            </tbody>
          </Table>
       
      </div>
    </div>
  )
}

export default Users
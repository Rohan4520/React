import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router";



function Home(props) {

    const [userdata, setUserdata] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/user')
            .then((respone) => {
                return respone.json();
            }).then((data) => {
                console.log(data);
                setUserdata(data);
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <>
            <h1 style={{textAlign:"center"}}> Home page </h1> <br/>
            <Container>
                <NavLink to='/create'>
            <Button variant="primary">Create</Button> <br/>
                    
                </NavLink>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>user id </th>
                            <th>UserName</th>
                            <th> UserEmail</th>
                            <th>Userphone</th>
                            <th>UserCity</th>
                            <th>User Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userdata.map((value) => {
                                return (
                                    <tr >
                                        <td>  {value.id} </td>
                                        <td>  {value.name} </td>
                                        <td>  {value.email} </td>
                                        <td>  {value.phone} </td>
                                        <td>  {value.address} </td>
                                        <td>
                                            <Button variant="success">Update</Button>
                                            <Button variant="warning">Delete</Button>
                                            <Button variant="danger">Read</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>

        </>
    )
}

export default Home;
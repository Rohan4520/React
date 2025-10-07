import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router';
import { deleteData } from '../Redux/CURDSlice/CurdSlice';


function Delete () {
    const { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [deleteUserData, setDeleteData] = useState({});
    const { data, isLoading } = useSelector((state) => state.allCurdData );

    useEffect(() => {
        if (id)
       {
            const deleteData = data.filter((User) => User.id === id);
            setDeleteData(deleteData[0]);
        }
    }, [])

    // let getUserData = (e) => {
    //     setDeleteData({ ...deleteUserData, [e.target.name]: e.target.value });
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(deleteData(deleteUserData));
        alert("Your data successfully deleted..")
        navigate('/')
    }

    return (
        <>
           <div>
            <div className='d-flex w-100 mt-3 justify-content-center align-items-center'>
                <div className='w-75 border text-white p-3' style={{ borderRadius: "20px", boxShadow: "0px 8px 15px 1px black", backgroundColor: "#f7dc6f " }}>
                    <h1 style={{ textAlign: "center", color: "#d33525" }}><u>User Registration Form</u></h1> <br />
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridId">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Id</Form.Label>
                                <Form.Control type="number" name='id' value={deleteUserData.id} placeholder="Enter User Id" readOnly  />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Name</Form.Label>
                                <Form.Control type="text" name='name' placeholder="Enter User Name" onChange={(e)=> {setDeleteData({ ...deleteUserData, [e.target.name]: e.target.value })}}  value={deleteUserData.name}/>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAge">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Age</Form.Label>
                                <Form.Control type="number" name='age' placeholder="Enter User Age" onChange={(e)=> {setDeleteData({ ...deleteUserData, [e.target.name]: e.target.value })}} value={deleteUserData.age} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridGender">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Gender</Form.Label>
                                <Form.Select name='gender' defaultValue="Choose..." onChange={(e)=> {setDeleteData({ ...deleteUserData, [e.target.name]: e.target.value })}}  value={deleteUserData.gender}>
                                    <option>Choose...</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Email</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter User Email" onChange={(e)=> {setDeleteData({ ...deleteUserData, [e.target.name]: e.target.value })}} value={deleteUserData.email}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPhone">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Phone</Form.Label>
                                <Form.Control type="tel" name='phone' placeholder="Enter User Number" onChange={(e)=> {setDeleteData({ ...deleteUserData, [e.target.name]: e.target.value })}}  value={deleteUserData.phone}/>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAddress">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Address</Form.Label>
                                <Form.Control type="text" name='city' placeholder="Enter User Address" onChange={(e)=> {setDeleteData({ ...deleteUserData, [e.target.name]: e.target.value })}}  value={deleteUserData.city}/>
                            </Form.Group>
                        </Row>
                        <Button variant="primary" type="submit">
                            Delete 
                        </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <NavLink to="/">
                        <Button variant="success" type="submit">
                            Back To Home
                        </Button>
                        </NavLink>
                    </Form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Delete;
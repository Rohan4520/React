import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router';
import { fetchUpdateData } from '../Redux/CURDSlice/CurdSlice';

function UpdatePage(props) {
    const { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [updateUser, setUpdateUser] = useState({});

    const { data, isLoading } = useSelector((state) => state.allCurdData );

    useEffect(() => {
        if (id)
 {
            const singleUserData = data.filter((User) => User.id === id);
            setUpdateUser(singleUserData[0]);
        }
    }, [])

    // let getUserData = (e) => {
    //     setUpdateUser({ ...updateUser, [e.target.name]: e.target.value });
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(fetchUpdateData(updateUser));
        navigate('/')
    }
    return (
        <div>
            <div className='d-flex w-100 mt-3 justify-content-center align-items-center'>
                <div className='w-75 border text-white p-3' style={{ borderRadius: "20px", boxShadow: "0px 8px 15px 1px black", backgroundColor: "#f7dc6f " }}>
                    <h1 style={{ textAlign: "center", color: "#d33525" }}><u>User Registration Form</u></h1> <br />
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridId">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Id</Form.Label>
                                <Form.Control type="number" name='id' value={updateUser.id} placeholder="Enter User Id" 
                                onChange={(e)=>setUpdateUser({ ...updateUser, [e.target.name]: e.target.value })}  readOnly  />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Name</Form.Label>
                                <Form.Control type="text" name='name' placeholder="Enter User Name" 
                                onChange={(e)=>setUpdateUser({ ...updateUser, [e.target.name]: e.target.value })}  value={updateUser.name}/>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAge">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Age</Form.Label>
                                <Form.Control type="number" name='age' placeholder="Enter User Age" onChange={(e)=>setUpdateUser({ ...updateUser, [e.target.name]: e.target.value })}  value={updateUser.age} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridGender">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Gender</Form.Label>
                                <Form.Select name='gender' defaultValue="Choose..." onChange={(e)=>setUpdateUser({ ...updateUser, [e.target.name]: e.target.value })}   value={updateUser.gender}>
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
                                <Form.Control type="email" name='email' placeholder="Enter User Email" onChange={(e)=>setUpdateUser({ ...updateUser, [e.target.name]: e.target.value })}  value={updateUser.email}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPhone">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Phone</Form.Label>
                                <Form.Control type="tel" name='phone' placeholder="Enter User Number" onChange={(e)=>setUpdateUser({ ...updateUser, [e.target.name]: e.target.value })}  value={updateUser.phone}/>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAddress">
                                <Form.Label style={{ fontSize: "1.3rem", color: "black" }}>User Address</Form.Label>
                                <Form.Control type="text" name='city' placeholder="Enter User Address" onChange={(e)=>setUpdateUser({ ...updateUser, [e.target.name]: e.target.value })}  value={updateUser.city}/>
                            </Form.Group>
                        </Row>
                        <Button variant="primary" type="submit">
                            Update
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
    );
}

export default UpdatePage;
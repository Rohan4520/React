import React, { useEffect } from "react"; 
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { fetchShowData } from "../Redux/CURDSlice/CurdSlice";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router";
import Form from 'react-bootstrap/Form';



function Home() {

    let dispatch = useDispatch();

    let readData =  useSelector((state)=> state.allCurdData.data);

    useEffect(()=> {
            dispatch(fetchShowData());
    },[])

    return (
        <>
        <div className='container mt-2 center'>
            <h1 style={{ textAlign: "center", color: "#d33525", fontFamily: "Rockwell" ,  textDecoration :  "none" }}><u>All User Data</u></h1>

           
          <Form>
          <center>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="All"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Male"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            disabled
            label="Female disable"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
      ))}
      </center>  
    </Form>
            <center>
            <Table className='table w-75 text-center' striped bordered hover
                    style={{ borderRadius: "20px", boxShadow: "0px 8px 15px 1px black" }} >
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>User Name</th>
                            <th>User Age</th>
                            <th>User Gender</th>
                            <th>User Email</th>
                            <th>User Phone </th>
                            <th>User city </th>
                            <th>User action </th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                readData.map((value)=> {
                                    return (
                                        <>
                                            <tr>
                                                <td> {value.id} </td>
                                                <td> {value.name} </td>
                                                <td> {value.age} </td>
                                                <td> {value.gender} </td>
                                                <td> {value.email} </td>
                                                <td> {value.phone}</td>
                                                <td> {value.city} </td>
                                                <td>
                                                <NavLink  to={`/Updatepage/${value.id}`} style={{textDecoration : 'none'}} >
                                                 <button> Update </button>
                                                 </NavLink> 
                                                    &nbsp;  &nbsp;  &nbsp; 
                                                 <NavLink  to={`/Delete/${value.id}`} style={{textDecoration : 'none'}} >
                                                 <button> Delete  </button>
                                                 </NavLink>
                                                 &nbsp;  &nbsp;  &nbsp; 
                                                 <NavLink  to={`/Read`} style={{textDecoration : 'none'}} >
                                                 <button> Read  </button>
                                                 </NavLink>


                                                 
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                    </tbody>
            </Table>
            </center>
        </div>
        </>
        
        
    )
}

export default Home ;
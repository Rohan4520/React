import React from "react";
import { Link, useParams,  } from "react-router";
import UserData from "./UserData"


export default function User(props ) {

    const {id , name , age } = useParams()

    return(
        <> 
            <h1> user page:  {name} </h1>

            <center>
                {
                        UserData.map((value)=>{
                            return (
                                <> 
                                 <Link to={`/user/${value.id}/${value.name}${value.age}`}> <h3> {value.name}</h3></Link>
                                </>
                            )
                        })
                }
                <hr/>
                <table border={3}>
                    <thead>
                        <tr>
                            <th> User id</th>
                            <th> USer Name </th>
                            <th> User age </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> {id} </td>
                            <td> {name} </td>
                            <td> {age}</td>
                        </tr>
                    </tbody>
                </table>
            </center>
        </>
    )
}

import React, { useEffect, useState } from "react";
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CartHome() {

    const [productdata, setProductData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/productItem')
            .then((response) => {
                setProductData(response.data);
            })

    }, [])
    return (
        <>

            <div className="container con">
                <h1 className="text-center"> Product Home page </h1>
                <div className="row cart_row">
                    {
                        productdata.map((item) => {
                            return (
                                <>
                                    <Card style={{ width: '18rem' }} className="mx-2 mt-4 card_style">
                                        <Card.Img variant="top" src={item.image} style={{ height: "14rem" }} className="mt-3 img1" />
                                        <Card.Body className="cart_body">
                                            <Card.Title className="cart_title">{item.category}</Card.Title>
                                            <Card.Text>
                                                Price : {item.price}
                                            </Card.Text>
                                            <div className="cart_btn1">
                                                <Button variant="danger" className="btn1 "> Add to Cart</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </>
                            )
                        }
                        )
                    }
                </div>
            </div>


        </>
    )
}
export default CartHome
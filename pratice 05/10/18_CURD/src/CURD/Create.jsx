import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function Create(props) {
    return (
        <>
        <h1> create data </h1>
        <Container>
        <Form className="form_box">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label> User ID </Form.Label>
          <Form.Control type="number" placeholder="Enter User ID" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label> User name 

          </Form.Label>
          <Form.Control type="text" placeholder=" Enter User Name" />
        </Form.Group>
      </Row>
      <Row className="mb-3">


        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label> Age </Form.Label>
          <Form.Control type="number" placeholder="  Enter Age" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Phone </Form.Label>
          <Form.Control type="tel" placeholder="Enter Phone number " />
        </Form.Group>
      </Row>


      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>


      <Button variant="primary" type="submit">
        Submit
      </Button>
      &nbsp; &nbsp;&nbsp;
      <Button variant="warning" type="reset">
        Reset
      </Button>
    </Form>
    </Container>
        </>
    )
}
export default Create;
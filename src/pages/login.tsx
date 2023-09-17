import React from "react";
import { Form, Button } from "react-bootstrap";

interface props {}


const LoginPage: React.FC<props> = (props) => {

    return(
        <div className="login-form">
        <Form style={{margin: "2vh"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    )
}

export default LoginPage;
import React from "react";
import { Form, Button } from "react-bootstrap";

interface Props{}

const TournamentCreator: React.FC<Props> = (props) => {
    return(
        <div className="tCreator">
            <h2 className="text-center">Tournament Creator</h2>
            <Form style={{margin:"2vh"}}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control required type="text" placeholder="Enter tournament title"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="tournamentDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control required as="textarea" placeholder="Enter tournament description"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="rewards">
                    <Form.Label>Rewards</Form.Label>
                    <Form.Control required as="textarea" placeholder="Enter rewards"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="rules">
                    <Form.Label>Rules</Form.Label>
                    <Form.Control required as="textarea" placeholder="Enter rules"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}


export default TournamentCreator;
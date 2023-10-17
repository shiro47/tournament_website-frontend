import React, { useState } from "react";
import { Card, Button, Col, Row, Accordion, Stack, Form } from "react-bootstrap";
import { useAuth } from "./AuthContext";

interface Team {
    id: number;
    name: string;
    player1: player;
    player2: player;
    player3: player;
    isActive?: boolean;
}

interface player {
    name: string;
    platform: string;
    discordID: number;
    discordName: string;
}

interface props {
    teams: Team[];
    toAccept?: boolean;
}


const TeamCards: React.FC<props> = (props) => {
    const { teams, toAccept } = props;
    const { getNewAccessToken } = useAuth();
    const [teamsData, setTeamsData] = useState(teams);

    const handleReject = async (teamId: number) => {
        try {
            const response = await fetch(`http://localhost:8000/api/teams/${teamId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + localStorage.getItem("accessToken"),
                },
            });

            if (response.ok) {
                setTeamsData(teamsData.filter((team) => team.id !== teamId));
                alert('Team rejected successfully');
            } else if (response.status === 401) {
                await getNewAccessToken();
                alert("Please try again. If still not working, try relogin.")
            } else {
                alert('Failed to reject team');
            }
        } catch (error) {
            console.error('An error occurred while rejecting team:', error);
        }
    };

    const handleAccept = async (teamId: number) => {
        try {
            const response = await fetch(`http://localhost:8000/api/tournaments/accept_team/${teamId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + localStorage.getItem("accessToken"),
                },
            });

            if (response.ok) {
                setTeamsData(teamsData.filter((team) => team.id !== teamId));
                alert('Team accepted successfully');
            } else if (response.status === 401) {
                await getNewAccessToken();
                alert("Please try again. If still not working, try relogin.")
            } else {
                alert('Failed to accept team');
            }
        } catch (error) {
            console.error('An error occurred while accepting team:', error);
        }
    };


    return (
        <><Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="g-4">
            {teamsData.map((team, index) => (
                <Col >
                    <Card key={index}>
                        <Form>
                            <Card.Body>
                                <Card.Title>{team.name}</Card.Title>
                                <Card.Text>
                                    <Accordion>
                                        {[team.player1, team.player2, team.player3].map((player, pIndex) => (
                                            <Accordion.Item eventKey={pIndex.toString()} key={pIndex}>
                                                <Accordion.Header>{player.name}</Accordion.Header>
                                                <Accordion.Body>
                                                    <Form.Group>
                                                        <Form.Label>Discord id</Form.Label>
                                                        <Form.Control
                                                            style={{ height: "30px" }}
                                                            placeholder="Discord id"
                                                            value={player.discordID}
                                                            disabled
                                                        />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Label>Discord name</Form.Label>
                                                        <Form.Control
                                                            style={{ height: "30px" }}
                                                            placeholder="Discord name"
                                                            value={player.discordName}
                                                            disabled
                                                        />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Label>Platform</Form.Label>
                                                        <Form.Control
                                                            style={{ height: "30px" }}
                                                            placeholder="Platform"
                                                            value={player.platform}
                                                            disabled
                                                        />
                                                    </Form.Group>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </Card.Text>
                                {toAccept && (<Stack direction="horizontal" gap={2}>
                                    <Button variant="success" onClick={() => handleAccept(team.id)}>Accept</Button>
                                    <div className="vr" />
                                    <Button variant="danger" onClick={() => handleReject(team.id)}>Reject</Button>
                                </Stack>)}

                            </Card.Body>
                        </Form>
                    </Card>
                </Col>
            ))}
        </Row>
        </>
    )
}

export default TeamCards;
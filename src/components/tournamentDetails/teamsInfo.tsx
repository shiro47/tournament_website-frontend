import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

interface Team {
  id: number;
  name: string;
  player1: player;
  player2: player;
  player3: player;
}

interface player{
  name: string;
}

interface Props {
  teams: Team[];
}

const TeamsInfo: React.FC<Props> = (props) => {
  const { teams } = props;
  return (
    <div>
      <h2 className="text-center">Teams</h2>
      <Container>
      <Row className="team-list">
        {teams.map((team, index) => (
          <Col key={index} xs={6} md={4} lg={3} xl={3} className="team-card-col">
            <Card className="team-card">
              <Card.Body>
                <Card.Title>{team.name}</Card.Title>
                <Card.Text>
                  <ul>
                    <li>{team.player1.name}</li>
                    <li>{team.player2.name}</li>
                    <li>{team.player3.name}</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>
    </div>
  );
};

export default TeamsInfo;

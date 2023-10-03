import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

interface Team {
  id: number;
  name: string;
  player1: number;
  player2: number;
  player3: number;
  player1_name: string;
  player2_name: string;
  player3_name: string;
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
                    <li>Player 1: {team.player1_name}</li>
                    <li>Player 2: {team.player2_name}</li>
                    <li>Player 3: {team.player3_name}</li>
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

import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import TeamCards from "../teamCards";

interface Team {
  id: number;
  name: string;
  player1: player;
  player2: player;
  player3: player;
  isActive: boolean;
}

interface player {
  name: string;
  platform: string;
  discordID: number;
  discordName: string;
}

interface Props {
  teams: Team[];
}

const TeamsInfo: React.FC<Props> = (props) => {
  const { teams } = props;
  const activeTeams = teams.filter((team) => team.isActive);
  return (
    <div>
      <h2 className="text-center">Teams</h2>
      <div style={{ padding: "1vh" }}>
        <TeamCards teams={activeTeams} />
      </div>
    </div>
  );
};

export default TeamsInfo;

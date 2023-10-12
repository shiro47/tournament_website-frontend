import React from "react";
import { Nav, Tab } from "react-bootstrap";
import GeneralInfo from "../components/tournamentDetails/generalInfo";
import TeamsInfo from "../components/tournamentDetails/teamsInfo";
import { useLocation } from "react-router-dom";

interface props {}

const TournamentDetails: React.FC<props> = (props) => {
  const location = useLocation();
  const tournamentData = location.state.tournamentData;
    return(
      <div className="tDetails">
        <Tab.Container  id="tabs-example" defaultActiveKey="general" >
      <div>
        <Nav fill variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="general">General</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="teams">Teams</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Tab.Content >
        <Tab.Pane eventKey="general">
          <GeneralInfo details={tournamentData}/>
        </Tab.Pane>
        <Tab.Pane eventKey="teams">
          <TeamsInfo teams={tournamentData.teams}/>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
    </div>
    );
}


export default TournamentDetails;
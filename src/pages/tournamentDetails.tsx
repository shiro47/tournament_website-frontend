import React from "react";
import { Nav, Tab } from "react-bootstrap";
import GeneralInfo from "../components/tournamentDetails/generalInfo";
import TeamsInfo from "../components/tournamentDetails/teamsInfo";

interface props {
    
}

const TournamentDetails: React.FC<props> = (props) => {
    return(
      <div className="tDetails">
        <Tab.Container id="tabs-example" defaultActiveKey="general" >
      <div>
        <Nav variant="tabs">
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
          <label>data</label>
          <GeneralInfo/>
        </Tab.Pane>
        <Tab.Pane eventKey="teams">
          <TeamsInfo/>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
    </div>
    );
}


export default TournamentDetails;
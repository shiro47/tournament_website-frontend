import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignupModal from "./signupModal";

interface details {
  id: number;
  description: string;
  rewards: string;
  rules: string;
  created_at: string;
  starting_at: string;
}

interface Props {
  details: details;
}

const GeneralInfo: React.FC<Props> = (props) => {
  const { details } = props
  return (
    <div>
      <small>Created at: {new Date(details.created_at).toLocaleString()}</small>
      <h2 className="text-center">General Info</h2>
      <Container>
        <Row>
          <Col><img
            style={{ width: "40vh", borderRadius: "2vh" }}
            alt="asdad"
            src="https://c4.wallpaperflare.com/wallpaper/615/444/957/wraith-apex-legends-apex-legends-hd-wallpaper-preview.jpg" /></Col>
          <Col><div>{details.description}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum et mauris ut finibus. Maecenas vehicula ut arcu a sagittis. Nunc euismod quam ante, in euismod nisl accumsan quis. Nullam id turpis diam. Praesent tincidunt, nunc non condimentum tincidunt, ante lectus tempus ligula, malesuada semper lectus justo eget justo. In dui nunc, ornare nec turpis sed, aliquam feugiat nisi. Aliquam ut est molestie sem mollis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula porta libero, a euismod sapien finibus id. Nulla rutrum justo elit, ac molestie ligula blandit a. Phasellus ex orci, sagittis non elementum ut, viverra nec urna. Vivamus nec pharetra est, eu imperdiet purus. Proin eros sem, auctor vitae tellus vel, condimentum vestibulum urna.</div></Col>
        </Row>
      </Container>
      <Container style={{ marginTop: "3vh" }}>
        <Row>
          <Col><h2 className="text-center">Rewards</h2>{details.rewards}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum et mauris ut finibus. Maecenas vehicula ut arcu a sagittis. Nunc euismod quam ante, in euismod nisl accumsan quis. Nullam id turpis diam. Praesent tincidunt, nunc non condimentum tincidunt, ante lectus tempus ligula, malesuada semper lectus justo eget justo. In dui nunc, ornare nec turpis sed, aliquam feugiat nisi. Aliquam ut est molestie sem mollis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula porta libero, a euismod sapien finibus id. Nulla rutrum justo elit, ac molestie ligula blandit a. Phasellus ex orci, sagittis non elementum ut, viverra nec urna. Vivamus nec pharetra est, eu imperdiet purus. Proin eros sem, auctor vitae tellus vel, condimentum vestibulum urna.</Col>
          <Col><h2 className="text-center">Rules</h2>{details.rules}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum et mauris ut finibus. Maecenas vehicula ut arcu a sagittis. Nunc euismod quam ante, in euismod nisl accumsan quis. Nullam id turpis diam. Praesent tincidunt, nunc non condimentum tincidunt, ante lectus tempus ligula, malesuada semper lectus justo eget justo. In dui nunc, ornare nec turpis sed, aliquam feugiat nisi. Aliquam ut est molestie sem mollis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula porta libero, a euismod sapien finibus id. Nulla rutrum justo elit, ac molestie ligula blandit a. Phasellus ex orci, sagittis non elementum ut, viverra nec urna. Vivamus nec pharetra est, eu imperdiet purus. Proin eros sem, auctor vitae tellus vel, condimentum vestibulum urna.</Col>
        </Row>
        <Row className="justify-content-center">
          <SignupModal tournamentID={details.id} />
        </Row>
      </Container>
    </div>
  );
};


export default GeneralInfo;
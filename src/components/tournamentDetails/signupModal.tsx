import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';

interface Props {
  tournamentID: number;
}

const SignupModal: React.FC<Props> = (props) => {
  const { tournamentID } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const players = [
    { label: 'Player 1', refName: 'player1' },
    { label: 'Player 2', refName: 'player2' },
    { label: 'Player 3', refName: 'player3' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create an object to store the form data for all players
    const formData: any = {
      name: (document.getElementById('teamName') as HTMLInputElement).value,
    };

    players.forEach((player) => {
      const playerData = {
        name: (document.getElementById(`${player.refName}Name`) as HTMLInputElement).value,
        discordName: (document.getElementById(`${player.refName}DiscordName`) as HTMLInputElement).value,
        discordID: (document.getElementById(`${player.refName}DiscordId`) as HTMLInputElement).value,
        platform: (document.getElementById(`${player.refName}Platform`) as HTMLSelectElement).value,
      };

      formData[player.refName] = playerData;
    });
    console.log(formData)
    try {
      const response = await fetch(`/api/tournaments/${tournamentID}/add_team`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        alert("Team registration successful!");
        handleClose();
      } else {
        // Handle error
        alert('Team registration failed.');
      }
    } catch (error) {
      console.error('An error occurred. Please try again later.', error);
    }
  };

  return (
    <>
      <Button style={{ width: '10vh', margin: '3vh', borderRadius: '2vh' }} onClick={handleShow}>
        SIGN UP
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Register your team</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="teamName">
              <Form.Label>Team name</Form.Label>
              <Form.Control type="text" placeholder="Enter team name" required />
            </Form.Group>

            {players.map((player, index) => (
              <div key={index}>
                <hr style={{ borderWidth: "2px" }} />
                <Form.Group className="mb-3" controlId={`${player.refName}Name`}>
                  <Form.Label>{player.label} Name</Form.Label>
                  <Form.Control type="text" placeholder={`${player.label} name`} required />
                </Form.Group>
                <Row>
                  <Form.Group as={Col} className="mb-3" controlId={`${player.refName}DiscordName`}>
                    <Form.Label>{player.label} Discord Name</Form.Label>
                    <Form.Control type="text" placeholder={`Discord name`} required />
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3" controlId={`${player.refName}DiscordId`}>
                    <Form.Label>{player.label} Discord Id</Form.Label>
                    <Form.Control type="number" placeholder={`Discord id`} required />
                    <Form.Text
                      className='text-muted'
                      target='_blank'
                      as={'a'}
                      href='https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-'>
                      How to get discord id
                    </Form.Text>
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId={`${player.refName}Platform`}>
                  <Form.Label>{player.label} Platform</Form.Label>
                  <Form.Select aria-label={`Select platform`} required>
                    <option>Select platform</option>
                    <option value="PC">PC</option>
                    <option value="PS4">Playstation</option>
                    <option value="X1">XBOX</option>
                  </Form.Select>
                </Form.Group>
              </div>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default SignupModal;

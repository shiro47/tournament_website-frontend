import React, { useState } from 'react';
import { Card, Row, Col, Pagination, Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { TrashFill } from 'react-bootstrap-icons';
import { useAuth } from './AuthContext';

interface Team {
  id: number;
  name: string;
  player1: number;
  player2: number;
  player3: number;
}

interface Tournament {
  id: number,
  title: string;
  date: string;
  description: string;
  rewards: string;
  rules: string;
  created_at: string;
  starting_at: string;
  teams: Team[];

  // ...other properties
}

interface Props {
  tournaments: Tournament[];
  isMyTournaments?: boolean;
}

const TournamentsCards: React.FC<Props> = (props) => {
  const { tournaments, isMyTournaments } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { getNewAccessToken } = useAuth();

  const handleDelete = async (tournamentId: number) => {
    try {
      const response = await fetch(`/api/tournaments/${tournamentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      });

      if (response.ok) {
        window.location.reload()
        alert('Tournament deleted successfully');
        // const updatedTournaments = tournaments.filter((tournament) => tournament.id !== tournamentId);
      } else if (response.status === 401) {
        await getNewAccessToken();
        alert("Please try again. If still not working, try relogin.")
      } else {
        alert('Failed to delete tournament');
      }
    } catch (error) {
      console.error('An error occurred while deleting tournament:', error);
    }
  };

  // Calculate itemsPerPage based on screen size
  let itemsPerPage = 6; // Default number of cards per page

  if (window.innerWidth < 768) { // For smaller screens
    itemsPerPage = 4;
  }

  const totalPages = Math.ceil(tournaments.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, tournaments.length);

  const currentTournaments = tournaments.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="scrollable-card-group">
      {currentTournaments.map((tournament, index) => (
        <Card key={index} className='tournament-card'>
          <Card.Body>
            <Row>
              <Col xs={6} sm={5} md={4} lg={3} xl={2} xxl={1}> {/* Adjust the width of the image column */}
                <Card.Img
                  className="img-fluid"
                  src='https://r4.wallpaperflare.com/wallpaper/623/270/361/video-game-apex-legends-bloodhound-apex-legends-hd-wallpaper-e960480df17a1d1b96f7a89f90f1563d.jpg'
                  alt="asdads"
                />
              </Col>
              <Col xs={6} md={8}> {/* Adjust the width of the content column */}
                <Card.Title>{tournament.title}</Card.Title>
                <Card.Text>{new Date(tournament.starting_at).toLocaleString()}</Card.Text>
                {/* ...other card content */}
              </Col>
              <Stack direction='horizontal' gap={2}>
                <Button variant="outline-info" size='sm' onClick={() => navigate(`/tournament/${tournament.title}`, {
                  state: { tournamentData: tournament }
                })}
                  style={{ width: "100%" }}>
                  View details
                </Button>
                {isMyTournaments && (
                  <>
                    <Button
                      variant="outline-warning"
                      size="sm"
                      onClick={() => navigate(`/tournament/edit/${tournament.id}`, {
                        state: { tournamentData: tournament }
                      })}
                      style={{ width: "100%" }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      style={{ width: "100%" }}
                      onClick={() => navigate(`/tournament/teams/${tournament.id}`, {
                        state: { tournamentData: tournament }
                      })}
                    >
                      Teams check-in
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      style={{ width: "15%" }}
                      onClick={() => handleDelete(tournament.id)}
                    >
                      <TrashFill />
                    </Button>
                  </>
                )}
              </Stack>
            </Row>
          </Card.Body>
        </Card>
      ))}

      <div className="d-flex justify-content-center">
        <Pagination>
          {Array.from({ length: totalPages }).map((_, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
};

export default TournamentsCards;

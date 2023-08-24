import React, { useState } from 'react';
import { Card, Row, Col, Pagination } from 'react-bootstrap';

interface Tournament {
  title: string;
  date: string;
  // ...other properties
}

interface Props {
  tournaments: Tournament[];
}

const TournamentsCards: React.FC<Props> = (props) => {
  const { tournaments } = props;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate itemsPerPage based on screen size
  let itemsPerPage = 8; // Default number of cards per page

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
              <Col xs={1} md={1}> {/* Adjust the width of the image column */}
                <Card.Img
                  className="img-fluid"
                  src='https://r4.wallpaperflare.com/wallpaper/623/270/361/video-game-apex-legends-bloodhound-apex-legends-hd-wallpaper-e960480df17a1d1b96f7a89f90f1563d.jpg'
                  alt="asdads"
                />
              </Col>
              <Col xs={12} md={8}> {/* Adjust the width of the content column */}
                <Card.Title>{tournament.title}</Card.Title>
                <Card.Text>{tournament.date}</Card.Text>
                {/* ...other card content */}
              </Col>
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

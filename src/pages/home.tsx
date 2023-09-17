import React from "react";
import { Button, Container } from "react-bootstrap";

interface props {}

const HomePage: React.FC<props> = (props) => {

    return(
        <>
        <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="flex-grow-1">
        {/* Hero Section */}
        <div className="text-white text-center py-5">
          <Container>
            <h1>Welcome to Our Tournament Website</h1>
            <p>Discover and participate in exciting tournaments!</p>
            <Button variant="light" href="/tournaments">
              Explore Tournaments
            </Button>
          </Container>
        </div>
      </div>
      </div>
      </>
    )
}

export default HomePage;
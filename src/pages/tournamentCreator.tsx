import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface Props {}

const TournamentCreator: React.FC<Props> = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rewards, setRewards] = useState("");
  const [rules, setRules] = useState("");
  const [date, setDate] = useState("")
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const starting_at = date;
    console.log(JSON.stringify({
      title,
      description,
      rewards,
      rules,
      starting_at,
    }))
    try {
      const response = await fetch("http://localhost:8000/api/tournaments/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
        body: JSON.stringify({
          title,
          description,
          rewards,
          rules,
          date,
        }),
      });

      if (response.ok) {
        // Tournament created successfully
        // You can handle success as needed, e.g., show a success message
        console.log("Tournament created successfully");
        navigate("/tournaments");
      } else {
        // Handle error responses from the API
        setError("Failed to create tournament. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="tCreator">
      <h2 className="text-center">Tournament Creator</h2>
      <Form style={{ margin: "2vh" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter tournament title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="tournamentDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            as="textarea"
            placeholder="Enter tournament description"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="rewards">
          <Form.Label>Rewards</Form.Label>
          <Form.Control
            required
            value={rewards}
            onChange={(e) => setRewards(e.target.value)}
            as="textarea"
            placeholder="Enter rewards"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="rules">
          <Form.Label>Rules</Form.Label>
          <Form.Control
            required
            value={rules}
            onChange={(e) => setRules(e.target.value)}
            as="textarea"
            placeholder="Enter rules"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="starting_at">
          <Form.Label>Starting at</Form.Label>
              <Form.Control
                type="datetime-local"
                name="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
          </Form.Group>
        {error && <div className="text-danger">{error}</div>}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default TournamentCreator;

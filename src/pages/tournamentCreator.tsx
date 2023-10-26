import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import CustomEditor from "../components/RichEditor";

interface Props { }

const TournamentCreator: React.FC<Props> = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rewards, setRewards] = useState("");
  const [rules, setRules] = useState("");
  const [date, setDate] = useState("")
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { getNewAccessToken } = useAuth();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const starting_at = date;
    try {
      const response = await fetch("/api/tournaments/", {
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
          starting_at,
        }),
      });

      if (response.ok) {
        console.log("Tournament created successfully");
        navigate("/tournaments");
      } else if (response.status === 401) {
        await getNewAccessToken();
        setError("Please try again. If still not working, try relogin.")
      } else {
        setError("Failed to create tournament. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="tCreator">
      <h2 className="text-center">Tournament Creator</h2>
      <Form onSubmit={handleSubmit}>
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
          <CustomEditor
            onEditorChange={(content) => setDescription(content)}
            isRequired={true}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="rewards">
          <Form.Label>Rewards</Form.Label>
          <CustomEditor
            onEditorChange={(content) => setRewards(content)}
            isRequired={true}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="rules">
          <Form.Label>Rules</Form.Label>
          <CustomEditor
            onEditorChange={(content) => setRules(content)}
            isRequired={true}
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
        {error && <Alert variant="danger">
          {error}
        </Alert>}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default TournamentCreator;

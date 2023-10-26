import React, { useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import CustomEditor from "../components/RichEditor";

interface props { }

const TournamentEditor: React.FC<props> = (props) => {
  const location = useLocation();
  const tournamentData = location.state.tournamentData;
  const { getNewAccessToken } = useAuth();
  const [title, setTitle] = useState(tournamentData.title);
  const [description, setDescription] = useState(tournamentData.description);
  const [rewards, setRewards] = useState(tournamentData.rewards);
  const [rules, setRules] = useState(tournamentData.rules);
  const [startingAt, setStartingAt] = useState(new Date(tournamentData.starting_at).toISOString().slice(0, -8));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      title,
      description,
      rewards,
      rules,
      starting_at: startingAt,
    };

    try {
      const response = await fetch(`/api/tournaments/${tournamentData.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Tournament edited successfully");
        window.location.href = "/mytournaments";
      } else if (response.status === 401) {
        await getNewAccessToken();
        alert("Please try again. If still not working, try relogin.");
      } else {
        // Handle error responses from the API
        console.error("Failed to create tournament. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred. Please try again later.", error);
    }
  };
  return (
    <>
      <div className="tCreator">
        <h2 className="text-center">Tournament Editor</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Tournament title</Form.Label>
            <Form.Control
              name="title"
              defaultValue={tournamentData.title}
              onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <CustomEditor
              onEditorChange={(content) => { setDescription(content) }}
              editorValue={tournamentData.description}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rewards</Form.Label>
            <CustomEditor
              onEditorChange={(content) => { setRewards(content) }}
              editorValue={tournamentData.rewards}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rules</Form.Label>
            <CustomEditor
              onEditorChange={(content) => { setRules(content) }}
              editorValue={tournamentData.rules}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Starting at</Form.Label>
            <Form.Control
              type="datetime-local"
              name="starting_at"
              placeholder="Date"
              defaultValue={startingAt}
              onChange={(e) => setStartingAt(e.target.value)}
            />
          </Form.Group>
          <Stack direction="horizontal" gap={2}>
            <Button type="submit">Submit changes</Button>
            <Button variant="outline-danger" href="/mytournaments">Discard changes</Button>
          </Stack>
        </Form>
      </div>
    </>
  )
}

export default TournamentEditor;
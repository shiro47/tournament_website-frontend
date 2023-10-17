import React from "react";
import { Form, Button, Stack } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

interface props { }

const TournamentEditor: React.FC<props> = (props) => {
    const location = useLocation();
    const tournamentData = location.state.tournamentData;
    const { getNewAccessToken } = useAuth();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data = new FormData(form);

        const formData: { [key: string]: any } = {};
        data.forEach((value, key) => {
            formData[key] = value;
        });
        console.log(formData)
        try {
            const response = await fetch(`http://localhost:8000/api/tournaments/${tournamentData.id}`, {
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
                alert("Please try again. If still not working, try relogin.")
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
                        <Form.Control name="title" defaultValue={tournamentData.title} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as={"textarea"} rows={3} name="description" defaultValue={tournamentData.description} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Rewards</Form.Label>
                        <Form.Control as={"textarea"} rows={3} name="rewards" defaultValue={tournamentData.rewards} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Rules</Form.Label>
                        <Form.Control as={"textarea"} rows={3} name="rules" defaultValue={tournamentData.rules} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Starting at</Form.Label>
                        <Form.Label></Form.Label>
                        <Form.Control
                            type="datetime-local"
                            name="starting_at"
                            placeholder="Date"
                            defaultValue={new Date(tournamentData.starting_at).toISOString().slice(0, -8)}
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
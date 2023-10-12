import React, { useState, useEffect } from "react";
import { Stack, Button, Form } from "react-bootstrap";
import TournamentsCards from "../components/tournamentsCards";
import { useAuth } from "../components/AuthContext";
interface props{}

const MyTournaments: React.FC<props> = (props) => {
    const [TournamentsData, setTournamentsData] = useState([])
    const { getNewAccessToken } = useAuth();
    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/tournaments?created_by=true", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("accessToken"),
                  },
            });
            if (response.ok) {
                const data = await response.json();
                setTournamentsData(data);
            } else if (response.status === 401) {
                await getNewAccessToken();
                window.location.reload()
            } else {
                console.error("Failed to fetch data");
            }
        } catch (error) {
            console.error("Error while fetching data:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return(
        <>
        <h2 className="text-center">My tournaments</h2>
        <div className="tournaments-box">
            <Stack direction="horizontal" gap={2}>
                <Form.Control className="me-auto" placeholder="Search by tournament title..." />
                <Button variant="secondary">Search</Button>
                <div className="vr" />
                <Button variant="outline-danger">Reset</Button>
            </Stack><TournamentsCards tournaments={TournamentsData}/></div>
        </>
    )
}


export default MyTournaments;
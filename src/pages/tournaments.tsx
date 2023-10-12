import React, { useEffect, useState, useRef } from "react";
import TournamentsCards from "../components/tournamentsCards";
import { Stack, Button, Form } from "react-bootstrap";

interface props {}

const Tournaments: React.FC<props> = (props) => {
    const [tournamentsData, setTournamentsData] = useState([]);
    const searchInputRef = useRef<HTMLInputElement | null>(null);
    const handleReset = () => {
        if (searchInputRef.current) {
            searchInputRef.current.value = ""; // Reset the value of the Form.Control
        }
        fetchData();
    };

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/tournaments");
            if (response.ok) {
                const data = await response.json();
                setTournamentsData(data);
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
        <h2 className="text-center">Tournaments</h2>
        <div className="tournaments-box">
            <Stack direction="horizontal" gap={2}>
                <Form.Control className="me-auto" placeholder="Search by tournament title..." ref={searchInputRef}/>
                <Button variant="secondary">Search</Button>
                <div className="vr" />
                <Button variant="outline-danger" onClick={handleReset}>Reset</Button>
            </Stack>
        <TournamentsCards tournaments={tournamentsData}/>
        </div>
        </>
    );
    }

export default Tournaments;
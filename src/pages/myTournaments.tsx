import React, { useState, useEffect, useRef, useCallback } from "react";
import { Stack, Button, Form } from "react-bootstrap";
import TournamentsCards from "../components/tournamentCards";
import { useAuth } from "../components/AuthContext";

interface Props {}

const MyTournaments: React.FC<Props> = (props) => {
    const [TournamentsData, setTournamentsData] = useState([]);
    const { getNewAccessToken } = useAuth();
    const searchInputRef = useRef<HTMLInputElement | null>(null);

    const handleReset = () => {
        if (searchInputRef.current) {
            searchInputRef.current.value = ""; // Reset the value of the Form.Control
        }
        fetchData();
    };

    const fetchData = useCallback(async (title?: string) => {
        try {
            const url = title ? `/api/tournaments?created_by=true&title=${title}` : "/api/tournaments?created_by=true";
            const response = await fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("accessToken"),
                },
            });
            if (response.ok) {
                const data = await response.json();
                setTournamentsData(data);
            } else if (response.status === 401) {
                getNewAccessToken();
                window.location.reload();
            } else {
                console.error("Failed to fetch data");
            }
        } catch (error) {
            console.error("Error while fetching data:", error);
        }
    }, [getNewAccessToken]);

    const handleSearch = () => {
        const searchValue = searchInputRef.current?.value;
        if (searchValue) {
            fetchData(searchValue);
        }
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            <h2 className="text-center">My tournaments</h2>
            <div className="tournaments-box">
                <Stack direction="horizontal" gap={2}>
                    <Form.Control className="me-auto" placeholder="Search by tournament title..." ref={searchInputRef} />
                    <Button variant="secondary" onClick={handleSearch}>
                        Search
                    </Button>
                    <div className="vr" />
                    <Button variant="outline-danger" onClick={handleReset}>
                        Reset
                    </Button>
                </Stack>
                <hr />
                <TournamentsCards tournaments={TournamentsData} isMyTournaments={true} />
            </div>
        </>
    );
};

export default MyTournaments;

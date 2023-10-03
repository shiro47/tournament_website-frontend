import React, { useEffect, useState } from "react";
import TournamentsCards from "../components/tournamentsCards";

interface props {}

const Tournaments: React.FC<props> = (props) => {
    const [tournamentsData, setTournamentsData] = useState([]);
    const tournamentsDataa = [
        { id: 1, title: 'Tournament 1', date: '2023-08-16' },
        { id: 1, title: 'Tournament 1', date: '2023-08-16' },
        { id: 1, title: 'Tournament 1', date: '2023-08-16' },
        { id: 1, title: 'Tournament 1', date: '2023-08-16' },
        { id: 1, title: 'Tournament 1', date: '2023-08-16' },
        { id: 1, title: 'Tournament 1', date: '2023-08-16' },
        { id: 1, title: 'Tournament 1', date: '2023-08-16' },
        { id: 1, title: 'Tournament 1', date: '2023-08-16' },
        { id: 1, title: 'Tournament 1', date: '2023-08-16' },
        { id: 1, title: 'Tournament 1', date: '2023-08-16' }]

    useEffect(() => {
            // Define an async function to fetch the data
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
    
            // Call the fetchData function to initiate the GET request
            fetchData();
        }, []);
    return(
        <>
        <div>
        <TournamentsCards tournaments={tournamentsData}/>
        </div>
        </>
    );
    }

export default Tournaments;